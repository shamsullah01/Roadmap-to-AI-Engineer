"use client";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const syncEnabled = Boolean(url && key);

let clientPromise = null;

function getClient() {
  if (!syncEnabled) return null;
  if (!clientPromise) {
    clientPromise = import("@supabase/supabase-js").then(({ createClient }) =>
      createClient(url, key)
    );
  }
  return clientPromise;
}

function deviceId() {
  const KEY = "pathweights-device";
  try {
    let id = window.localStorage.getItem(KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

export async function loadRemote() {
  const client = await getClient();
  const id = deviceId();
  if (!client || !id) return null;
  try {
    const { data, error } = await client
      .from("progress")
      .select("data")
      .eq("id", id)
      .maybeSingle();
    if (error) {
      console.warn("[sync] load failed:", error.message);
      return null;
    }
    return data?.data ?? null;
  } catch (e) {
    console.warn("[sync] load failed:", e);
    return null;
  }
}

export async function saveRemote(payload) {
  const client = await getClient();
  const id = deviceId();
  if (!client || !id) return;
  try {
    const { error } = await client.from("progress").upsert({
      id,
      data: payload,
      updated_at: new Date().toISOString(),
    });
    if (error) console.warn("[sync] save failed:", error.message);
  } catch (e) {
    console.warn("[sync] save failed:", e);
  }
}
