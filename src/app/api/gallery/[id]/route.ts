import { createServerSupabase } from "@/lib/supabase/server";

const IMAGE_MAP: Record<string, string> = {
  "1": "1.png",
  "2": "2.png",
  "3": "3.png",
  "4": "4.png",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const path = IMAGE_MAP[id];

    if (!path) {
      return Response.json(
        {
          ok: false,
          message: `No image mapped for id "${id}"`,
        },
        { status: 404 }
      );
    }

    const bucket = process.env.SUPABASE_GALLERY_BUCKET;

    if (!bucket) {
      return Response.json(
        {
          ok: false,
          message: "Missing SUPABASE_GALLERY_BUCKET in .env.local",
        },
        { status: 500 }
      );
    }

    const supabase = createServerSupabase();

    const { data, error } = await supabase.storage.from(bucket).download(path);

    if (error || !data) {
      console.error("Supabase download error:", {
        bucket,
        path,
        id,
        error,
      });

      return Response.json(
        {
          ok: false,
          message: "Failed to load image from Supabase",
          bucket,
          path,
          id,
          error: error?.message ?? "Unknown Supabase error",
        },
        { status: 500 }
      );
    }

    return new Response(data.stream(), {
      status: 200,
      headers: {
        "Content-Type": data.type || "image/png",
        "Cache-Control": "private, no-store, max-age=0",
        "X-Robots-Tag": "noindex, noimageindex, noarchive",
      },
    });
  } catch (error) {
    console.error("Gallery route crashed:", error);

    return Response.json(
      {
        ok: false,
        message: "Route handler crashed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}