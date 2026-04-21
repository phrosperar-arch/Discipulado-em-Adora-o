-- Copie e cole este código no SQL Editor do seu Supabase para criar as tabelas!

-- 1. Criação da Tabela de Respostas e Anotações (Onde as respostas do E-book ficarão salvas)
CREATE TABLE IF NOT EXISTS user_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL, -- Relacionado ao usuário logado
    chapter_index INTEGER NOT NULL,                  -- O número do capítulo (ex: 0, 1, 2)
    question_id TEXT NOT NULL,                       -- O identificador da pergunta
    answer_text TEXT NOT NULL,                       -- O que o leitor digitou
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Índice para acelerar a busca das respostas do mesmo usuário
CREATE INDEX IF NOT EXISTS idx_user_responses_user_id ON user_responses(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_responses_unique ON user_responses(user_id, chapter_index, question_id);

-- 3. Habilitar Segurança (Row Level Security - RLS)
-- Isso garante que um leitor não consiga ver ou apagar a resposta de outro leitor.
ALTER TABLE user_responses ENABLE ROW LEVEL SECURITY;

-- 4. Regras de Permissão Seguras
-- A) Leitores podem LER apenas as próprias respostas
CREATE POLICY "Leitores veem apenas suas respostas" 
ON user_responses FOR SELECT 
USING (auth.uid() = user_id);

-- B) Leitores podem INSERIR as próprias respostas
CREATE POLICY "Leitores inserem apenas suas respostas" 
ON user_responses FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- C) Leitores podem ATUALIZAR as próprias respostas
CREATE POLICY "Leitores atualizam apenas suas respostas" 
ON user_responses FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Opcional: Criação do perfil dos usuários e liberação de acesso
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid references auth.users ON DELETE CASCADE not null primary key,
  email text,
  is_approved boolean DEFAULT false,
  full_name text,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários veem o próprio perfil." ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Usuários atualizam o próprio perfil." ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Administradores (Substitua pelos emails reais se desejar travar via SQL) podem ver e aprovar:
CREATE POLICY "Admins podem ver e atualizar todos os perfis" ON public.profiles 
FOR ALL USING (auth.jwt() ->> 'email' IN ('phrosperar@gmail.com', 'prmarciog@gmail.com'));

-- Para confirmar todos os emails de teste automaticamente:
-- UPDATE auth.users SET email_confirmed_at = NOW() WHERE email_confirmed_at IS NULL;
