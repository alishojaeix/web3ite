"use client";

import { useState } from "react";
import { BatteryCharging, MapPin, Navigation } from "lucide-react";
import { vehicleShowcase } from "./content";

export function ElectricPlanner() {
  const [tripId, setTripId] = useState<string>(vehicleShowcase.trips[1].id);
  const [chargerMode, setChargerMode] = useState<"arch" | "home">("arch");
  const [hubId, setHubId] = useState<string>(vehicleShowcase.hubs[0].id);

  const activeTrip =
    vehicleShowcase.trips.find((item) => item.id === tripId) ??
    vehicleShowcase.trips[1];
  const activeHub =
    vehicleShowcase.hubs.find((item) => item.id === hubId) ??
    vehicleShowcase.hubs[0];

  const usedPercent = parseInt(activeTrip.batteryUsed, 10) || 25;
  const remainingPercent = Math.max(0, 100 - usedPercent);

  return (
    <div className="em-planner-grid">
      {/* Left: Interactive City Loop & Charge Stop Planner */}
      <div className="em-planner-card">
        <div className="em-card-top">
          <div>
            <p className="em-kicker">
              <Navigation size={13} aria-hidden="true" />
              توضیح برد و شارژ
            </p>
            <h3 className="em-h3">یک چرخهٔ معمول شهری انتخاب کنید</h3>
          </div>
          <span className="em-pill">۱۸۰ مایل در چرخهٔ کامل</span>
        </div>

        <div
          className="em-trip-tabs"
          role="tablist"
          aria-label="پروفایل‌های نمونهٔ سفر شهری"
        >
          {vehicleShowcase.trips.map((trip) => {
            const selected = trip.id === activeTrip.id;
            return (
              <button
                key={trip.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`em-trip-tab ${selected ? "is-active" : ""}`}
                onClick={() => setTripId(trip.id)}
              >
                <span className="em-trip-name">{trip.name}</span>
                <span className="em-trip-dist">{trip.distance}</span>
              </button>
            );
          })}
        </div>

        <div className="em-charger-toggle" role="group" aria-label="حالت شارژ">
          <button
            type="button"
            className={`em-toggle-btn ${chargerMode === "arch" ? "is-active" : ""}`}
            onClick={() => setChargerMode("arch")}
          >
            <BatteryCharging size={14} aria-hidden="true" />
            طاق شارژ (DC · ۱۲۰ کیلووات)
          </button>
          <button
            type="button"
            className={`em-toggle-btn ${chargerMode === "home" ? "is-active" : ""}`}
            onClick={() => setChargerMode("home")}
          >
            شارژ دیواری خانگی (AC · ۷.۴ کیلووات)
          </button>
        </div>

        <div className="em-trip-stage" aria-live="polite">
          <div className="em-battery-bar-wrap">
            <div className="em-battery-labels">
              <span>انرژی مصرفی سفر: <strong>{activeTrip.batteryUsed}</strong></span>
              <span>باقی‌مانده: <strong>{activeTrip.remainingMi} ({remainingPercent}٪)</strong></span>
            </div>
            <div className="em-battery-track" aria-hidden="true">
              <span
                className="em-battery-used"
                style={{ width: `${usedPercent}%` }}
              />
            </div>
          </div>

          <p className="em-trip-summary">{activeTrip.summary}</p>

          <dl className="em-trip-metrics">
            <div>
              <dt>مسافت</dt>
              <dd>{activeTrip.distance}</dd>
            </div>
            <div>
              <dt>
                {chargerMode === "arch" ? "زمان شارژ با طاق" : "بازیابی با AC خانگی"}
              </dt>
              <dd>
                {chargerMode === "arch"
                  ? activeTrip.archTopUp
                  : activeTrip.homeTopUp}
              </dd>
            </div>
            <div>
              <dt>کف کابین</dt>
              <dd>{activeTrip.cabinSetup}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Right: Interactive City Charge Arch & Hub Directory */}
      <aside className="em-hub-card" aria-label="فهرست طاق‌های شارژ شهری">
        <div className="em-card-top">
          <div>
            <p className="em-kicker">
              <MapPin size={13} aria-hidden="true" />
              نقشهٔ شارژ طرح آزمایشی
            </p>
            <h3 className="em-h3">چهار ایستگاه شهری</h3>
          </div>
          <span className="em-pill em-pill--dark">{activeHub.code} · {activeHub.district}</span>
        </div>

        <div className="em-hub-list" role="tablist" aria-label="موقعیت ایستگاه‌های شارژ">
          {vehicleShowcase.hubs.map((hub) => {
            const selected = hub.id === activeHub.id;
            return (
              <button
                key={hub.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`em-hub-item ${selected ? "is-active" : ""}`}
                onClick={() => setHubId(hub.id)}
              >
                <div>
                  <span className="em-hub-code">{hub.code}</span>
                  <strong className="em-hub-name">{hub.name}</strong>
                </div>
                <span className="em-hub-district">{hub.district}</span>
              </button>
            );
          })}
        </div>

        <div className="em-hub-detail" aria-live="polite">
          <div className="em-hub-detail-head">
            <h4>{activeHub.name}</h4>
            <span>{activeHub.bays}</span>
          </div>
          <p>{activeHub.note}</p>
          <div className="em-hub-meta">
            <span>ساعات: {activeHub.hours}</span>
            <a href="#contact">رزرو از این ایستگاه ←</a>
          </div>
        </div>
      </aside>
    </div>
  );
}
