import { createTheme } from 'baseui';
import primitives from './default-primitives';

export { ThemeProvider } from 'baseui';

const WHITE = '#FFFFFF';
export const customTheme = createTheme(
  primitives,
  {
    breakpoints: {
      small: 320,
      medium: 600,
      large: 1280,
    },

    colors: {
      // Primary Palette
      primary50: primitives.primary50,
      primary100: primitives.primary100,
      primary200: primitives.primary200,
      primary300: primitives.primary300,
      primary400: primitives.primary400,
      primary: primitives.primary400,
      primary500: primitives.primary500,
      primary600: primitives.primary600,
      primary700: primitives.primary700,

      // Negative Palette
      negative50: primitives.negative50,
      negative100: primitives.negative100,
      negative200: primitives.negative200,
      negative300: primitives.negative300,
      negative400: primitives.negative400,
      negative: primitives.negative400,
      negative500: primitives.negative500,
      negative600: primitives.negative600,
      negative700: primitives.negative700,

      // Warning Palette
      warning50: primitives.warning50,
      warning100: primitives.warning100,
      warning200: primitives.warning200,
      warning300: primitives.warning300,
      warning400: primitives.warning400,
      warning: primitives.warning400,
      warning500: primitives.warning500,
      warning600: primitives.warning600,
      warning700: primitives.warning700,

      // Positive Palette
      positive50: primitives.positive50,
      positive100: primitives.positive100,
      positive200: primitives.positive200,
      positive300: primitives.positive300,
      positive400: primitives.positive400,
      positive: primitives.positive400,
      positive500: primitives.positive500,
      positive600: primitives.positive600,
      positive700: primitives.positive700,

      // Monochrome Palette
      white: primitives.mono100,
      mono100: primitives.mono100,
      mono200: primitives.mono200,
      mono300: primitives.mono300,
      mono400: primitives.mono400,
      mono500: primitives.mono500,
      mono600: primitives.mono600,
      mono700: primitives.mono700,
      mono800: primitives.mono800,
      mono900: primitives.mono900,
      mono1000: primitives.mono1000,
      black: primitives.mono1000,

      // Rating Palette,
      rating200: primitives.rating200,
      rating400: primitives.rating400,

      // Semantic Colors

      // Font Color
      colorPrimary: primitives.mono1000,
      colorSecondary: primitives.mono800,

      // Background
      background: primitives.mono100,
      backgroundAlt: primitives.mono100,
      backgroundInv: primitives.mono1000,

      // Foreground
      foreground: primitives.mono1000,
      foregroundAlt: primitives.mono800,
      foregroundInv: primitives.mono100,

      // Borders
      border: primitives.mono500,
      borderAlt: primitives.mono600,
      borderFocus: primitives.primary400,
      borderError: primitives.negative400,

      // Buttons
      buttonPrimaryFill: primitives.primary400,
      buttonPrimaryText: primitives.mono100, // white
      buttonPrimaryHover: primitives.primary500,
      buttonPrimaryActive: primitives.primary600,

      buttonSecondaryFill: primitives.primary50,
      buttonSecondaryText: primitives.primary400,
      buttonSecondaryHover: primitives.primary100,
      buttonSecondaryActive: primitives.primary200,

      buttonTertiaryFill: primitives.mono200,
      buttonTertiaryText: primitives.primary400,
      buttonTertiaryHover: primitives.mono400,
      buttonTertiaryActive: primitives.mono500,
      // button $selected only applies to tertiary variant.
      buttonTertiarySelectedFill: primitives.primary400,
      buttonTertiarySelectedText: primitives.mono100,

      buttonMinimalFill: 'transparent',
      buttonMinimalText: primitives.primary400,
      buttonMinimalHover: primitives.mono200,
      buttonMinimalActive: primitives.mono400,

      buttonDisabledFill: primitives.mono300,
      buttonDisabledText: primitives.mono600,

      // Breadcrumbs
      breadcrumbsText: primitives.mono900,
      breadcrumbsSeparatorFill: primitives.mono700,

      // FileUploader
      fileUploaderBackgroundColor: primitives.mono200,
      fileUploaderBackgroundColorActive: primitives.primary50,
      fileUploaderBorderColorActive: primitives.primary400,
      fileUploaderBorderColorDefault: primitives.mono500,
      fileUploaderMessageColor: primitives.mono600,

      // Links
      linkText: primitives.primary400,
      linkVisited: primitives.primary500,
      linkHover: primitives.primary600,

      // Shadow
      shadowFocus: 'rgba(39, 110, 241, 0.32)',
      shadowError: 'rgba(229, 73, 55, 0.32)',

      // List
      listHeaderFill: WHITE,
      listBodyFill: primitives.mono200,
      listIconFill: primitives.mono500,
      listBorder: primitives.mono500,

      // Tick
      tickFill: 'transparent',
      tickFillHover: primitives.mono400,
      tickFillActive: primitives.mono500,
      tickFillSelected: primitives.primary400,
      tickFillSelectedHover: primitives.primary500,
      tickFillSelectedHoverActive: primitives.primary600,
      tickFillDisabled: primitives.mono400,
      tickBorder: primitives.mono700,
      tickMarkFill: WHITE,

      // Slider
      sliderTrackFill: primitives.mono600,
      sliderTrackFillHover: primitives.mono700,
      sliderTrackFillActive: primitives.mono800,
      sliderTrackFillSelected: primitives.primary400,
      sliderTrackFillSelectedHover: primitives.primary500,
      sliderTrackFillSelectedActive: primitives.primary600,
      sliderTrackFillDisabled: primitives.mono600,
      sliderHandleFill: WHITE,
      sliderHandleFillHover: WHITE,
      sliderHandleFillActive: WHITE,
      sliderHandleFillSelected: WHITE,
      sliderHandleFillSelectedHover: WHITE,
      sliderHandleFillSelectedActive: WHITE,
      sliderHandleFillDisabled: primitives.mono500,
      sliderBorder: primitives.mono500,
      sliderBorderHover: primitives.primary400,
      sliderBorderDisabled: primitives.mono600,

      // Inputs
      inputFill: primitives.mono200,
      inputFillEnhancer: primitives.mono400,
      inputFillError: primitives.negative50,
      inputFillDisabled: primitives.mono300,
      inputTextDisabled: primitives.mono600,

      // Menu
      menuFillHover: primitives.mono300,

      // Notification
      notificationPrimaryBackground: primitives.primary50,
      notificationPrimaryText: primitives.primary500,
      notificationPositiveBackground: primitives.positive50,
      notificationPositiveText: primitives.positive500,
      notificationWarningBackground: primitives.warning50,
      notificationWarningText: primitives.warning500,
      notificationNegativeBackground: primitives.negative50,
      notificationNegativeText: primitives.negative500,

      // Table
      tableHeadBackgroundColor: primitives.mono100,

      // Toast
      toastText: WHITE,
      toastPrimaryBackground: primitives.primary500,
      toastPositiveBackground: primitives.positive500,
      toastWarningBackground: primitives.warning500,
      toastNegativeBackground: primitives.negative500,
    },
    typography: {
      Overline: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '16px',
        fontSize: '10px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
      },
      Caption: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '16px',
        fontSize: '12px',
        letterSpacing: '0.4px',
      },
      Button: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '16px',
        fontSize: '14px',
        letterSpacing: '1.35px',
        textTransform: 'uppercase',
      },
      Body2: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '20px',
        fontSize: '14px',
        letterSpacing: '0.25px',
      },
      Body1: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '28px',
        fontSize: '16px',
        letterSpacing: '0.444444px',
      },
      Subtitle2: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        fontSize: '14px',
        letterSpacing: '0.1px',
      },
      Subtitle1: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '24px',
        fontSize: '16px',
        letterSpacing: '0.15px',
      },
      H6_Heading: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '24px',
        fontSize: '20px',
        letterSpacing: '0.15px',
      },
      H5_Heading: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '28px',
        fontSize: '24px',
      },
      H4_Heading: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '40px',
        fontSize: '34px',
        letterSpacing: '0.25px',
      },
      H3_Heading: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '57px',
        fontSize: '48px',
      },
      H2_Heading: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '71px',
        fontSize: '60px',
        letterSpacing: '-0.5px',
      },
      H1_Heading: {
        fontFamily: primitives.primaryFontFamily,
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '112px',
        fontSize: '96px',
        letterSpacing: '-1.5px',
      },
    },
    // sizing: {
    //   scale0: '1px',
    //   scale100: '2px',
    //   scale200: '4px',
    //   scale300: '6px',
    //   scale400: '8px',
    //   scale500: '10px',
    //   scale550: '12px',
    //   scale600: '14px',
    //   scale700: '16px',
    //   scale800: '20px',
    //   scale900: '24px',
    //   scale1000: '32px',
    //   scale1200: '40px',
    //   scale1400: '48px',
    //   scale1600: '56px',
    //   scale2400: '64px',
    //   scale3200: '96px',
    //   scale4800: '128px',
    // },
    borders: {
      useRoundedCorners: false,
    },
  },
);
