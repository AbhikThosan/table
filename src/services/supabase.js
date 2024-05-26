import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://njwnjjeusegjyrjwelzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qd25qamV1c2VnanlyandlbHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNzk3NTQsImV4cCI6MjAyODk1NTc1NH0.BVVsJGaGKDedK-Lsy_hgI3aBQT8e1JvZoCne2n_7H5A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
