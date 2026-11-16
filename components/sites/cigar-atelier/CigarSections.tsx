"use client";

import { useState } from "react";
import { CigarAtelierScene, MaterialSwatch } from "./Artwork";
import { atelier, materials, specification, contact } from "./content";

export function CigarShowcase() {
  return (
    <div className="ca-showcase-grid">
      {/* Left: 3D-style scene illustration */}
      <div className="ca-scene-frame">
        <CigarAtelierScene />
      </div>

      {/* Right: Indexed format cards */}
      <div className="ca-collection-cards">
        <div className="ca-collection-head">
          <p className="ca-kicker">Indexed formats</p>
          <h3>{atelier.title}</h3>
        </div>

        {atelier.formats.map((format) => (
          <article key={format.index} className="ca-format-card">
            <div className="ca-format-top">
              <span className="ca-format-index">{format.index}</span>
              <span className="ca-format-origin">{format.origin}</span>
            </div>
            <h4>{format.name}</h4>
            <p className="ca-format-size">{format.size}</p>
            <ul className="ca-format-profile" aria-label="Flavour profile">
              {format.profile.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <p className="ca-format-note">{format.note}</p>
          </article>
        ))}

        <p className="ca-disclaimer">{atelier.disclaimer}</p>
      </div>
    </div>
  );
}

export function CigarMaterials() {
  return (
    <div className="ca-materials-grid">
      {materials.items.map((item) => (
        <article key={item.name} className="ca-material-card">
          <MaterialSwatch variant={item.swatch} />
          <div className="ca-material-body">
            <span className="ca-material-tag">{item.note}</span>
            <h3 className="ca-h3">{item.name}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CigarDetails() {
  return (
    <div className="ca-spec-grid">
      {specification.groups.map((group, idx) => (
        <div key={group.title} className="ca-spec-card">
          <div className="ca-spec-head">
            <span>0{idx + 1}</span>
            <h3>{group.title}</h3>
          </div>
          <dl className="ca-spec-dl">
            {group.rows.map((row) => (
              <div key={row.label} className="ca-spec-row">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
      <p className="ca-honest-box">{specification.disclaimer}</p>
    </div>
  );
}