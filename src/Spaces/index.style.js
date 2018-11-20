import { injectGlobal } from "styled-components";

// eslint-disable-next-line
injectGlobal`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

img,
embed,
iframe,
object,
audio,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
  text-align: left;
}


/* Variables */
/* Spacing Scale - based on a ratio of 1:2 */
/* Media Queries */
/*
   SPACING

   An tenth step powers of two scale ranging from 0 to 40px.
   Namespaces are composable and thus highly grockable - check the legend below

   Legend:

   p = padding
   m = margin

   a = all
   t = top
   r = right
   b = bottom
   l = left

   0 = none
   1 = 1st step in spacing scale
   2 = 2nd step in spacing scale
   3 = 3rd step in spacing scale
   4 = 4th step in spacing scale
   5 = 5th step in spacing scale
   6 = 6th step in spacing scale
   7 = 7th step in spacing scale
   8 = 8th step in spacing scale
   9 = 9th step in spacing scale
   10 = 10th step in spacing scale

*/

.pa0 { padding: 0; }
.pa1 { padding: 4px; }
.pa2 { padding: 8px; }
.pa3 { padding: 12px; }
.pa4 { padding: 16px; }
.pa5 { padding: 20px; }
.pa6 { padding: 24px; }
.pa7 { padding: 28px; }
.pa8 { padding: 32px; }
.pa9 { padding: 36px; }
.pa10 { padding: 40px; }

.pl0 { padding-left: 0; }
.pl1 { padding-left: 4px; }
.pl2 { padding-left: 8px; }
.pl3 { padding-left: 12px; }
.pl4 { padding-left: 16px; }
.pl5 { padding-left: 20px; }
.pl6 { padding-left: 24px; }
.pl7 { padding-left: 28px; }
.pl8 { padding-left: 32px; }
.pl9 { padding-left: 36px; }
.pl10 { padding-left: 40px; }

.pr0 { padding-right: 0; }
.pr1 { padding-right: 4px; }
.pr2 { padding-right: 8px; }
.pr3 { padding-right: 12px; }
.pr4 { padding-right: 16px; }
.pr5 { padding-right: 20px; }
.pr6 { padding-right: 24px; }
.pr7 { padding-right: 28px; }
.pr8 { padding-right: 32px; }
.pr9 { padding-right: 36px; }
.pr10 { padding-right: 40px; }

.pb0 { padding-bottom: 0; }
.pb1 { padding-bottom: 4px; }
.pb2 { padding-bottom: 8px; }
.pb3 { padding-bottom: 12px; }
.pb4 { padding-bottom: 16px; }
.pb5 { padding-bottom: 20px; }
.pb6 { padding-bottom: 24px; }
.pb7 { padding-bottom: 28px; }
.pb8 { padding-bottom: 32px; }
.pb9 { padding-bottom: 36px; }
.pb10 { padding-bottom: 40px; }

.pt0 { padding-top: 0; }
.pt1 { padding-top: 4px; }
.pt2 { padding-top: 8px; }
.pt3 { padding-top: 12px; }
.pt4 { padding-top: 16px; }
.pt5 { padding-top: 20px; }
.pt6 { padding-top: 24px; }
.pt7 { padding-top: 28px; }
.pt8 { padding-top: 32px; }
.pt9 { padding-top: 36px; }
.pt10 { padding-top: 40px; }

.ma0 { margin: 0; }
.ma1 { margin: 4px; }
.ma2 { margin: 8px; }
.ma3 { margin: 12px; }
.ma4 { margin: 16px; }
.ma5 { margin: 20px; }
.ma6 { margin: 24px; }
.ma7 { margin: 28px; }
.ma8 { margin: 32px; }
.ma9 { margin: 36px; }
.ma10 { margin: 40px; }

.ml0 { margin-left: 0; }
.ml1 { margin-left: 4px; }
.ml2 { margin-left: 8px; }
.ml3 { margin-left: 12px; }
.ml4 { margin-left: 16px; }
.ml5 { margin-left: 20px; }
.ml6 { margin-left: 24px; }
.ml7 { margin-left: 28px; }
.ml8 { margin-left: 32px; }
.ml9 { margin-left: 36px; }
.ml10 { margin-left: 40px; }

.mr0 { margin-right: 0; }
.mr1 { margin-right: 4px; }
.mr2 { margin-right: 8px; }
.mr3 { margin-right: 12px; }
.mr4 { margin-right: 16px; }
.mr5 { margin-right: 20px; }
.mr6 { margin-right: 24px; }
.mr7 { margin-right: 28px; }
.mr8 { margin-right: 32px; }
.mr9 { margin-right: 36px; }
.mr10 { margin-right: 40px; }

.mb0 { margin-bottom: 0; }
.mb1 { margin-bottom: 4px; }
.mb2 { margin-bottom: 8px; }
.mb3 { margin-bottom: 12px; }
.mb4 { margin-bottom: 16px; }
.mb5 { margin-bottom: 20px; }
.mb6 { margin-bottom: 24px; }
.mb7 { margin-bottom: 28px; }
.mb8 { margin-bottom: 32px; }
.mb9 { margin-bottom: 36px; }
.mb10 { margin-bottom: 40px; }

.mt0 { margin-top: 0; }
.mt1 { margin-top: 4px; }
.mt2 { margin-top: 8px; }
.mt3 { margin-top: 12px; }
.mt4 { margin-top: 16px; }
.mt5 { margin-top: 20px; }
.mt6 { margin-top: 24px; }
.mt7 { margin-top: 28px; }
.mt8 { margin-top: 32px; }
.mt9 { margin-top: 36px; }
.mt10 { margin-top: 40px; }
`;
