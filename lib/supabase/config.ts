export type SupabaseConfig = {
    supabaseUrl: string | null;
    supabaseKey: string | null;
    isConfigured: boolean;
    errorMessage: string | null;
};

function resolveSupabaseEnv(): SupabaseConfig {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || null;
    const supabaseKey = (
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )?.trim() || null;
    const errors: string[] = [];

    if (!supabaseUrl) {
        errors.push("Missing NEXT_PUBLIC_SUPABASE_URL environment variable.");
    }

    if (!supabaseKey) {
        errors.push(
            "Missing Supabase client key. Set NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY."
        );
    }

    return {
        supabaseUrl,
        supabaseKey,
        isConfigured: errors.length === 0,
        errorMessage: errors.length > 0 ? errors.join(" ") : null,
    };
}

export const supabaseConfig = resolveSupabaseEnv();
export const { supabaseUrl, supabaseKey } = supabaseConfig;