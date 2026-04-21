# Database Schema Suggestion (Supabase / PostgreSQL)

Como solicitado na arquitetura do projeto, aqui está a sugestão do esquema de banco de dados relacional voltado para o Supabase. Este modelo permite escalar o aplicativo no futuro, suportando múltiplos livros, controle de progresso dos leitores e interações (como anotações/marcações).

## Tabelas Principais

### 1. `books` (Livros)
Armazena as informações gerais das obras.
- `id` (uuid, PK, autoincrement)
- `title` (text, not null)
- `author` (text, not null)
- `description` (text)
- `cover_url` (text)
- `created_at` (timestamp, default now())

### 2. `chapters` (Capítulos)
Armazena o conteúdo estruturado da obra.
- `id` (uuid, PK)
- `book_id` (uuid, FK -> books.id, not null)
- `order` (integer, not null) - *Para ordenação correta das páginas.*
- `title` (text, not null)
- `content` (jsonb ou text) - *O ideal é armazenar em JSON (como tipologia de blocos) ou Markdown para renderização flexível no frontend.*
- `created_at` (timestamp, default now())

### 3. `user_progress` (Progresso do Leitor)
Rastreia onde o usuário parou e o que já concluiu.
- `id` (uuid, PK)
- `user_id` (uuid, FK -> auth.users.id, not null) - *Vinculado ao sistema de autenticação do Supabase.*
- `book_id` (uuid, FK -> books.id, not null)
- `current_chapter_id` (uuid, FK -> chapters.id)
- `completed_chapters` (uuid array)
- `updated_at` (timestamp)

### 4. `user_highlights` (Marcações e Anotações)
Permite que o usuário faça grifos e anotações.
- `id` (uuid, PK)
- `user_id` (uuid, FK -> auth.users.id, not null)
- `chapter_id` (uuid, FK -> chapters.id, not null)
- `selected_text` (text, not null)
- `note` (text, nullable)
- `created_at` (timestamp, default now())

## Políticas de Segurança (Row Level Security - RLS)
Para garantir a segurança no Supabase:
1. **`books` / `chapters`**: `SELECT` público (ou apenas para usuários logados). `INSERT/UPDATE/DELETE` apenas para `admin`.
2. **`user_progress` / `user_highlights`**: `SELECT/INSERT/UPDATE/DELETE` apenas onde `auth.uid() = user_id` (Apenas o próprio usuário acessa seus dados).
