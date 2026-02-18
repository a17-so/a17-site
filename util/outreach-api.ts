const API_BASE = "https://outreach-tool-api-544313478134.us-central1.run.app";

// ── Types ──────────────────────────────────────────────────────────────────

export interface ScrapeRequest {
    app: string;
    url: string;
    category: string;
    sender_profile?: string;
    include_extras?: boolean;
}

export interface ScrapeResponse {
    ig_handle: string | null;
    dm_text: string;
    email_to: string | null;
    email_subject: string | null;
    email_body_text: string | null;
    is_followup: boolean;
    email_thread_id: string | null;
    sent_from_email: string | null;
    sent_from_tiktok: string | null;
    sent_from_ig: string | null;
    // extras
    ig_app_url?: string | null;
    mailto_url?: string | null;
    error?: string;
    message?: string;
}

export interface DebugConfigResponse {
    outreach_apps_count: number;
    outreach_apps_keys: string[];
    app_configs: Record<string, Record<string, string | null>>;
}

export interface ValidateResponse {
    ok: boolean;
    config?: Record<string, string | null>;
    sender_profile?: {
        requested: string | null;
        resolved: boolean;
        profile?: Record<string, string | null>;
    };
    error?: string;
    available_apps?: string[];
    available_profiles?: string[];
}

// ── API calls ──────────────────────────────────────────────────────────────

export async function fetchAvailableApps(): Promise<string[]> {
    try {
        const res = await fetch(`${API_BASE}/debug/config`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: DebugConfigResponse = await res.json();
        return data.outreach_apps_keys ?? [];
    } catch {
        // Fallback to hardcoded list
        return ["pretti", "regen", "lifemaxx"];
    }
}

export async function validateApp(
    app: string,
    senderProfile?: string
): Promise<ValidateResponse> {
    const body: Record<string, string> = { app };
    if (senderProfile) body.sender_profile = senderProfile;

    const res = await fetch(`${API_BASE}/validate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    return res.json();
}

export async function submitScrape(
    req: ScrapeRequest
): Promise<ScrapeResponse> {
    const payload = { ...req, include_extras: true };

    const endpoint =
        req.category.toLowerCase() === "themepage"
            ? "/scrape_themepage"
            : "/scrape";

    const res = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || data.message || `HTTP ${res.status}`);
    }

    return data;
}
