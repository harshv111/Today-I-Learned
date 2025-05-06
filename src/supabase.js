import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vldbmhrteatrtnfhfyah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZGJtaHJ0ZWF0cnRuZmhmeWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDM3NDEsImV4cCI6MjA1OTAxOTc0MX0.bp_0afEEVSIGGZ1p981IdUkNni8elhPKepNiLWwwaOs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
