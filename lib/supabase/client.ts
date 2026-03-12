import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { supabaseConfig } from "@/lib/supabase/config";

let browserSupabaseClient: SupabaseClient | null = null;

export function getBrowserSupabaseClient() {
    if (!supabaseConfig.isConfigured) {
        return null;
    }

    browserSupabaseClient ??= createClient(
        supabaseConfig.supabaseUrl as string,
        supabaseConfig.supabaseKey as string
    );

    return browserSupabaseClient;
}

export const supabase = getBrowserSupabaseClient();