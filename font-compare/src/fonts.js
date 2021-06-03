import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Odibee Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/odibeesans/v4/neIPzCSooYAho6WvjeToRbk1cJA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  /* latin-ext */
  @font-face {
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxIIzI.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  /* latin */
  @font-face {
    font-family: 'Caveat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/caveat/v10/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9eIWpYQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin */
  @font-face {
    font-family: 'Condiment';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/condiment/v10/pONk1hggFNmwvXALyH6irIP5.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin */
  @font-face {
    font-family: 'Flavors';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/flavors/v12/FBV2dDrhxqmveJTpXkvvNw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v9/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin */
  @font-face {
    font-family: 'Pattaya';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pattaya/v6/ea8ZadcqV_zkHY-XBdet9g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin */
  @font-face {
    font-family: 'Sigmar One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sigmarone/v11/co3DmWZ8kjZuErj9Ta3do6Tppg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin */
  @font-face {
    font-family: 'Snowburst One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/snowburstone/v10/MQpS-WezKdujBsXY3B7I-UT7SZiePg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* [5] */
  @font-face {
    font-family: 'ZCOOL KuaiLe';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/zcoolkuaile/v7/tssqApdaRQokwFjFJjvM6h2Wo-Tpo2MpsrpYU3EJjXfOiTrBdUtGm0PGsPHkbHZzpr3G.5.woff2) format('woff2');
    unicode-range: U+fee3, U+fef3, U+ff03-ff04, U+ff07, U+ff0a, U+ff17-ff19, U+ff1c-ff1d, U+ff20-ff3a, U+ff3c, U+ff3e-ff5b, U+ff5d, U+ff61-ff65, U+ff67-ff6a, U+ff6c, U+ff6f-ff78, U+ff7a-ff7d, U+ff80-ff84, U+ff86, U+ff89-ff8e, U+ff92, U+ff97-ff9b, U+ff9d-ff9f, U+ffe0-ffe4, U+ffe6, U+ffe9, U+ffeb, U+ffed, U+fffc, U+1f004, U+1f170-1f171, U+1f192-1f195, U+1f198-1f19a, U+1f1e6-1f1e8;
  }
`;
