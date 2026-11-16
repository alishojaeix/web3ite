"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Box, X } from "lucide-react";
import { obsidianRoastery } from "@/data/templates/cafe";
import { CanisterArt } from "./Artwork";

const CanisterCanvas = dynamic(
  () => import("@/components/3d/TemplateCanvas").then((module) => module.TemplateCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="ob-3d-loading" role="status">
        Preparing the canister…
      </div>
    ),
  }
);

export function Obsidian3D() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="ob-3d" data-3d>
      {!requested ? (
        <div className="ob-3d-poster">
          <CanisterArt prefix="ob-object-art" number="01" name="Kenia AA" origin="Nyeri, Kenya" />
          <button type="button" className="ob-3d-trigger" onClick={() => setRequested(true)}>
            <Box size={16} aria-hidden="true" />
            Inspect the canister in 3D
          </button>
          <p className="ob-3d-note">Optional · the site works without it</p>
        </div>
      ) : (
        <div className="ob-3d-stage">
          <CanisterCanvas
            scene="obsidian-roastery"
            theme={obsidianRoastery.theme}
            label="Obsidian Roastery canister"
            variant="detail"
            interactive
            autoRotate
            active
          />
          <button
            type="button"
            className="ob-3d-close"
            onClick={() => setRequested(false)}
            aria-label="Close the 3D canister"
          >
            <X size={16} aria-hidden="true" />
          </button>
          <p className="ob-3d-drag">Drag to turn the canister</p>
        </div>
      )}
    </div>
  );
}
