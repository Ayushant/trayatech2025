// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://utjrppgzxlvjngvjpmvn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0anJwcGd6eGx2am5ndmpwbXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTU3OTAsImV4cCI6MjA2MjQzMTc5MH0.EAAzZOzInvQIUXulnvsV19Si0XT0pIBq68UMdTB2NV4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);