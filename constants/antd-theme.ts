/**
 * Ant Design Theme — Modern German Vocabulary Learning
 * DESIGN.md dosyasından üretilmiştir.
 *
 * Renk paleti : Autumn Red (primary) · Alpine Blue (secondary)
 *               Berlin Gray (surface) · Deep Charcoal (text)
 * Tipografi   : Be Vietnam Pro
 */

import type { ThemeConfig } from "antd";

// ─── Token Referansları ────────────────────────────────────────────────────────

const colors = {
  // Primary — Autumn Red
  primary: "#b3262f",
  primaryContainer: "#d64045",
  onPrimary: "#ffffff",
  onPrimaryContainer: "#140001",
  inversePrimary: "#ffb3b0",
  primaryFixed: "#ffdad8",
  primaryFixedDim: "#ffb3b0",
  primaryHover: "#c22d36",
  primaryActive: "#8f1820",

  // Secondary — Alpine Blue
  secondary: "#0060ac",
  secondaryContainer: "#68abff",
  onSecondary: "#ffffff",
  onSecondaryContainer: "#003e73",
  secondaryFixed: "#d4e3ff",
  secondaryFixedDim: "#a4c9ff",

  // Tertiary — Neutral Gray
  tertiary: "#585f61",
  tertiaryContainer: "#71787a",
  onTertiary: "#ffffff",
  tertiaryFixed: "#dde4e6",
  tertiaryFixedDim: "#c1c8ca",

  // Surface stack — Berlin Gray family
  background: "#f8fafb",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f2f4f5",
  surfaceContainer: "#eceeef",
  surfaceContainerHigh: "#e6e8e9",
  surfaceContainerHighest: "#e1e3e4",

  // Text
  onSurface: "#191c1d", // Deep Charcoal
  onSurfaceVariant: "#5a403f",
  inverseSurface: "#2e3132",
  inverseOnSurface: "#eff1f2",

  // Outline
  outline: "#8d706e",
  outlineVariant: "#e2bebc",

  // Error
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  onErrorContainer: "#93000a",

  // Success
  success: "#4caf50",
  successBg: "#e8f5e9",
  successBorder: "#a5d6a7",
} as const;

// ─── Ant Design ThemeConfig ────────────────────────────────────────────────────

const theme: ThemeConfig = {
  token: {
    // ── Brand Colors ──────────────────────────────────────────────────────────
    colorPrimary: colors.primary,
    colorPrimaryBg: colors.primaryFixed,
    colorPrimaryBgHover: colors.primaryFixedDim,
    colorPrimaryBorder: colors.primaryContainer,
    colorPrimaryHover: colors.primaryHover,
    colorPrimaryActive: colors.primaryActive,
    colorPrimaryText: colors.primary,
    colorLink: colors.secondary,
    colorLinkHover: "#0070c9",
    colorLinkActive: colors.onSecondaryContainer,

    // ── Semantic Colors ───────────────────────────────────────────────────────
    colorSuccess: colors.success,
    colorSuccessBg: colors.successBg,
    colorSuccessBorder: colors.successBorder,
    colorWarning: "#f59e0b",
    colorWarningBg: "#fffbeb",
    colorWarningBorder: "#fde68a",
    colorError: colors.error,
    colorErrorBg: colors.errorContainer,
    colorErrorBorder: colors.onErrorContainer,
    colorInfo: colors.secondary,
    colorInfoBg: colors.secondaryFixed,
    colorInfoBorder: colors.secondaryFixedDim,

    // ── Text ──────────────────────────────────────────────────────────────────
    colorText: colors.onSurface,
    colorTextSecondary: colors.onSurfaceVariant,
    colorTextTertiary: colors.tertiary,
    colorTextQuaternary: colors.outlineVariant,
    colorTextDisabled: colors.outline,

    // ── Background & Surface ──────────────────────────────────────────────────
    colorBgBase: colors.surfaceContainerLowest,
    colorBgContainer: colors.surfaceContainerLowest,
    colorBgLayout: colors.background,
    colorBgElevated: colors.surfaceContainerLowest,
    colorBgSpotlight: colors.surfaceContainer,
    colorBgMask: "rgba(25, 28, 29, 0.45)",

    // ── Border ────────────────────────────────────────────────────────────────
    colorBorder: colors.outlineVariant,
    colorBorderSecondary: colors.surfaceContainerHighest,

    // ── Fill ──────────────────────────────────────────────────────────────────
    colorFill: colors.surfaceContainerHigh,
    colorFillSecondary: colors.surfaceContainer,
    colorFillTertiary: colors.surfaceContainerLow,
    colorFillQuaternary: colors.surfaceContainerLowest,

    // ── Typography ────────────────────────────────────────────────────────────
    // Google Fonts gereklidir:
    // <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
    fontFamily:
      "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

    fontSize: 16, // body-md
    fontSizeSM: 12, // label-sm
    fontSizeLG: 18, // body-lg
    fontSizeXL: 20, // headline-sm
    fontSizeHeading1: 32, // display-lg
    fontSizeHeading2: 24, // headline-md
    fontSizeHeading3: 20, // headline-sm
    fontSizeHeading4: 18, // body-lg
    fontSizeHeading5: 16, // body-md
    fontWeightStrong: 700,

    lineHeight: 1.5,
    lineHeightLG: 1.556,
    lineHeightSM: 1.333,
    lineHeightHeading1: 1.25,
    lineHeightHeading2: 1.333,
    lineHeightHeading3: 1.4,

    // ── Spacing — 4px base grid ───────────────────────────────────────────────
    padding: 16, // md
    paddingSM: 8, // sm
    paddingXS: 4, // xs
    paddingLG: 24, // lg
    paddingXL: 32, // xl

    margin: 16,
    marginSM: 8,
    marginXS: 4,
    marginLG: 24,
    marginXL: 32,

    // ── Radius — DESIGN.md rounded ────────────────────────────────────────────
    borderRadius: 8, // DEFAULT 0.5rem
    borderRadiusSM: 4, // sm      0.25rem
    borderRadiusLG: 12, // md      0.75rem
    borderRadiusXL: 16, // lg      1rem
    borderRadiusOuter: 4,

    // ── Shadow / Elevation ────────────────────────────────────────────────────
    // "Kart" gölgesi: 0px 4px 12px, %5 opacity (DESIGN.md)
    boxShadow:
      "0px 1px 3px rgba(25,28,29,0.05), 0px 4px 12px rgba(25,28,29,0.05)",
    boxShadowSecondary:
      "0px 2px 6px rgba(25,28,29,0.06), 0px 8px 20px rgba(25,28,29,0.06)",

    // ── Motion ────────────────────────────────────────────────────────────────
    motionDurationFast: "80ms",
    motionDurationMid: "160ms",
    motionDurationSlow: "240ms",
    motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    motionEaseOut: "cubic-bezier(0, 0, 0.2, 1)",
    motionEaseIn: "cubic-bezier(0.4, 0, 1, 1)",

    // ── Control / Touch Target ────────────────────────────────────────────────
    // Minimum 48px (DESIGN.md)
    controlHeight: 48,
    controlHeightSM: 32,
    controlHeightLG: 56,
    controlHeightXS: 24,

    zIndexPopupBase: 1000,
  },

  // ─── Component-Level Overrides ────────────────────────────────────────────

  components: {
    // ── Button ────────────────────────────────────────────────────────────────
    // Primary: Autumn Red — "3D pushable" his (CSS ile: .ant-btn:active { transform: scale(0.98) })
    Button: {
      borderRadius: 16, // lg 1rem
      borderRadiusSM: 8,
      borderRadiusLG: 16,
      controlHeight: 48,
      controlHeightSM: 36,
      controlHeightLG: 56,
      fontWeight: 600, // SemiBold
      primaryColor: colors.onPrimary,
      defaultBg: colors.surfaceContainerLow,
      defaultColor: colors.onSurface,
      defaultBorderColor: colors.outlineVariant,
    },

    // ── Card ──────────────────────────────────────────────────────────────────
    // Beyaz kart, rounded-xl, soft shadow (flashcard hissi)
    Card: {
      borderRadius: 24, // xl 1.5rem
      borderRadiusSM: 16,
      borderRadiusLG: 24,
      colorBgContainer: colors.surfaceContainerLowest,
      boxShadow:
        "0px 2px 6px rgba(25,28,29,0.04), 0px 8px 20px rgba(25,28,29,0.04)",
      paddingLG: 24,
      padding: 16,
    },

    // ── Input ─────────────────────────────────────────────────────────────────
    // Gri zemin, focus'ta Autumn Red 2px border
    Input: {
      borderRadius: 8,
      colorBgContainer: colors.surfaceContainerLow,
      colorBorder: colors.outlineVariant,
      activeBorderColor: colors.primary,
      hoverBorderColor: colors.primaryContainer,
      controlHeight: 48,
      controlHeightSM: 36,
      controlHeightLG: 56,
    },

    // ── Select ────────────────────────────────────────────────────────────────
    Select: {
      borderRadius: 8,
      colorBgContainer: colors.surfaceContainerLow,
      colorBorder: colors.outlineVariant,
      controlHeight: 48,
      controlHeightSM: 36,
      controlHeightLG: 56,
      optionSelectedBg: colors.primaryFixed,
    },

    // ── Progress ──────────────────────────────────────────────────────────────
    // İnce, rounded track — Autumn Red, 100%'de yeşile geçiş
    Progress: {
      defaultColor: colors.primary,
      colorSuccess: colors.success,
      remainingColor: colors.surfaceContainerHigh,
      circleTextFontSize: "16px",
    },

    // ── Tag / Grammar Chips ───────────────────────────────────────────────────
    // Pill shape — der/die/das renkleri prop ile belirlenir
    Tag: {
      borderRadius: 9999,
      borderRadiusSM: 9999,
      fontSizeSM: 12,
    },

    // ── Drawer & Modal ────────────────────────────────────────────────────────
    // Grammar overlays — backdrop blur için global CSS gerekli:
    // .ant-modal-mask { backdrop-filter: blur(12px); background-color: rgba(25,28,29,0.45) !important; }
    Drawer: {
      borderRadius: 24,
      colorBgElevated: colors.surfaceContainerLowest,
    },
    Modal: {
      borderRadius: 24,
      borderRadiusSM: 16,
      borderRadiusLG: 24,
      colorBgElevated: colors.surfaceContainerLowest,
    },

    // ── Notification / Message (Toast) ────────────────────────────────────────
    // Feedback toasts: rounded-lg, bottom-screen pop
    Notification: {
      borderRadius: 12,
      colorBgElevated: colors.surfaceContainerLowest,
    },
    Message: {
      borderRadius: 12,
      contentBg: colors.surfaceContainerLowest,
    },

    // ── Typography ────────────────────────────────────────────────────────────
    Typography: {
      fontWeightStrong: 700,
      titleMarginTop: "0.5em",
      titleMarginBottom: "0.25em",
    },

    // ── Segmented (Tab nav — pill shape) ─────────────────────────────────────
    Segmented: {
      borderRadius: 9999,
      controlHeight: 44,
      trackBg: colors.surfaceContainerLow,
      itemSelectedBg: colors.primary,
      itemSelectedColor: colors.onPrimary,
    },

    // ── Tabs ──────────────────────────────────────────────────────────────────
    Tabs: {
      inkBarColor: colors.primary,
      itemActiveColor: colors.primary,
      itemHoverColor: colors.primaryContainer,
      titleFontSize: 14,
      titleFontSizeLG: 16,
    },

    // ── Slider ────────────────────────────────────────────────────────────────
    Slider: {
      colorPrimary: colors.primary,
      colorPrimaryBorderHover: colors.primaryContainer,
      trackBg: colors.primary,
      trackHoverBg: colors.primaryContainer,
      railBg: colors.surfaceContainerHigh,
      railHoverBg: colors.surfaceContainerHighest,
      dotActiveBorderColor: colors.primary,
      handleColor: colors.primary,
    },

    // ── Tooltip ───────────────────────────────────────────────────────────────
    Tooltip: {
      borderRadius: 8,
      colorBgSpotlight: colors.inverseSurface,
      colorTextLightSolid: colors.inverseOnSurface,
    },

    // ── Table ─────────────────────────────────────────────────────────────────
    Table: {
      borderRadius: 8,
      colorBgContainer: colors.surfaceContainerLowest,
      headerBg: colors.surfaceContainerLow,
      headerColor: colors.onSurface,
      rowHoverBg: colors.primaryFixed,
      cellPaddingBlock: 12,
      cellPaddingInline: 16,
    },

    // ── Popover ───────────────────────────────────────────────────────────────
    Popover: {
      borderRadius: 16,
      colorBgElevated: colors.surfaceContainerLowest,
    },
  },

  cssVar: {
    prefix: "app", // --ant-* yerine --app-* üretir, Tailwind'de daha temiz görünür
    key: "main-theme", // Tema izolasyonu için sabit key (React 18'de otomatik useId de olur ama SSR'da sabit key daha güvenli)
  },
  hashed: false,
};

export default theme;

// ─── Kullanım ──────────────────────────────────────────────────────────────────
//
// 1. Google Fonts yüklenmeli (layout.tsx veya _document.tsx):
//    <link
//      href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap"
//      rel="stylesheet"
//    />
//
// 2. ConfigProvider ile sarmalanmalı:
//
//    import { ConfigProvider } from 'antd';
//    import theme from './antd-theme';
//
//    <ConfigProvider theme={theme}>
//      <App />
//    </ConfigProvider>
//
// 3. "Sinkable" buton efekti için global CSS:
//    .ant-btn:active {
//      transform: scale(0.98);
//      transition: transform 80ms ease;
//    }
//
// 4. Grammar chip renkleri (Tag bileşeni):
//    der (masculine) → color="blue"  → #68abff
//    die (feminine)  → color="red"   → #d64045
//    das (neuter)    → color="green" → #4caf50
//
// 5. Modal backdrop blur için global CSS:
//    .ant-modal-mask {
//      backdrop-filter: blur(12px);
//      -webkit-backdrop-filter: blur(12px);
//      background-color: rgba(25, 28, 29, 0.45) !important;
//    }
