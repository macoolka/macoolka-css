
const spin = `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

const bounce = `
  from, 20%, 53%, 80%, 100% {
    -timoutg-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const flash = `
  from, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`;

const pulse = `
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const rubberBand = `
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const shake = `
  from, 100% {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`;

const swing = `
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const tada = `
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const wobble = `
  from {
    transform: none;
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  100% {
    transform: none;
  }
`;

const jello = `
  from, 11.1%, 100% {
    transform: none;
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;

const bounceIn = `
  from, 20%, 40%, 60%, 80%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const bounceInDown = `
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  100% {
    transform: none;
  }
`;

const bounceInLeft = `
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  100% {
    transform: none;
  }
`;

const bounceInRight = `
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    transform: none;
  }
`;

const bounceInUp = `
  from, 60%, 75%, 90%, 100% {
    -timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const bounceOut = `
  20% {
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
`;

const bounceOutDown = `
  20% {
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;

const bounceOutLeft = `
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const bounceOutRight = `
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const bounceOutUp = `
  20% {
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;

const fadeIn = `
  from {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeInDownSmall = `
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInDown = `
  from {
    opacity: 0;
    transform: translate3d(0, -80px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInDownBig = `
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeInLeft = `
  from {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeInLeftBig = `
  from {
    opacity: 0;
    ransform: translate3d(-2000px, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeInRight = `
  from {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeInRightBig = `
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeInUp = `
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeInUpBig = `
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeOut = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const fadeOutDown = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const fadeOutDownBig = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;

const fadeOutLeft = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;

const fadeOutLeftBig = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const fadeOutRight = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;

const fadeOutRightBig = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const fadeOutUp = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, -80px, 0);
  }
`;

const fadeOutUpBig = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;

const flip = `
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -timing-function: ease-out;
  }

  40% {
    transform:
      perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -timing-function: ease-out;
  }

  50% {
    transform:
      perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(.95, .95, .95);
    -timing-function: ease-in;
  }

  100% {
    transform: perspective(400px);
    -timing-function: ease-in;
  }
`;

const flipInX = `
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  100% {
    transform: perspective(400px);
  }
`;

const flipInY = `
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    transform: perspective(400px);
  }
`;

const flipOutX = `
  from {
    transform: perspective(400px);
  }

  30% {
  transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  100% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;

const flipOutY = `
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  100% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;

const lightSpeedIn = `
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  100% {
    transform: none;
    opacity: 1;
  }
`;

const lightSpeedOut = `
  from {
    opacity: 1;
  }

  100% {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`;

const rotateIn = `
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  100% {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`;

const rotateInDownLeft = `
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;

const rotateInDownRight = `
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;

const rotateInUpLeft = `
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;

const rotateInUpRight = `
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;

const rotateOut = `
  from {
    transform-origin: center;
    opacity: 1;
  }

  100% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;

const rotateOutDownLeft = `
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;

const rotateOutDownRight = `
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const rotateOutUpLeft = `
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const rotateOutUpRight = `
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;

const hinge = `
  0% {
    transform-origin: top left;
    -timing-function: ease-in-out;
  }

  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    -timing-function: ease-in-out;
  }

  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    -timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;

const rollIn = `
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const rollOut = `
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;

const zoomIn = `
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

const zoomInDown = `
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const zoomInLeft = `
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const zoomInRight = `
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const zoomInUp = `
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const zoomOut = `
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
`;

const zoomOutDown = `
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const zoomOutLeft = `
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: scale(.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
`;

const zoomOutRight = `
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  100% {
    opacity: 0;
    transform: scale(.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
`;

const zoomOutUp = `
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    -timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;

const slideInDown = `
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const slideInLeft = `
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const slideInRight = `
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const slideInUp = `
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutDown = `
  from {
    transform: translate3d(0, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const slideOutLeft = `
  from {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideOutRight = `
  from {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;

const slideOutUp = `
  from {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;

const hide = `
  from {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  100% {
    display: none;
  }
`;
const rippleEnter = `
0% {
  transform: scale(0);
  opacity: 0.1;
}
100% {
  transform: scale(1);
  opacity: 0.3;
}
`;
const rippleExit = `
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;
const pulsate = `
0% {
  transform: scale(1);
}
50% {
  transform: scale(0.92);
}
100% {
  transform: scale(1);
}
`;
export const animations = {
  bounce,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownSmall,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  hide,
  hinge,
  jello,
  lightSpeedIn,
  lightSpeedOut,
  pulse,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  rollIn,
  rollOut,
  rubberBand,
  shake,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  spin,
  swing,
  tada,
  wobble,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
  rippleEnter,
  rippleExit,
  pulsate,
};
export type Animations = 'bounce' |
  'bounceIn' |
  'bounceInDown' |
  'bounceInLeft' |
  'bounceInRight' |
  'bounceInUp' |
  'bounceOut' |
  'bounceOutDown' |
  'bounceOutLeft' |
  'bounceOutRight' |
  'bounceOutUp' |
  'fadeIn' |
  'fadeInDown' |
  'fadeInDownSmall' |
  'fadeInDownBig' |
  'fadeInLeft' |
  'fadeInLeftBig' |
  'fadeInRight' |
  'fadeInRightBig' |
  'fadeInUp' |
  'fadeInUpBig' |
  'fadeOut' |
  'fadeOutDown' |
  'fadeOutDownBig' |
  'fadeOutLeft' |
  'fadeOutLeftBig' |
  'fadeOutRight' |
  'fadeOutRightBig' |
  'fadeOutUp' |
  'fadeOutUpBig' |
  'flash' |
  'flip' |
  'flipInX' |
  'flipInY' |
  'flipOutX' |
  'flipOutY' |
  'hide' |
  'hinge' |
  'jello' |
  'lightSpeedIn' |
  'lightSpeedOut' |
  'pulse' |
  'rotateIn' |
  'rotateInDownLeft' |
  'rotateInDownRight' |
  'rotateInUpLeft' |
  'rotateInUpRight' |
  'rotateOut' |
  'rotateOutDownLeft' |
  'rotateOutDownRight' |
  'rotateOutUpLeft' |
  'rotateOutUpRight' |
  'rollIn' |
  'rollOut' |
  'rubberBand' |
  'shake' |
  'slideInDown' |
  'slideInLeft' |
  'slideInRight' |
  'slideInUp' |
  'slideOutDown' |
  'slideOutLeft' |
  'slideOutRight' |
  'slideOutUp' |
  'spin' |
  'swing' |
  'tada' |
  'wobble' |
  'zoomIn' |
  'zoomInDown' |
  'zoomInLeft' |
  'zoomInRight' |
  'zoomInUp' |
  'zoomOut' |
  'zoomOutDown' |
  'zoomOutLeft' |
  'zoomOutRight' |
  'zoomOutUp' |
  'rippleEnter' |
  'rippleExit' |
  'pulsate';
