export type PageNotesType = {
  releaseVersion: string;
  releaseDate: string;
  releaseNotes: {
    patchTitle: string;
    patchPoints: string[];
  }[];
};

export const PatchNotesDataV1_2_1: PageNotesType = {
  releaseVersion: `v1.2.1`,
  releaseDate: "18th July 2025",
  releaseNotes: [
    {
      patchTitle: "Visual Tweaks",
      patchPoints: [
        "Default {blur} increased: {1} → {2} for smoother background blending.",
        "Distortion strength reduced: {50} → {20} for subtler displacement.",
        "Saturation boosted: {100} → {120} for more vivid glass coloration.",
        "Border radius rounded: {8px} → {10px} for a modern UI curve.",
        "Base {opacity} increased: {0.2} → {0} for improved contrast.",
        "Light blur layer reduced: {20} → {10} for a crisper glow.",
        "Padding standardized: {10px 20px} → {10px} for better alignment.",
        "Improved range track glow and thumb color clarity.",
        "Color input fields now show correct pointer cursor and no border.",
      ],
    },
    {
      patchTitle: "Bug Fixes",
      patchPoints: [
        "Included missing {value} prop in {GlassInput} for controlled inputs.",
        "Fixed z-index stacking issue.",
        "Corrected layout misalignments in edge cases with flex and padding.",
        "Resolved duplicate SVG filters being created on re-renders.",
        "Ensured consistent visual behavior across browsers with filter units.",
      ],
    },
    {
      patchTitle: "New Props & API Additions",
      patchPoints: [
        "Brightness — adds control over visual lightness/darkness.",
        "AvoidSvgCreation — skips SVG filter creation for performance.",
        "ContentCenter — enables easy vertical and horizontal content centering.",
        "ContentClassname — allows external styling for the content wrapper.",
        "Value and OnChange — now fully supported and synced in controlled mode.",
      ],
    },
    {
      patchTitle: "Performance Improvements",
      patchPoints: [
        "SVG filters now reused via {id} and {useMemo} — prevents duplicate DOM nodes.",
        "{renderLayers()} optimized to skip regeneration of identical SVGs.",
        "Avoided rendering filters when {avoidSVGCreation} is enabled.",
        "Minimized reflows by separating visual filter logic from state updates.",
      ],
    },
    {
      patchTitle: "Visual Effects & Filters",
      patchPoints: [
        "Added chromatic aberration distortion layer (optional via future prop).",
        "Improved distortion maps with better surface variation.",
        "Reduced white borders on `blur()` by isolating background filter layers.",
      ],
    },
    {
      patchTitle: "Styling & SCSS Structure",
      patchPoints: [
        "Glass component styles now more consistent across {height}, {padding}, {border} props.",
        "Reduced use of {!important} for easier override by users.",
      ],
    },
    {
      patchTitle: "Component-Specific Enhancements",
      patchPoints: [
        "GlassInput: Now supports fully custom range UI using div-based tracks/thumbs.",
      ],
    },
  ],
};

export const PatchNotesData: PageNotesType = {
  releaseVersion: "v1.2.2",
  releaseDate: "17th November 2025",
  releaseNotes: [
    {
      patchTitle: "Visual Enhancements",
      patchPoints: [
        "Refined displacement map rendering to improve clarity and reduce banding on high-contrast backgrounds.",
        "Increased default distortion level from 20 to 40 to provide a more pronounced glass-like deformation.",
        "Adjusted default border opacity from 1 to 0.2 for a cleaner, more realistic glass edge.",
        "Improved overall lighting consistency across inner and outer glow layers.",
        "Enhanced SVG filter precision for smoother gradients and reduced pixel jitter during animation.",
      ],
    },
    {
      patchTitle: "Bug Fixes",
      patchPoints: [
        "Fixed an input focus issue where certain browsers prevented typing inside `GlassInput` fields.",
        "Resolved an input rendering glitch that caused cursor misalignment during rapid updates.",
        "Corrected an issue where range inputs ignored step values under certain conditions.",
        "Fixed a rare distortion-layer overflow on components with aggressive blur values.",
        "Addressed performance warnings related to missing event cleanup in hover listeners.",
      ],
    },
    {
      patchTitle: "New Props",
      patchPoints: [
        "Added `inputRangeBlur` for applying dedicated blur effects to custom range sliders.",
        "Introduced `inputRangeDistortion` to independently control distortion intensity on range thumbs.",
        "Expanded type definitions for input-related props to improve TypeScript support.",
        "New default values for several lighting and border properties for a more natural glass look.",
      ],
    },
    {
      patchTitle: "Touch & Interaction Improvements",
      patchPoints: [
        "Implemented full touch support for hover-based flexibility effects, enabling natural tilt/shift reactions on mobile.",
        "Added touch dragging for custom range inputs with smooth finger tracking and reduced latency.",
        "Prevented accidental page scrolling during range slider interaction for a more app-like experience.",
        "Improved thumb expansion animation timing for consistency across touch and mouse inputs.",
        "Unified event handling between mouse and touch systems to reduce duplicated logic and ensure compatibility.",
      ],
    },
    {
      patchTitle: "Performance & Internal Updates",
      patchPoints: [
        "Reduced layout thrashing during hover and distortion calculations.",
        "Optimized SVG filter initialization to prevent redundant DOM creation.",
        "Improved memoization paths for renderLayers to reduce unnecessary re-renders.",
        "Refined pointer event strategy for smoother animations under heavy CPU load.",
        "General code cleanup and internal restructuring for better maintainability.",
      ],
    },
  ],
};

export const defaultFilters = {
  blur: 4,
  distortion: 40,
  flexibility: 0,
  borderColor: "#ffffff",
  borderSize: 1,
  borderRadius: 30,
  borderOpacity: 0.4,
  backgroundColor: "#000000ff",
  backgroundOpacity: 0,
  innerLightColor: "#ffffff",
  innerLightSpread: 1,
  innerLightBlur: 10,
  innerLightOpacity: 0,
  outerLightColor: "#ffffff",
  outerLightSpread: 1,
  outerLightBlur: 10,
  outerLightOpacity: 0,
  color: "#ffffff",
  chromaticAberration: 0,
  onHoverScale: 1.0,
  saturation: 100,
  brightness: 100,
};

export const tabLabels = [
  "Core Filters",
  "Border Filters",
  "Background Filters",
  "Inner Light",
  "Outer Light",
  "Extras Filters",
];
