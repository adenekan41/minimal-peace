import { createGlobalStyle, css } from 'styled-components';
const theme = css`
	${(props) =>
		props.theme
			? `
  // @desc Dark Theme
  :root {
    --bg: #090909;
    --bg-sec: #131313;
    --invert: 1;
    --theme-amount: 1;
    --cw: #f6f6f6;
    --gray: #a8a8a8;
    --light-gray: #444;
    --lighter-gray: #222;
    --article-color: #c6c6c6;
    --header-bg: rgba(19,20,21,0.8);
    --gray-alpha: rgba(0, 0, 0, 0.95);
    --token: #e3cb1e;
    --border-color: #3d3d3d;
    --button-index:#1a1a1a;;
    --mark:#1f1f1f;
    --nav-link: rgba(255, 255, 255, 0.8);
}
  `
			: `
  // @desc Light Theme
  :root {
    --bg: #fff;
    --bg-sec: #f1f1f1;
   --button-index:#eeeeee;
   --cw: #2A2A2A;
   --invert:0; 
   --mark: #e9e9e9;
   --theme-amount:0;
   --border-color: #2e2e2e;
   --gray: #888;
   --light-gray: #dedede;
   --lighter-gray: #f5f5f5;
   --article-color: #464646;
   --header-bg: rgba(255,255,255,0.8);
   --gray-alpha: rgba(255,255,255,0.95);
   --token: #ae9a0c;
   --border-color: #e4e4e4;
   --nav-link: rgba(0,0,0,.5);
}
  `}
`;
export const BodyStyling = createGlobalStyle`


@font-face {
  font-family: Blorado;
  font-weight: 400;
  font-style: normal;
  src: url("../../../fonts/HKGrotesk-Regular.ttf");
  font-display: swap;
}
@font-face {
  font-family: Blorado;
  font-weight: 500;
  font-style: normal;
  src: url("../../../fonts/HKGrotesk-Medium.ttf");
  font-display: swap;
}
@font-face {
  font-family: Blorado;
  font-weight: 600;
  font-style: normal;
  src: url("../../../fonts/HKGrotesk-SemiBold.ttf");
  font-display: swap;
}

@font-face {
  font-family: Blorado;
  font-weight: 700;
  font-style: normal;
  src: url("../../../fonts/HKGrotesk-Bold.ttf");
  font-display: swap;
}

${theme}

::selection {
  background: var(--token);
  color: #fff;
  /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--token);
  color: #fff;
  /* Gecko Browsers */
}
/*::placeholder { color: #c5c5c5 !important; font-weight: 300 !important }*/
::-webkit-input-placeholder {
  color: var(--light-gray);
  opacity: 1;
}
:-moz-placeholder {
  color: var(--light-gray);
  opacity: 1;
}
:-ms-input-placeholder {
  color: var(--light-gray);
  opacity: 1;
}
/*--------*/  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
:global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
}


body {
  background: var(--bg) !important;
  padding-right: 0px !important;
  font-family: "Blorado", sans-serif; 
  margin:0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing: antialiased;
  
}
html{

    scroll-behavior: smooth;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
}

svg{
  fill: var(--article-color);
  &.logo__section{
    path{
      fill: var(--cw);
    }
  }
}
a, h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
  font-family: "Blorado", sans-serif;
  text-rendering: geometricPrecision;
  color: var(--cw)
}
a{
  cursor: pointer;
  p{
    cursor: pointer;
  }
}

.btn-black {
  background-color: var(--cw);
  color: var(--bg) !important;
  border-radius: 1px;
  font-size: 15px;
}
.btn-outline-black {
  border: 1px solid var(--cw);
  color: var(--cw) !important;
  border-radius: 1px;
  font-size: 15px;
}
mark.mark {
  color: inherit;
  padding: 0;
  background: none;
  background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%);
  background-repeat: no-repeat;
  background-size: 0% .3em;
  background-position: 0 80%;
  position: relative;
  background-size: 100% .3em;
}
`;
