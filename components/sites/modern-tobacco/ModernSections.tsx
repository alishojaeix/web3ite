"use client";

import { ModernTobaccoScene, MaterialSwatch } from "./Artwork";
import { edit, shelf, materials, specification, contact } from "./content";

export function ModernEdit() {
  return (
    <div className="mt-edit-grid">
      {/* Left: 3D-style scene */}
      <div className="mt-scene-frame">
        <ModernTobaccoScene />
      </div>

      {/* Right: Edit cards */}
      <div className="mt-edit-cards">
        <div className="mt-edit-head">
          <p className="mt-kicker">The edit</p>
          <h3>{edit.title}</h3>
        </div>

        {edit.items.map((item) => (
          <article key={item.index} className="mt-edit-card">
            <div className="mt-edit-top">
              <span className="mt-edit-index">{item.index}</span>
              <span className="mt-edit-spec">{item.spec}</span>
            </div>
            <h4>{item.name}</h4>
            <ul className="mt-edit-tags" aria-label="Tags">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="mt-edit-note">{item.note}</p>
          </article>
        ))}

        <p className="mt-disclaimer">{edit.disclaimer}</p>
      </div>
    </div>
  );
}

export function ModernShelf() {
  return (
    <div className="mt-shelf-principles">
      {shelf.principles.map((item) => (
        <article key={item.index} className="mt-principle-card">
          <span className="mt-principle-num">{item.index}</span>
          <div>
            <h3 className="mt-h3">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
      <p className="mt-disclaimer">{shelf.disclaimer}</p>
    </div>
  );
}

export function ModernMaterials() {
  return (
    <div className="mt-materials-grid">
      {materials.items.map((item) => (
        <article key={item.name} className="mt-material-card">
          <MaterialSwatch variant={item.swatch} />
          <div className="mt-material-body">
            <span className="mt-material-tag">{item.note}</span>
            <h3 className="mt-h3">{item.name}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ModernDetails() {
  return (
    <div className="mt-spec-grid">
      {specification.groups.map((group, idx) => (
        <div key={group.title} className="mt-spec-card">
          <div className="mt-spec-head">
            <span>0{idx + 1}</span>
            <h3>{group.title}</h3>
          </div>
          <dl className="mt-spec-dl">
            {group.rows.map((row) => (
              <div key={row.label} className="mt-spec-row">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
      <p className="mt-honest-box">{specification.disclaimer}</p>
    </div>
  );
}