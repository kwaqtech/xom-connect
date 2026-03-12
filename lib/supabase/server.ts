import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "@/lib/supabase/config";

export function createServerSupabaseClient() {
    if (!supabaseConfig.isConfigured) {
        return null;
    }

    return createClient(supabaseConfig.supabaseUrl as string, supabaseConfig.supabaseKey as string, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
}