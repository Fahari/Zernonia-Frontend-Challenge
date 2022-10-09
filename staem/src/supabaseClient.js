import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
const supabaseAuthorization = import.meta.env.VITE_PUBLIC_SUPABASE_AUTHORIZATION;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	headers: { Authorization: supabaseAuthorization }
});
