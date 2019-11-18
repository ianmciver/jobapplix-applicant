import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
          /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    src: local("Montserrat Light"), local("Montserrat-Light"),
      url("/static/fonts/montserrat_light.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"),
      url("/static/fonts/montserrat.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    src: local("Montserrat Medium"), local("Montserrat-Medium"),
      url("/static/fonts/montserrat_medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    src: local("Montserrat SemiBold"), local("Montserrat-SemiBold"),
      url("/static/fonts/montserrat_SemiBold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"),
      url("/static/fonts/montserrat_bold.ttf") format("truetype");
  }

  html {
    font-size: 62.5%;
    color: #2b2d2d;
    font-family: "Montserrat", sans-serif;
  }

  body,
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
