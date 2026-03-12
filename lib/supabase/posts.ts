import { createServerSupabaseClient } from "@/lib/supabase/server";
import { type PostPreview } from "@/lib/posts";
import { supabaseConfig } from "@/lib/supabase/config";

export async function getLatestPosts(limit = 3) {
  try {
    const supabase = createServerSupabaseClient();

    if (!supabase) {
      return {
        count: 0,
        errorMessage: supabaseConfig.errorMessage,
        posts: [] as PostPreview[],
      };
    }

    const { data, error, count } = await supabase
      .from("posts")
      .select("id, title, type, status, description, created_at", { count: "exact" })
      .order("created_at", { ascending: false })
      .limit(limit);

    return {
      count: count ?? 0,
      errorMessage: error?.message ?? null,
      posts: (data ?? []) as PostPreview[],
    };
  } catch (error) {
    return {
      count: 0,
      errorMessage:
        error instanceof Error ? error.message : "Không thể kết nối Supabase.",
      posts: [] as PostPreview[],
    };
  }
}
