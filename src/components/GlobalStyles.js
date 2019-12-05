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
    font-family: "Cereal";
    font-style: normal;
    font-weight: 400;
    src: local('AirbnbCereal-Book') url("../static/fonts/AirbnbCerealBook.tff") format("truetype");
  }

  @font-face {
    font-family: "Cereal";
    font-style: bold;
    font-weight: 700;
    src: local('AirbnbCereal-Extra-Bold') url("../static/fonts/AirbnbCerealExtraBold.tff") format("truetype");
  }

  @font-face {
    font-family: "Cereal";
    font-style: light;
    font-weight: 300;
    src: local('AirbnbCereal-Light') url("../static/fonts/AirbnbCerealLight.tff") format("truetype");
  }

  html {
    font-size: 62.5%;
    color: #43413f;
    font-family: "Cereal", sans-serif;
  }

  body,
  * {
    box-sizing: border-box;
    font-family: "Cereal", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-ligatures: common-ligatures;
  }
`;

export default GlobalStyles;
