import { ImageResponse } from "next/og";
import { getSiteConfig } from "@/lib/sites";
import { getTemplateById } from "@/lib/templates";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("site") ?? "";
  const template = await getTemplateById(id);
  const config = getSiteConfig(id);

  if (!template || !config) {
    return new Response("سایت ناموجود", { status: 404 });
  }

  const accent = template.theme.accent;
  const headline = `${template.content.headline} ${template.content.headlineAccent}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07080b",
          color: "#f6f1ea",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-160px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: accent,
            opacity: 0.16,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "80px",
            bottom: "-210px",
            width: "460px",
            height: "460px",
            borderRadius: "50%",
            border: `1px solid ${accent}`,
            opacity: 0.35,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: accent,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#a7a198",
              display: "flex",
            }}
          >
            وب‌سایت نمایشی Web3ite
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "880px" }}>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "20px",
              display: "flex",
            }}
          >
            {template.title}
          </div>
          <div
            style={{
              fontSize: headline.length > 38 ? "64px" : "82px",
              lineHeight: 0.98,
              letterSpacing: "-3px",
              display: "flex",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              marginTop: "26px",
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#b8b3aa",
              maxWidth: "720px",
              display: "flex",
            }}
          >
            {template.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#8a847c",
          }}
        >
          <div style={{ display: "flex" }}>نمایش داستانی · کسب‌وکاری واقعی نیست</div>
          <div style={{ display: "flex", color: accent }}>web3ite</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
