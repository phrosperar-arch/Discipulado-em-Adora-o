import { createClient } from '@supabase/supabase-js';

// Função para garantir que a URL seja ESTRITAMENTE o domínio base (origin),
// ignorando caminhos adicionais como /rest/v1 que o usuário possa ter colado por engano.
const sanitizeSupabaseUrl = (rawUrl: string) => {
  try {
    const parsed = new URL(rawUrl.trim());
    return parsed.origin; // Pega APENAS a parte "https://dominio.supabase.co"
  } catch {
    return rawUrl.trim().replace(/\/+$/, '');
  }
};

const rawUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wbdjseegofccqwjqwcni.supabase.co';
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_OFV-sN7MnLQkkjyDJmtf3w_QaDNLSoc';

const supabaseUrl = sanitizeSupabaseUrl(rawUrl);
const supabaseKey = rawKey.trim();

console.log("SUPER DEBUG SUPABASE URL:", JSON.stringify({ rawUrl, supabaseUrl }));

export const supabase = createClient(supabaseUrl, supabaseKey);
