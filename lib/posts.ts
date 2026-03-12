export type PostType = "borrow" | "giveaway" | "sos" | "service";

export type PostPreview = {
  id: string;
  title: string;
  type: string;
  status: string;
  description: string | null;
  created_at: string;
};

export type NearbyPost = {
  id: string;
  user_id: string;
  type: string;
  title: string;
  description: string;
  image_url: string | null;
  status: string;
  created_at: string;
  latitude?: number | null;
  longitude?: number | null;
  distance_meters: number;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export const postTypeOptions: Array<{ value: PostType; label: string }> = [
  { value: "borrow", label: "Mượn" },
  { value: "giveaway", label: "Cho" },
  { value: "sos", label: "SOS" },
  { value: "service", label: "Dịch vụ" },
];

export function isSupabaseConfigMissing(errorMessage: string | null) {
  return (
    errorMessage?.includes("NEXT_PUBLIC_SUPABASE_URL") ||
    errorMessage?.includes("Supabase client key") ||
    false
  );
}

export function isSchemaMissing(errorMessage: string | null) {
  return (
    errorMessage?.includes("Could not find the table") ||
    errorMessage?.includes("does not exist") ||
    errorMessage?.includes("schema cache") ||
    errorMessage?.includes("function public.get_nearby_posts") ||
    errorMessage?.includes("function public.create_post_with_location") ||
    false
  );
}

export function getSetupHelpText(errorMessage: string | null) {
  if (isSupabaseConfigMissing(errorMessage)) {
    return "Hãy thêm NEXT_PUBLIC_SUPABASE_URL và NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY vào .env.local hoặc Vercel Project Settings → Environment Variables.";
  }

  if (isSchemaMissing(errorMessage)) {
    return "Hãy chạy lại file supabase/schema.sql trong Supabase SQL Editor rồi reload trang.";
  }

  return null;
}

export function formatPostType(type: string) {
  switch (type) {
    case "borrow":
      return "Mượn";
    case "giveaway":
      return "Cho";
    case "sos":
      return "SOS";
    case "service":
      return "Dịch vụ";
    default:
      return type;
  }
}

export function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function formatDistance(distanceMeters: number) {
  if (distanceMeters < 1000) {
    return `${Math.round(distanceMeters)} m`;
  }

  return `${(distanceMeters / 1000).toFixed(1)} km`;
}

export function hasMapCoordinates(post: NearbyPost) {
  return typeof post.latitude === "number" && typeof post.longitude === "number";
}