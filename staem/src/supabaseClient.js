// @ts-nocheck
import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
// const supabaseAuthorization = import.meta.env.VITE_PUBLIC_SUPABASE_AUTHORIZATION;

const supabaseUrl = 'https://gqkuommdmfzmwkzdewma.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI'
const supabaseAuthorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiI2MzNhODczMzk3Zjk4NmFhZDAzYTRlMDciLCJpYXQiOjE2NTE3NTIwNDN9.NOtlhNx5Y0KLI16KO0v46Uptzmn7llu35yVybuRNM4s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	headers: { Authorization: supabaseAuthorization }
});
