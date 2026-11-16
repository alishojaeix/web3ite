/**
 * Velocity Studio - sample performance-studio content.
 *
 * The studio, aero study, figures and launch are fictional. No production
 * vehicle, measured aero result, film, order or price is represented.
 */

export const velocityNav = [
  { label: "Study", href: "#showcase" },
  { label: "Aero", href: "#story" },
  { label: "Specification", href: "#specs" },
  { label: "Launch", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Velocity Studio / Performance",
  headline: "Shape",
  headlineAccent: "in motion.",
  intro:
    "A performance study for teams who care about the shape of the air. One car, one launch film and an aero story told in plain numbers.",
  status: "Aero study · frame 01",
  note: "Sample studio · fictional performance study",
  caption: [
    "Aero study 01 — contour section",
    "Illustrative drawing · not a production vehicle",
  ],
  footNote: "Launch film · Aero notes · Illustrative specification",
} as const;

export const heroMeta = [
  { label: "Study", value: "Aero 01" },
  { label: "Body", value: "Carbon composite" },
  { label: "Launch", value: "Film + notes" },
] as const;

export const stats = [
  { label: "Downforce", value: "410", unit: "kg", note: "Aero mode · illustrative" },
  { label: "Drag", value: "0.28", unit: "Cd", note: "Road mode · illustrative" },
  { label: "Weight", value: "1,190", unit: "kg", note: "Illustrative" },
  { label: "Output", value: "540", unit: "hp", note: "Illustrative" },
] as const;

export const study = {
  label: "01 / The study",
  title: "The air is part of the body.",
  intro:
    "The study is drawn as a pressure plan, not a hero render. Three aero modes show what changes when the flaps move — and what does not.",
  note: "Interactive sample. Modes, figures and flap angles are illustrative; nothing is measured, homologated or for sale.",
  config: {
    label: "Aero mode / illustrative",
    title: "Choose a mode",
    note: "A sample selector. No real vehicle configuration is represented.",
  },
  modes: [
    {
      id: "road",
      name: "Road",
      note: "Neutral",
      downforce: "120 kg",
      drag: "0.28 Cd",
      downforceValue: 29,
      dragValue: 82,
      front: "4°",
      rear: "6°",
      balance: "50 / 50",
      body: "The baseline. Flaps sit close to the body and the wake stays tidy. Built for the drive to the tunnel, not the lap.",
    },
    {
      id: "aero",
      name: "Aero",
      note: "Grip",
      downforce: "410 kg",
      drag: "0.34 Cd",
      downforceValue: 100,
      dragValue: 100,
      front: "8°",
      rear: "12°",
      balance: "42 / 58",
      body: "The grip setting. Both flaps open, the rear deck loads up and the car asks more of the air. The study's headline figure.",
    },
    {
      id: "low",
      name: "Low drag",
      note: "Efficiency",
      downforce: "240 kg",
      drag: "0.24 Cd",
      downforceValue: 58,
      dragValue: 71,
      front: "2°",
      rear: "3°",
      balance: "48 / 52",
      body: "The long-run setting. Flaps flatten, the wake narrows and the car trades some grip for a quieter pass through the air.",
    },
  ],
} as const;

export const reel = {
  title: "Launch film / edit 03",
  duration: "01:12",
  caption: "Sample edit · no video is played on this page",
  frames: [
    {
      time: "00:00",
      title: "Form",
      note: "Profile, one light",
      camera: "Cam A · 50mm anamorphic · low dolly",
      telemetry: "Flaps neutral · 0.28 Cd baseline",
      detail:
        "Single overhead key bar traces the nose-to-tail ridge in a dark chamber before the fan spools.",
    },
    {
      time: "00:24",
      title: "Intake",
      note: "Splitter & floor",
      camera: "Cam B · floor-level probe · 120 fps",
      telemetry: "Front flap 8° · underfloor feed",
      detail:
        "Smoke rake enters at the front splitter (04), parting cleanly inside the front wheel wake.",
    },
    {
      time: "00:46",
      title: "Air",
      note: "Tunnel sheet",
      camera: "Cam C · overhead section plane S03",
      telemetry: "410 kg downforce · 42 / 58 balance",
      detail:
        "Five vertical laser planes slice across the teardrop canopy and active rear haunch (07).",
    },
    {
      time: "01:12",
      title: "Detail",
      note: "Signal red",
      camera: "Cam D · rear diffuser lock-off",
      telemetry: "Diffuser exit (11) · wake hold",
      detail:
        "Rear signal blade holds a single horizontal horizon line while the twin-channel diffuser clears the wake.",
    },
  ],
} as const;

export const aero = {
  label: "02 / The air",
  title: "The air is the material.",
  intro:
    "Aero is not a trim level. The surfaces are drawn around the flow, then tested in sections until the shape and the numbers agree.",
  quote: {
    text: "The shape is the argument. The tunnel is the evidence.",
    note: "Studio note · sample copy",
  },
  principles: [
    {
      title: "Draw the flow first",
      body: "The silhouette starts as a set of streamlines, not a sketch. Surfaces exist to guide air, not to decorate it.",
    },
    {
      title: "Test in sections",
      body: "Each panel is judged on its own: feed, wake and balance. A change is kept only when the section improves.",
    },
    {
      title: "Keep the numbers honest",
      body: "Every figure on this page is labelled illustrative. A real study would publish test conditions and instrumentation.",
    },
    {
      title: "Make the film the proof",
      body: "The launch film shows the same car the notes describe. One story, one set of numbers, no separate hero car.",
    },
  ],
  note: "Sample aero principles. No real test, speed, result or vehicle is represented.",
  sheet: {
    title: "Tunnel sheet / sample",
    caption: "Three observations · illustrative",
    rows: [
      {
        area: "Front splitter",
        note: "Feed the floor, not the wheel.",
        value: "04",
      },
      {
        area: "Rear haunch",
        note: "Hold the wake to the body.",
        value: "07",
      },
      {
        area: "Diffuser",
        note: "Let the air leave cleanly.",
        value: "11",
      },
    ],
    note: "Observations are sample copy. No test speed, pressure or measured result is claimed.",
  },
} as const;

export const specification = {
  label: "03 / Specification",
  title: "Illustrative specification.",
  intro:
    "Published plainly, in three groups. Every value is a sample for the layout — not a measured, homologated or certified figure.",
  groups: [
    {
      title: "Aero",
      rows: [
        { label: "Downforce", value: "410 kg" },
        { label: "Drag", value: "0.28 Cd" },
        { label: "Balance", value: "42 / 58" },
        { label: "Rear wing", value: "Active" },
      ],
    },
    {
      title: "Chassis",
      rows: [
        { label: "Layout", value: "Mid-engine" },
        { label: "Body", value: "Carbon composite" },
        { label: "Weight", value: "1,190 kg" },
        { label: "Drive", value: "Rear-wheel" },
      ],
    },
    {
      title: "Study",
      rows: [
        { label: "Seats", value: "2" },
        { label: "Launch", value: "Film + notes" },
        { label: "Build", value: "Study only" },
        { label: "Availability", value: "None" },
      ],
    },
  ],
  notClaimed: [
    "No production vehicle is represented",
    "No aero figure is measured or homologated",
    "No film, order or price is offered",
    "No team, client or result is claimed",
  ],
  notClaimedNote:
    "This is a demonstration website. A real studio would publish its test conditions and its team — or leave the space empty.",
  note: "Illustrative specification. All values are sample content.",
} as const;

export const materials = {
  label: "04 / Materials",
  title: "Three surfaces, one language.",
  intro:
    "The studio reduces the car to three materials: the composite body, the signal light and the tunnel flow that proves the shape.",
  note: "Sample surface studies. No material specification, paint code or test result is supplied.",
  items: [
    {
      name: "Carbon",
      note: "The surface",
      swatch: "carbon",
      body: "A twill composite, drawn with a single red thread. The surface is structural before it is decorative.",
    },
    {
      name: "Signal red",
      note: "The direction",
      swatch: "signal",
      body: "One directional red, reserved for load and motion. It marks the line the air follows, not the whole car.",
    },
    {
      name: "Wind tunnel",
      note: "The proof",
      swatch: "tunnel",
      body: "Streamlines over a dark floor. The tunnel is the studio's second camera: it shows what the film cannot.",
    },
  ],
} as const;

export const contact = {
  label: "05 / Launch",
  title: "See the shape in motion.",
  intro:
    "Request the launch film and the aero notes. A short note about the vehicle or the decision behind it is enough to start.",
  facts: [
    { label: "Reply", value: "2 days" },
    { label: "Format", value: "Film + notes" },
    { label: "Study", value: "Aero 01" },
    { label: "Build", value: "None" },
  ],
  bring: [
    "The vehicle or study you are working on",
    "The decision the aero story has to support",
    "The constraint you cannot move",
  ],
  quote: "One film. One set of numbers. No theatre.",
  quoteNote: "Studio note · sample copy",
  email: "studio@velocity-studio.demo",
  phone: "+44 20 7946 0009",
  address: ["Velocity Studio", "8 Aero Court", "London SE1 7TP"],
  hours: "Mon–Fri · 09:00–18:00",
  note: "Fictional studio. Address, telephone number, study and details are illustrative.",
  form: {
    title: "Launch request",
    sub: "A film, the notes, no sales call",
    types: ["Launch film", "Aero notes", "Full study", "Something else"],
    note: "Sample request form. Nothing is sent to a real studio, no film is delivered and no vehicle is offered.",
    confirmation:
      "Your request has been recorded for this demonstration. No message is sent, no film is delivered and no vehicle is offered.",
    fallback:
      "The demo studio is unavailable right now. Please use the email address on this page.",
  },
} as const;
