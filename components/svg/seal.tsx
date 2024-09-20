import { twJoin } from "tailwind-merge";

export default function Seal({
  background,
  border,
  classNames,
}: {
  background?: string;
  border?: string;
  classNames?: {
    wrapper?: string;
    background?: string;
    border?: string;
  };
}) {
  return (
    <svg
      className={classNames?.wrapper}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="40px"
      height="40px"
      version="1.1"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        //   imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 1009.69 1009.97"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* <defs>
  <style type="text/css">
   <![CDATA[
    .fil0 {fill:gray}
    .fil1 {fill:black;fill-rule:nonzero}
   ]]>
  </style>
 </defs> */}
      <g id="Camada_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <path
          style={{ fill: background }}
          className={twJoin("fil0", classNames?.background)}
          d="M982.64 476.4l0 0zm-944.19 143.33c-2.22,8.85 -4.32,17.21 -3.93,25.31 0.18,3.88 0.65,7.75 1.41,11.64 0.73,3.73 1.76,7.43 3.09,11.15l0.05 0.2c1.29,3.79 2.8,7.36 4.56,10.75 1.79,3.48 3.82,6.77 6.11,9.93 4.72,6.57 11.53,11.78 18.75,17.31l0.17 0.13c14.66,11.19 25.46,22.63 33.36,36 7.91,13.4 12.71,28.4 15.36,46.67l0.03 0.19c1.32,8.95 2.56,17.46 5.99,24.74l0 0.05c1.64,3.49 3.54,6.86 5.73,10.16 2.09,3.15 4.47,6.2 7.14,9.16l0.1 0.15c2.57,2.93 5.33,5.64 8.32,8.17 3,2.54 6.14,4.81 9.44,6.86l0.05 0c3.44,2.15 7.05,3.72 10.79,5.03 4.03,1.41 8.6,2.62 13.28,3.87 17.8,4.74 30.06,9.72 40.56,17.81 10.49,8.09 18.37,18.65 27.4,34.58l0 0.05c2.3,4.07 4.54,8.03 7.11,11.88 2.22,3.32 4.66,6.43 7.56,9.2 2.85,2.72 5.84,5.17 9,7.4 3.26,2.29 6.56,4.28 9.95,5.98l0.2 0.05c3.72,1.94 7.27,3.49 10.71,4.68 3.55,1.23 7.31,2.21 11.34,2.96 1.16,0.22 2.6,0.41 4.35,0.56 1.55,0.14 3.19,0.2 4.94,0.2 5.34,0 10.6,-0.58 16.16,-1.19l0.23 -0.02c3.42,-0.39 6.89,-0.77 9.67,-1.01 3.51,-0.29 7.07,-0.49 10.64,-0.49 4.44,0 8.73,0.31 12.93,0.94 4.23,0.63 8.31,1.6 12.29,2.91 3.44,1.11 6.79,2.1 9.82,2.99 14.06,4.13 21.84,6.42 41.58,21.57l0.05 0.05c7.25,5.55 14.11,10.82 21.68,13.66l0.05 0c3.69,1.39 7.39,2.48 11.16,3.29 3.79,0.81 7.61,1.34 11.52,1.58l0.25 0c1.63,0.14 2.71,0.22 3.24,0.24 0.48,0.02 1.5,0.03 3.1,0.03 2.91,0 5.72,-0.15 8.39,-0.45 2.98,-0.33 5.81,-0.79 8.46,-1.38 3.76,-0.83 7.49,-2.26 11.25,-4.01 4.13,-1.92 8.14,-4.17 12.25,-6.49 16.4,-9.21 32.18,-14.82 48.58,-16.97 16.33,-2.15 32.95,-0.8 51.08,3.88l0.01 -0.04 0.33 0.08 0 0.05c8.74,2.25 16.97,4.37 25.17,4.02 3.87,-0.16 7.71,-0.62 11.57,-1.36 3.75,-0.72 7.45,-1.74 11.15,-3.05l0.25 -0.1c3.77,-1.24 7.33,-2.72 10.74,-4.45 3.53,-1.79 6.84,-3.81 10,-6.06 6.67,-4.73 11.9,-11.5 17.44,-18.67l0.1 -0.13c11.49,-14.86 23.8,-26.21 37.98,-34.58 14.24,-8.41 30.14,-13.72 48.74,-16.5 4.89,-0.73 9.64,-1.45 13.66,-2.36 3.81,-0.87 7.55,-2.03 11.25,-3.79l0.05 0c3.61,-1.72 6.97,-3.62 10.12,-5.73 3.1,-2.08 6.12,-4.47 9.1,-7.18l0.15 -0.15c3.01,-2.65 5.7,-5.39 8.13,-8.28 2.44,-2.9 4.71,-6.07 6.85,-9.55 4.33,-7.04 6.48,-15.25 8.76,-23.94l0.04 -0.16c4.74,-18.16 11.66,-33.44 21.48,-46.74 9.82,-13.3 22.38,-24.4 38.39,-34.21l0.02 -0.01c7.79,-4.78 15.12,-9.28 20.52,-15.38l0 -0.05c2.62,-2.95 4.97,-6.01 7.08,-9.22l0.02 0.02c2.11,-3.23 3.97,-6.61 5.6,-10.18l0.05 -0.2c1.81,-3.8 3.24,-7.4 4.3,-10.87 1.08,-3.54 1.92,-7.3 2.52,-11.34 0.6,-3.99 0.61,-7.95 0.33,-11.96 -0.31,-4.34 -0.99,-8.99 -1.69,-13.77 -2.71,-18.51 -2.3,-35.23 1.55,-51.33 3.85,-16.1 11.06,-31.2 21.95,-46.49l0.15 -0.21c5.23,-7.37 10.17,-14.34 12.75,-22.02 1.22,-3.63 2.18,-7.36 2.87,-11.25l0 -0.05c0.71,-3.98 1.12,-7.82 1.23,-11.55l0 -0.15c0.17,-3.96 0.05,-7.86 -0.36,-11.75 -0.39,-3.69 -1.1,-7.52 -2.12,-11.55l0.04 -0.01c-2.04,-7.81 -6.5,-15.13 -11.21,-22.86l-0.13 -0.21c-9.76,-16.02 -15.92,-31.58 -18.66,-47.84 -2.73,-16.22 -1.99,-32.93 2.06,-51.29l-0.04 -0.01 0.05 -0.22c1.94,-8.84 3.78,-17.2 3.14,-25.33l0 -0.05c-0.31,-3.99 -0.88,-7.8 -1.72,-11.48 -0.85,-3.71 -2,-7.39 -3.45,-11.09l-0.05 -0.2c-1.37,-3.69 -2.98,-7.19 -4.86,-10.57 -1.84,-3.32 -3.98,-6.57 -6.45,-9.79 -4.94,-6.44 -11.76,-11.36 -19,-16.57l-0.38 -0.28 -0.02 0.03c-15.18,-10.88 -26.95,-22.8 -35.89,-36.79 -8.9,-13.93 -14.78,-29.62 -18.21,-48.09 -0.86,-4.64 -1.71,-9.15 -2.88,-13.56 -1.03,-3.86 -2.32,-7.58 -4.17,-11.15l-0.02 0.01c-1.85,-3.54 -3.87,-6.84 -6.09,-9.91 -2.3,-3.17 -4.78,-6.11 -7.48,-8.86l-0.15 -0.15c-2.8,-2.96 -5.67,-5.58 -8.66,-7.91 -3.08,-2.4 -6.29,-4.54 -9.67,-6.45l-0.05 0c-3.51,-1.99 -7.18,-3.41 -10.97,-4.57 -4.18,-1.27 -8.74,-2.29 -13.42,-3.34 -18.02,-4.04 -33.6,-10.51 -47.28,-19.88 -13.74,-9.4 -25.47,-21.6 -35.75,-37.04 -2.58,-3.89 -5.09,-7.68 -7.95,-11.35 -2.48,-3.18 -5.14,-6.12 -8.21,-8.66l0.02 -0.02c-2.95,-2.43 -6.11,-4.66 -9.51,-6.72 -3.31,-2 -6.75,-3.73 -10.36,-5.23l-0.2 -0.1c-3.57,-1.55 -7.23,-2.83 -11.03,-3.84 -3.74,-1 -7.52,-1.71 -11.4,-2.14l-0.05 0c-1,-0.12 -1.84,-0.19 -2.53,-0.23 -0.51,-0.03 -1.4,-0.04 -2.66,-0.04 -6.66,0 -13.2,1.19 -20.11,2.45l-0.31 0.06c-4.11,0.77 -8.3,1.54 -12.6,2.12 -4.75,0.64 -9.51,1.07 -14.22,1.07 -12.38,0 -24.69,-2.19 -36.51,-6.02 -12.44,-4.04 -24.25,-9.88 -34.92,-16.88 -0.02,0.02 -0.31,-0.21 -0.36,-0.24l0.02 -0.02c-7.6,-5.01 -14.77,-9.73 -22.66,-12.07 -3.67,-1.08 -7.38,-1.9 -11.16,-2.46 -3.63,-0.53 -7.36,-0.8 -11.25,-0.8l0 -0.05 -1.54 -0 0 0.05c-3.88,0 -7.6,0.27 -11.22,0.8 -3.78,0.55 -7.47,1.38 -11.13,2.46 -3.85,1.14 -7.43,2.79 -10.92,4.73 -3.67,2.04 -7.64,4.66 -11.72,7.36l-0.05 0c-15.42,10.15 -25.11,15.51 -36.19,17.44 -11.22,1.96 -21.87,0.18 -39.24,-3.94l-0.05 -0.02c-8.88,-2.1 -17.19,-4.06 -25.42,-3.55 -3.97,0.26 -7.82,0.79 -11.61,1.6 -3.87,0.82 -7.57,1.9 -11.15,3.24l-0.15 0.05c-3.62,1.3 -7.16,2.88 -10.66,4.76 -3.46,1.86 -6.73,3.94 -9.89,6.29 -3.19,2.37 -5.98,5.15 -8.6,8.2 -2.83,3.28 -5.61,7.04 -8.45,10.9 -10.66,14.47 -17.48,22.57 -27.05,28.14 -9.58,5.57 -19.93,7.46 -37.66,9.49l-0.02 0c-9.09,1.06 -17.65,2.06 -25.1,5.31 -3.59,1.56 -7.03,3.37 -10.36,5.45 -3.28,2.05 -6.38,4.33 -9.32,6.85l-0.2 0.15c-3.07,2.53 -5.86,5.19 -8.4,8.02 -2.58,2.88 -4.95,5.96 -7.13,9.27l0 0.05c-2.17,3.29 -3.85,6.87 -5.29,10.66 -1.66,4.34 -2.95,8.69 -4.27,13.16l0 0.05c-5.26,17.6 -11.78,31.27 -21.19,42.98 -9.41,11.71 -21.36,21.02 -37.47,29.88l-0.05 0c-4.16,2.28 -8.21,4.5 -11.96,6.95 -3.34,2.18 -6.46,4.57 -9.25,7.43 -2.73,2.8 -5.23,5.78 -7.54,8.97 -2.22,3.07 -4.24,6.36 -6.08,9.89l-0.1 0.1c-1.79,3.34 -3.35,6.88 -4.71,10.68 -1.31,3.66 -2.33,7.39 -3.1,11.25l-0.05 0.05c-0.78,3.91 -0.99,7.87 -0.9,11.91 0.09,4.23 0.56,8.93 1.04,13.77 1.84,18.65 0.62,35.4 -3.99,51.31 -4.63,15.97 -12.56,30.77 -24.15,45.48 -3.08,3.92 -6.08,7.74 -8.33,11.09 -2.24,3.35 -4.2,6.79 -5.64,10.49 -1.44,3.71 -2.58,7.42 -3.44,11.16 -0.83,3.67 -1.4,7.45 -1.69,11.41l-0.05 0.25c-0.36,3.91 -0.42,7.8 -0.19,11.74 0.22,3.82 0.74,7.65 1.55,11.55l0 0.05c0.79,3.82 2.16,7.54 3.84,11.26 1.81,4 4.05,8.09 6.35,12.29l0 0.05c9.6,17.66 15.5,34.79 17.79,52.51 2.29,17.76 0.93,35.8 -3.99,55.26l-0.04 0.16z"
        />
        <path
          style={{ fill: border, fillRule: "nonzero" }}
          className={twJoin("fil1", classNames?.border)}
          d="M50.92 622.85c-1.11,4.44 -2.2,8.76 -2.79,12.08 -0.59,3.31 -0.93,6.49 -0.79,9.51 0.07,1.4 0.21,3.04 0.44,4.91 0.19,1.61 0.45,3.23 0.77,4.87 0.34,1.76 0.7,3.3 1.07,4.62 0.35,1.25 0.85,2.81 1.52,4.67l0.17 0.48 0.12 0.47c0.55,1.58 1.07,2.95 1.57,4.13 0.56,1.33 1.25,2.77 2.05,4.32 0.64,1.24 1.45,2.65 2.42,4.23 0.91,1.48 1.8,2.83 2.68,4.04l0 0.05c1.66,2.31 3.92,4.59 6.53,6.88 3.07,2.7 6.29,5.17 9.6,7.71l0.17 0.13c7.9,6.03 14.8,12.17 20.83,18.64 6.16,6.62 11.39,13.56 15.8,21.04 4.43,7.51 7.99,15.46 10.81,24.07 2.75,8.42 4.78,17.45 6.21,27.33l0.01 0.14 0.01 -0 0.01 0.07c1.17,7.98 2.29,15.56 4.88,21.05l1.11 2.35c0.36,0.7 0.73,1.39 1.1,2.04 0.65,1.15 1.52,2.55 2.62,4.2 0.95,1.44 1.87,2.72 2.75,3.85 0.84,1.08 1.92,2.35 3.24,3.81l0.7 0.78 0.22 0.33c0.82,0.91 1.7,1.81 2.62,2.72 1.1,1.08 2.3,2.17 3.61,3.28 1.19,1 2.47,2.01 3.85,3.01l1.99 1.41 2.14 1.33c1.36,0.85 2.63,1.53 3.83,2.08 1.37,0.63 2.85,1.21 4.4,1.75 1.42,0.5 3.41,1.1 5.69,1.74 3.08,0.87 4.86,1.35 6.63,1.82 9.59,2.56 17.7,5.18 24.83,8.25 7.53,3.25 14.12,7.05 20.31,11.82 6.1,4.7 11.42,10.1 16.51,16.61 4.86,6.22 9.42,13.34 14.21,21.79l1.71 3.01 0 0.06 1.64 2.8c1.16,1.97 2.27,3.77 3.26,5.26 0.9,1.34 1.83,2.63 2.82,3.85 0.9,1.1 1.87,2.17 2.93,3.19 1.3,1.24 2.53,2.34 3.68,3.28 1.09,0.89 2.38,1.87 3.87,2.92 1.5,1.05 2.87,1.96 4.12,2.71 1.01,0.6 1.96,1.15 2.87,1.64l0.4 0.1 1.31 0.68c1.85,0.96 3.4,1.72 4.66,2.27 1.62,0.71 3.06,1.28 4.29,1.71 1.36,0.47 2.88,0.92 4.54,1.36 1.51,0.4 3.18,0.76 5,1.1l1.2 0.2 3.68 0.3 2.04 0c4.86,0 9.64,-0.53 14.7,-1.08 2.78,-0.55 7.36,-0.79 10.3,-1.09 1.37,-0.11 3.2,-0.23 5.75,-0.35 2.43,-0.12 4.46,-0.19 5.95,-0.19 2.36,0 4.85,0.1 7.46,0.28 2.52,0.18 4.96,0.45 7.33,0.8 2.49,0.37 4.92,0.84 7.29,1.4 2.49,0.59 4.88,1.26 7.16,2.01l-0.01 0.03 4.72 1.45 4.71 1.41c7.6,2.23 13.51,3.97 20.62,7.41 6.96,3.36 14.53,8.13 25.13,16.28l0.9 0.7c5.71,4.37 11.16,8.48 16.25,10.69l1.36 0.51c1.56,0.59 3.11,1.11 4.65,1.56 1.46,0.43 3.02,0.83 4.66,1.18 1.72,0.37 3.31,0.65 4.76,0.85 1.32,0.18 2.69,0.32 4.1,0.43l1.25 0.05 2.03 0.16c0.75,0.06 0.48,0.07 0.76,0.08l0.68 0.02 1.87 0.01 0 -0.05c1.64,0 2.86,-0.02 3.63,-0.06 1.01,-0.05 2.14,-0.15 3.35,-0.28 1.41,-0.16 2.65,-0.32 3.7,-0.49 1.36,-0.22 2.49,-0.43 3.4,-0.63 1.23,-0.27 2.58,-0.69 4.01,-1.21 1.24,-0.45 2.8,-1.12 4.57,-1.95l0.05 0c1.8,-0.84 3.61,-1.77 5.43,-2.75 1.55,-0.83 3.71,-2.05 5.92,-3.29 8.77,-4.92 17.49,-8.93 26.35,-12.04 8.85,-3.11 17.75,-5.25 26.85,-6.44 9.13,-1.2 18.24,-1.43 27.48,-0.72 5.15,0.4 10.42,1.1 15.82,2.1l0.12 -0.48 21.7 5.55c1.02,0.22 2.05,0.43 3.06,0.62 3.32,0.61 6.52,0.97 9.57,0.84 1.38,-0.06 3,-0.2 4.83,-0.41 1.63,-0.19 3.24,-0.44 4.83,-0.75 1.8,-0.35 3.34,-0.7 4.63,-1.05 1.28,-0.35 2.83,-0.85 4.65,-1.49l0.51 -0.2c1.7,-0.56 3.23,-1.12 4.6,-1.69 1.38,-0.57 2.82,-1.24 4.33,-2.01 1.86,-0.95 3.3,-1.73 4.33,-2.36 1.22,-0.74 2.57,-1.64 4.05,-2.7 2.4,-1.7 4.7,-3.95 6.98,-6.51 2.74,-3.08 5.19,-6.24 7.7,-9.49l0.14 -0.19c6.23,-8.06 12.68,-15.17 19.49,-21.38 6.93,-6.33 14.26,-11.78 22.12,-16.42 7.84,-4.63 16.2,-8.43 25.2,-11.47 8.88,-3 18.24,-5.2 28.22,-6.69 2.68,-0.4 5.29,-0.79 6.91,-1.06 2.09,-0.35 4.04,-0.71 5.75,-1.1l0.05 0c1.31,-0.3 2.78,-0.7 4.46,-1.26 1.37,-0.45 2.73,-0.99 4.07,-1.63l2.47 -1.17c0.7,-0.36 1.37,-0.73 2.01,-1.09 1.45,-0.82 2.81,-1.66 4.08,-2.51 1.36,-0.91 2.63,-1.83 3.79,-2.75 0.93,-0.73 2.05,-1.69 3.35,-2.87l0.75 -0.71c1.45,-1.28 2.66,-2.41 3.63,-3.4 1.03,-1.05 2.08,-2.21 3.14,-3.48l0.05 0c0.71,-0.84 1.67,-2.11 2.88,-3.8 1.1,-1.53 2.03,-2.92 2.81,-4.19l0 -0.05c1.63,-2.65 2.88,-5.6 3.94,-8.74 1.3,-3.84 2.32,-7.71 3.36,-11.68l0.04 -0.16c2.55,-9.8 5.72,-18.86 9.59,-27.3 3.93,-8.58 8.57,-16.5 14,-23.86 5.48,-7.42 11.66,-14.17 18.63,-20.37 6.8,-6.05 14.45,-11.66 23.02,-16.93l0.39 -0.24c6.21,-3.81 12.1,-7.43 16.2,-11.45l1.4 -1.56c1.19,-1.34 2.24,-2.59 3.13,-3.76 1.06,-1.38 1.99,-2.68 2.79,-3.91l0.92 -1.41c0.51,-0.84 1.04,-1.76 1.58,-2.74 0.68,-1.23 1.27,-2.37 1.78,-3.43l0.11 -0.44 0.43 -0.9c0.84,-1.77 1.54,-3.35 2.08,-4.7l0 -0.05c0.73,-1.85 1.25,-3.29 1.57,-4.31 0.44,-1.45 0.84,-2.96 1.19,-4.53 0.28,-1.28 0.58,-2.93 0.88,-4.96 0.24,-1.64 0.37,-3.07 0.39,-4.36 0.03,-1.36 -0.04,-3 -0.16,-4.83 -0.16,-2.29 -0.37,-4.24 -0.6,-6.01l-0.99 -6.8c-1.45,-9.87 -2.05,-19.41 -1.79,-28.78 0.27,-9.37 1.45,-18.45 3.59,-27.38 2.15,-9 5.2,-17.64 9.19,-26.06 3.95,-8.34 8.83,-16.55 14.69,-24.79l-0.03 -0.02 0.26 -0.32c4.66,-6.57 9.06,-12.78 11.03,-18.63 0.42,-1.23 0.86,-2.78 1.33,-4.62 0.41,-1.61 0.76,-3.2 1.03,-4.76l0.03 0.01 0.02 -0.11c0.27,-1.49 0.5,-3.15 0.69,-4.96 0.17,-1.6 0.28,-3.04 0.33,-4.32l-0.04 0 0.05 -0.66c0.07,-1.74 0.09,-3.42 0.04,-5.05 -0.05,-1.51 -0.16,-3.14 -0.34,-4.89 -0.16,-1.55 -0.39,-3.1 -0.67,-4.64 -0.24,-1.29 -0.62,-2.97 -1.15,-5.04l-0.45 -1.75c-0.75,-2.26 -1.82,-4.6 -3.06,-7 -1.74,-3.35 -3.92,-6.93 -6.16,-10.6l0 -0.05 -0.11 -0.18 -0.02 0.01c-5.28,-8.67 -9.6,-17.23 -12.97,-25.84 -3.42,-8.74 -5.88,-17.54 -7.4,-26.58 -1.5,-8.93 -2.05,-18.03 -1.66,-27.46 0.22,-5.27 0.71,-10.58 1.49,-15.93l-0.48 -0.1 2.83 -12.86c0.93,-4.24 1.84,-8.38 2.39,-12.08 0.49,-3.34 0.74,-6.54 0.5,-9.53l-0.01 -0.28c-0.13,-1.59 -0.31,-3.17 -0.54,-4.72 -0.27,-1.76 -0.56,-3.32 -0.87,-4.67 -0.34,-1.49 -0.76,-3.02 -1.25,-4.6 -0.49,-1.56 -1.04,-3.12 -1.65,-4.68l-0.31 -0.79 -0.12 -0.48c-0.48,-1.23 -1,-2.46 -1.56,-3.68 -0.65,-1.42 -1.37,-2.84 -2.16,-4.26 -0.82,-1.48 -1.64,-2.84 -2.46,-4.09l-0.02 0.02c-0.92,-1.39 -1.91,-2.78 -2.96,-4.15 -1.86,-2.42 -4.12,-4.6 -6.63,-6.69 -1.06,-0.89 -2.21,-1.79 -3.41,-2.7l-6.65 -4.77c-8.1,-5.8 -15.39,-11.99 -21.97,-18.71l-0.03 0.02c-6.45,-6.6 -12.17,-13.78 -17.21,-21.67 -4.97,-7.77 -9.06,-15.96 -12.36,-24.7 -3.27,-8.65 -5.79,-17.92 -7.66,-27.96 -0.42,-2.28 -0.84,-4.53 -1.27,-6.61 -0.39,-1.9 -0.84,-3.87 -1.4,-5.99 -0.39,-1.47 -0.86,-2.98 -1.42,-4.53 -0.33,-0.91 -0.69,-1.78 -1.06,-2.61l-0.7 -1.34c-0.76,-1.47 -1.58,-2.91 -2.45,-4.33 -0.9,-1.47 -1.78,-2.8 -2.64,-3.97 -1.01,-1.4 -2.01,-2.68 -2.98,-3.83 -1.08,-1.28 -2.15,-2.46 -3.21,-3.54l-0.33 -0.33c-1.13,-1.19 -2.33,-2.37 -3.61,-3.53 -1.36,-1.24 -2.58,-2.29 -3.64,-3.11 -1.24,-0.97 -2.56,-1.92 -3.94,-2.84l-0.02 0.03c-0.97,-0.65 -1.82,-1.2 -2.54,-1.65l-1.66 -0.94c-1.37,-0.77 -2.66,-1.4 -3.87,-1.89l-0.05 0c-1.49,-0.61 -2.97,-1.12 -4.44,-1.57 -1.71,-0.52 -3.69,-1.04 -5.82,-1.55 -2.57,-0.62 -4.6,-1.08 -6.65,-1.54 -9.94,-2.23 -19.08,-5.07 -27.48,-8.6l0.01 -0.02c-8.66,-3.63 -16.73,-8.01 -24.28,-13.17 -7.58,-5.19 -14.62,-11.16 -21.18,-17.96 -6.48,-6.72 -12.47,-14.23 -18.03,-22.59 -1.42,-2.15 -2.82,-4.26 -3.72,-5.56 -0.98,-1.42 -2.15,-3.03 -3.68,-4.99 -1.1,-1.42 -2.14,-2.67 -3.08,-3.67 -0.96,-1.02 -2.01,-2.02 -3.17,-2.98l-1.9 -1.57 -1.86 -1.35c-1.27,-0.89 -2.66,-1.8 -4.17,-2.71 -1.51,-0.91 -2.92,-1.7 -4.22,-2.35 -1.52,-0.77 -2.98,-1.44 -4.38,-2.02l-0.68 -0.32c-1.29,-0.55 -2.72,-1.1 -4.29,-1.65 -1.35,-0.47 -2.91,-0.94 -4.69,-1.42l0 -0.01c-1.58,-0.42 -3.15,-0.78 -4.7,-1.07 -1.26,-0.24 -2.57,-0.44 -3.95,-0.61l-0.95 -0.1c-1.24,-0.14 -0.48,-0.09 -1.08,-0.15l-1.24 -0.07c-1.48,-0.02 1.01,0.04 -1.41,0.04 -5.73,0 -11.56,1.06 -17.71,2.18l0 0.02 -0.36 0.05 0 0.02c-2.62,0.49 -5.05,0.94 -6.43,1.18 -1.92,0.33 -4.11,0.67 -6.82,1.04 -2.87,0.39 -5.52,0.7 -7.83,0.88 -2.77,0.22 -5.49,0.35 -8.1,0.35 -6.64,0 -13.38,-0.6 -20.16,-1.71 -6.87,-1.13 -13.65,-2.81 -20.28,-4.96 -6.74,-2.19 -13.26,-4.83 -19.48,-7.83 -6.36,-3.07 -12.4,-6.5 -18.07,-10.18l-0.57 -0.36 -0.57 -0.41c-0.19,-0.19 -0.42,-0.33 -0.64,-0.49 -3.06,-2.01 -6.09,-3.98 -9.53,-5.92 -3.01,-1.7 -5.94,-3.09 -8.78,-3.93 -1.71,-0.5 -3.27,-0.91 -4.67,-1.22l-0.01 0.05c-1.7,-0.37 -3.27,-0.67 -4.72,-0.88 -1.53,-0.22 -3.06,-0.39 -4.57,-0.5 -1.4,-0.1 -3,-0.15 -4.81,-0.15l-1.54 0c-3.32,0 -6.43,0.22 -9.36,0.65 -1.9,0.28 -3.46,0.56 -4.7,0.83 -1.39,0.31 -2.95,0.72 -4.67,1.23 -1.28,0.38 -2.63,0.89 -4.04,1.51 -1.6,0.71 -3,1.41 -4.27,2.11 -1.71,0.95 -3.39,1.97 -5.05,3.03l-9.08 5.99 -0.14 0c-6.74,4.36 -12.45,7.8 -17.77,10.44 -6.88,3.42 -13.16,5.61 -19.94,6.8 -6.88,1.2 -13.51,1.27 -20.98,0.41 -6.93,-0.79 -14.36,-2.35 -23.43,-4.5l-1.42 -0.34 -0.08 -0.04c-3.83,-0.9 -7.49,-1.74 -10.6,-2.25 -3.33,-0.54 -6.53,-0.83 -9.59,-0.65 -1.76,0.12 -3.42,0.28 -4.97,0.5 -1.47,0.2 -3.06,0.49 -4.79,0.85 -1.84,0.39 -3.44,0.78 -4.78,1.17 -1.55,0.45 -3.07,0.96 -4.56,1.51l-0.6 0.25 -0.01 -0.04c-1.31,0.48 -2.69,1.05 -4.16,1.7 -1.36,0.6 -2.84,1.34 -4.43,2.2 -1.67,0.9 -3.09,1.72 -4.25,2.46 -1.28,0.81 -2.64,1.76 -4.07,2.82 -1.1,0.82 -2.18,1.76 -3.26,2.79 -1.14,1.1 -2.23,2.28 -3.29,3.5 -1.14,1.32 -2.39,2.9 -3.72,4.63 -1.67,2.18 -2.88,3.81 -4.09,5.46 -5.61,7.63 -10.25,13.62 -14.88,18.57 -5.1,5.46 -10.12,9.63 -16.08,13.09 -5.99,3.48 -12.06,5.78 -19.24,7.48 -6.51,1.54 -14,2.59 -23.39,3.67l-0.02 0c-4.41,0.51 -8.69,1.01 -12.26,1.68 -3.35,0.63 -6.46,1.44 -9.17,2.62 -1.45,0.63 -2.93,1.34 -4.43,2.13 -1.38,0.73 -2.81,1.55 -4.28,2.46 -1.41,0.88 -2.74,1.78 -3.98,2.69 -1.32,0.97 -2.58,1.97 -3.78,3l-0.55 0.43c-1.13,0.94 -2.31,2 -3.54,3.17 -1.27,1.21 -2.37,2.34 -3.3,3.37 -0.98,1.1 -2.01,2.34 -3.07,3.71 -1,1.32 -1.97,2.68 -2.9,4.09 -0.77,1.17 -1.47,2.42 -2.11,3.74 -0.55,1.12 -1.18,2.65 -1.87,4.46 -0.93,2.44 -1.57,4.28 -2.06,5.83l-1.36 4.51 0 0.11 -0.55 1.85c-2.79,9.33 -5.99,17.79 -9.84,25.66 -3.91,7.99 -8.39,15.14 -13.66,21.7 -5.33,6.63 -11.33,12.55 -18.23,18.02 -6.77,5.37 -14.38,10.31 -23.05,15.08l-2.92 1.61 -0.04 0 -3.01 1.7c-2.05,1.18 -3.85,2.24 -5.19,3.11l0.02 0.02c-1.42,0.93 -2.73,1.85 -3.87,2.76 -1.19,0.94 -2.27,1.9 -3.22,2.86 -1.31,1.34 -2.42,2.56 -3.32,3.64 -0.8,0.96 -1.81,2.26 -3.01,3.93 -0.85,1.18 -1.73,2.5 -2.63,3.97l-0.02 -0.01c-0.74,1.21 -1.55,2.66 -2.42,4.33l-0.85 1.64 -0.16 0.17c-0.39,0.8 -0.81,1.71 -1.25,2.71 -0.62,1.41 -1.24,2.97 -1.84,4.66 -0.65,1.81 -1.15,3.36 -1.5,4.64l-0.01 -0c-0.34,1.23 -0.7,2.81 -1.08,4.75l-0.31 1.58c-0.15,0.96 -0.25,1.88 -0.31,2.77 -0.12,1.8 -0.16,3.41 -0.12,4.9 0.03,1.35 0.17,3.43 0.37,5.9 0.3,3.71 0.46,5.3 0.61,6.86 1,10.16 1.17,19.74 0.47,28.9 -0.71,9.3 -2.33,18.34 -4.92,27.24 -2.56,8.83 -6.04,17.34 -10.47,25.68 -4.43,8.32 -9.71,16.33 -15.89,24.18l-0.01 0.02c-3.03,3.86 -5.99,7.61 -7.77,10.27 -0.93,1.39 -1.79,2.77 -2.52,4.11 -0.64,1.18 -1.26,2.48 -1.82,3.92l-0.02 -0.01c-0.59,1.53 -1.13,3.08 -1.62,4.67 -0.48,1.57 -0.9,3.11 -1.24,4.63 -0.3,1.33 -0.58,2.88 -0.85,4.64 -0.24,1.63 -0.42,3.25 -0.54,4.85l-0.07 0.96 -0.11 0.58c-0.1,1.29 -0.16,2.58 -0.18,3.87 -0.02,1.48 0.02,3.14 0.12,4.98 0.09,1.61 0.24,3.19 0.45,4.74 0.21,1.57 0.5,3.2 0.85,4.9l0.26 1.26c0.24,0.98 0.54,1.95 0.87,2.9 0.42,1.2 1.06,2.73 1.85,4.49 0.95,2.11 1.82,3.86 2.64,5.42l4.87 8.9 0 0.18c4.45,8.51 8.09,16.88 10.93,25.23 3.2,9.43 5.44,18.98 6.7,28.8 1.27,9.82 1.53,19.6 0.81,29.51 -0.72,9.94 -2.41,20.05 -5.05,30.48l-0.04 0.16zm-28.03 7.55c0.91,-5.1 1.99,-9.38 3.09,-13.79l0.04 -0.16c2.28,-9.03 3.74,-17.67 4.35,-26.06 0.62,-8.42 0.41,-16.54 -0.61,-24.48 -1.02,-7.9 -2.88,-15.79 -5.6,-23.77 -2.75,-8.08 -6.32,-16.11 -10.73,-24.22 -1.17,-2.15 -2.32,-4.3 -3.46,-6.47 -1.33,-2.53 -2.49,-4.83 -3.34,-6.73 -0.89,-1.96 -1.77,-4.16 -2.65,-6.7 -0.84,-2.42 -1.53,-4.84 -2.04,-7.28 -0.07,-0.36 -0.3,-1.22 -0.3,-1.5 -0.33,-1.71 -0.61,-3.45 -0.85,-5.21 -0.31,-2.29 -0.53,-4.54 -0.65,-6.75 -0.12,-2.11 -0.16,-4.37 -0.12,-6.79 0.04,-2.28 0.16,-4.55 0.37,-6.81 0.17,-2.34 0.42,-4.6 0.74,-6.77 0.3,-2.03 0.72,-4.22 1.25,-6.55 0.5,-2.22 1.09,-4.4 1.75,-6.54 0.65,-2.11 1.4,-4.25 2.24,-6.42l0 -0.05c0.88,-2.26 1.97,-4.54 3.23,-6.84 1.17,-2.14 2.42,-4.17 3.72,-6.12 2.71,-4.05 5.75,-7.91 8.87,-11.88l0.01 -0.02c5.41,-6.86 9.89,-13.61 13.48,-20.36 3.58,-6.74 6.39,-13.61 8.46,-20.75 2.03,-7 3.32,-14.3 3.91,-22.02 0.6,-7.86 0.46,-15.98 -0.37,-24.47 -0.32,-3.27 -0.64,-6.46 -0.71,-7.36 -0.17,-2.14 -0.31,-4.53 -0.37,-7.41 -0.05,-2.55 -0.03,-4.94 0.12,-7.11 0.18,-2.63 0.5,-5.16 0.98,-7.57l0.77 -3.83 0.2 -0.2 0.68 -2.62c0.68,-2.46 1.35,-4.61 2,-6.45 0.75,-2.11 1.6,-4.23 2.55,-6.37 0.8,-1.82 1.79,-3.82 2.97,-6.02 0.96,-1.84 2.07,-3.8 3.34,-5.87l0 -0.05c1.12,-1.82 2.37,-3.68 3.74,-5.58 1.1,-1.53 2.51,-3.31 4.22,-5.33 1.6,-1.91 3.11,-3.59 4.53,-5.04 1.85,-1.89 3.73,-3.57 5.63,-5.08 1.95,-1.54 3.87,-2.91 5.78,-4.16l0.05 0c2.41,-1.57 4.5,-2.83 6.43,-3.94 1.62,-0.93 3.96,-2.21 6.33,-3.51l2.5 -1.37c6.4,-3.65 12.02,-7.36 16.98,-11.29 5.45,-4.32 10.13,-8.92 14.21,-14 4.14,-5.15 7.63,-10.7 10.65,-16.87 3.08,-6.29 5.77,-13.47 8.23,-21.74 0.52,-1.76 1.04,-3.5 2.11,-6.88 0.9,-2.83 1.74,-5.33 2.46,-7.23 0.75,-1.97 1.68,-4.13 2.88,-6.57 0.49,-1.01 1.01,-2.01 1.56,-2.99l0 -0.39 2.16 -3.28c1.25,-1.89 2.55,-3.72 3.91,-5.5l0.05 -0.05c1.3,-1.68 2.73,-3.41 4.32,-5.18 1.61,-1.8 3.18,-3.42 4.7,-4.88 1.51,-1.44 3.21,-2.94 5.1,-4.5 1.74,-1.49 3.5,-2.89 5.29,-4.2 1.86,-1.37 3.72,-2.63 5.59,-3.8 1.86,-1.16 3.82,-2.28 5.89,-3.37 1.95,-1.03 4,-2.01 6.13,-2.93 4.73,-2.07 9.64,-3.38 14.7,-4.33 4.84,-0.91 9.39,-1.44 14.07,-1.98l0.02 -0c8.33,-0.96 14.89,-1.87 20.38,-3.17 4.82,-1.14 8.72,-2.58 12.3,-4.66 3.61,-2.1 6.79,-4.77 10.15,-8.37 3.84,-4.11 7.94,-9.41 12.98,-16.25l0.05 -0.05c1.62,-2.19 3.22,-4.36 4.33,-5.81 1.48,-1.93 3.03,-3.87 4.72,-5.83 1.57,-1.82 3.19,-3.57 4.9,-5.21 1.78,-1.71 3.68,-3.35 5.77,-4.9 1.71,-1.27 3.57,-2.55 5.58,-3.83 2.12,-1.35 4.08,-2.51 5.86,-3.46 1.9,-1.02 3.95,-2.02 6.14,-3 1.97,-0.88 4.06,-1.72 6.28,-2.52l0.3 -0.15 0.15 -0.05 0.01 0.03c1.94,-0.71 3.91,-1.36 5.91,-1.94 2.37,-0.69 4.56,-1.25 6.59,-1.68 2.07,-0.44 4.3,-0.83 6.7,-1.15 2.32,-0.32 4.57,-0.55 6.78,-0.69l0.05 0c5.14,-0.32 10.19,0.12 15.28,0.95 4.92,0.8 9.29,1.84 13.81,2.9l1.5 0.35c7.64,1.79 13.79,3.07 19.01,3.67 4.99,0.57 9.31,0.55 13.64,-0.21 4.31,-0.75 8.41,-2.2 13,-4.48 5.3,-2.63 11.15,-6.25 18.36,-11 2.07,-1.36 4.13,-2.69 6.21,-4.03 2.25,-1.43 4.4,-2.75 6.36,-3.84 2.22,-1.23 4.36,-2.33 6.38,-3.22 2.22,-0.98 4.58,-1.86 7.15,-2.62 1.94,-0.57 4.07,-1.12 6.38,-1.63 2.46,-0.54 4.63,-0.96 6.51,-1.23l0.21 -0.03 0 -0.93 27.28 0.02 0 0.9 0.23 0.03c2.34,0.34 4.51,0.74 6.53,1.18l0 0.05c2.31,0.51 4.44,1.06 6.39,1.63 5.05,1.5 9.66,3.64 14.11,6.14l1.06 0.61 0.11 -0.18 11.16 7.32c5.05,3.31 10.29,6.31 15.65,8.9 5.27,2.55 10.68,4.75 16.16,6.52 5.43,1.76 10.97,3.13 16.56,4.06 5.19,0.86 10.55,1.31 16.03,1.31 2.09,0 4.12,-0.09 6.09,-0.25 2.44,-0.19 4.54,-0.42 6.42,-0.68 1.58,-0.21 3.65,-0.55 5.92,-0.94 2.81,-0.48 4.54,-0.8 6.03,-1.08l0.32 -0.04 -0 -0.02 0.14 -0.01c7.61,-1.39 14.81,-2.7 22.33,-2.7 1.16,0 -0.55,0.02 1.81,0.06l1.55 0.03 2.1 0.18 0.29 0 0.89 0.1c2.2,0.25 4.43,0.58 6.71,1.01 2.23,0.42 4.41,0.92 6.55,1.48l0.05 0c2.01,0.54 4.18,1.21 6.5,2.02 1.99,0.69 4.09,1.52 6.28,2.47 2.2,0.91 4.26,1.85 6.19,2.83 2.15,1.09 4.13,2.17 5.92,3.25 1.89,1.14 3.78,2.38 5.68,3.72 1.68,1.19 3.47,2.56 5.34,4.1l10 8.25 -0.9 1.07 1.1 1.38c1.33,1.71 2.85,3.84 4.48,6.2 1.72,2.49 2.87,4.23 4.02,5.96 4.71,7.08 9.73,13.39 15.12,18.97 5.3,5.5 11,10.33 17.16,14.54 6.11,4.18 12.66,7.73 19.7,10.68l0.05 0c7.31,3.07 14.98,5.48 23.05,7.29 2.64,0.59 5.23,1.17 7.15,1.64 2.36,0.57 4.76,1.21 7.23,1.96 2.33,0.71 4.58,1.49 6.75,2.37l-0.01 0.02c1.22,0.5 2.41,1.02 3.56,1.57l0.26 0 3.03 1.71c2.46,1.39 4.39,2.55 5.81,3.5l0 0.05c1.82,1.22 3.65,2.54 5.48,3.96 1.92,1.5 3.63,2.94 5.15,4.32 1.61,1.47 3.25,3.08 4.92,4.84 1.63,1.66 3.15,3.32 4.54,4.98 1.51,1.79 2.91,3.57 4.19,5.34l0.51 0.71 0.79 -0.39 5.82 11.24c1.21,2.33 2.21,4.64 3.05,6.92 0.8,2.16 1.5,4.46 2.13,6.84 0.61,2.29 1.17,4.79 1.71,7.4 0.5,2.43 0.94,4.76 1.37,7.12 1.57,8.43 3.7,16.24 6.45,23.54 2.72,7.2 6.01,13.82 9.95,19.98 3.89,6.09 8.54,11.87 14,17.45l0 0.05c5.1,5.22 10.98,10.21 17.68,15.08l1.3 0.94c3.76,2.71 7.43,5.35 11.06,8.38 3.95,3.29 7.57,6.79 10.65,10.81 1.41,1.84 2.74,3.7 3.96,5.56l0 0.05c1.31,1.99 2.48,3.91 3.49,5.74 1.08,1.95 2.1,3.97 3.07,6.07 0.92,2.01 1.79,4.1 2.59,6.26 0.84,2.13 1.59,4.26 2.26,6.39 0.66,2.12 1.24,4.29 1.75,6.51 0.53,2.33 0.95,4.52 1.26,6.58l0 0.05c0.33,2.2 0.58,4.45 0.76,6.76 0.4,5.13 0.05,10.18 -0.7,15.26l-0.2 1.32 0.29 0.06 -2.79 12.69c-1.89,8.6 -3.01,16.62 -3.32,24.19 -0.31,7.58 0.14,14.94 1.36,22.23 1.22,7.23 3.21,14.34 5.99,21.45 2.84,7.24 6.48,14.47 10.96,21.82l0 0.05 0.11 0.18 0.02 -0.01c2.47,4.06 4.88,8.02 7.06,12.21 2.33,4.5 4.3,9.12 5.61,14.12l3.27 12.54 -0.91 0.23 0.08 0.7c0.22,2.13 0.37,4.4 0.45,6.8 0.06,2.11 0.06,4.2 -0.02,6.25l0.03 0 0 0.15 -0.05 0.35c-0.07,2.36 -0.22,4.59 -0.44,6.69 -0.17,1.62 -0.42,3.4 -0.74,5.32l0 0.33 -0.2 1.13c-0.41,2.31 -0.89,4.54 -1.44,6.67 -0.48,1.89 -1.13,4.04 -1.94,6.43 -3.15,9.37 -8.52,17.01 -14.22,25.05l0.03 0.02c-0.11,0.16 -0.29,0.35 -0.41,0.53 -4.99,7.01 -9.13,13.96 -12.46,20.98 -3.3,6.97 -5.78,13.94 -7.48,21.03 -1.71,7.17 -2.67,14.51 -2.89,22.15 -0.22,7.64 0.32,15.72 1.58,24.36 0.21,1.47 0.43,2.95 0.99,7.3 0.36,2.82 0.65,5.38 0.8,7.42 0.15,2.17 0.22,4.52 0.16,7.14 -0.06,2.69 -0.24,5.23 -0.59,7.58 -0.3,2.02 -0.73,4.28 -1.28,6.77 -0.49,2.21 -1.05,4.35 -1.69,6.44 -0.75,2.45 -1.47,4.56 -2.17,6.32l-0.02 -0.01c-0.89,2.24 -1.81,4.36 -2.76,6.37 -1.03,2.26 -2.04,4.29 -3.02,6.08 -1.01,1.83 -2.17,3.76 -3.48,5.77l-7.11 10.91 -0.8 -0.53 -0.34 0.39c-6.7,7.57 -14.81,12.55 -23.43,17.84l-0.03 0.02c-7.29,4.47 -13.82,9.25 -19.66,14.44 -5.76,5.12 -10.78,10.58 -15.11,16.45 -4.38,5.93 -8.12,12.31 -11.29,19.23 -3.23,7.06 -5.9,14.72 -8.08,23.08l-0.04 0.16c-1.24,4.71 -2.44,9.3 -3.86,13.49 -1.66,4.9 -3.66,9.58 -6.35,13.96l-0.02 -0.01c-1.35,2.2 -2.62,4.12 -3.79,5.76 -1.06,1.48 -2.44,3.24 -4.17,5.29l0.03 0.02c-1.36,1.62 -2.87,3.28 -4.55,4.99 -1.73,1.77 -3.38,3.33 -4.93,4.7 -1.48,1.35 -3.21,2.81 -5.21,4.38 -1.86,1.47 -3.67,2.79 -5.4,3.96 -1.87,1.26 -3.77,2.43 -5.69,3.52 -2.02,1.14 -4.05,2.2 -6.09,3.17l-2.65 1.26 -0.19 0c-1.41,0.58 -2.83,1.11 -4.26,1.58 -2.05,0.68 -4.35,1.29 -6.82,1.85 -2.31,0.54 -4.74,0.99 -7.26,1.41 -2.99,0.5 -5.2,0.83 -7.41,1.16 -8.62,1.29 -16.51,3.13 -23.79,5.58 -7.16,2.41 -13.88,5.48 -20.27,9.26 -6.32,3.73 -12.25,8.15 -17.89,13.3 -5.75,5.25 -11.19,11.24 -16.43,18.01l-0.14 0.19c-3.01,3.9 -5.94,7.69 -8.85,10.96 -3.38,3.8 -7.04,7.3 -11.31,10.33 -1.67,1.19 -3.56,2.43 -5.66,3.7 -2.3,1.39 -4.28,2.51 -5.94,3.36 -1.9,0.97 -3.95,1.9 -6.14,2.81 -2.2,0.91 -4.34,1.71 -6.41,2.39 -1.88,0.66 -4.03,1.33 -6.46,2 -2.41,0.66 -4.6,1.18 -6.54,1.55 -2.27,0.44 -4.51,0.79 -6.74,1.05 -2.01,0.24 -4.26,0.41 -6.74,0.51 -5.15,0.22 -10.17,-0.31 -15.2,-1.24l-1.42 -0.27 -0.05 0.21 -14.45 -3.71c-7.53,-1.84 -14.85,-3.05 -22.06,-3.61 -7.69,-0.59 -15.06,-0.43 -22.25,0.52 -7.29,0.96 -14.49,2.7 -21.72,5.24 -7.23,2.54 -14.6,5.94 -22.23,10.23 -1.9,1.07 -3.8,2.14 -6.32,3.49 -2.23,1.2 -4.48,2.35 -6.8,3.43l0.01 0.02c-1.99,0.93 -4.18,1.85 -6.68,2.75 -2.31,0.84 -4.71,1.56 -7.23,2.11 -1.74,0.38 -3.34,0.7 -4.81,0.93 -1.76,0.29 -3.44,0.52 -5.01,0.69 -1.46,0.16 -3.08,0.29 -4.86,0.38 -2.02,0.11 -3.67,0.16 -4.93,0.16l0 -0.05 -3.65 -0.03c-1.25,-0.06 -2.44,-0.14 -3.7,-0.24 -2.23,-0.14 -4.48,-0.37 -6.76,-0.68 -2.38,-0.33 -4.61,-0.71 -6.67,-1.15 -2.13,-0.46 -4.32,-1.02 -6.57,-1.68 -1.37,-0.4 -2.74,-0.84 -4.09,-1.31l-0.09 0 -2.28 -0.85c-9.42,-3.53 -16.96,-9.31 -24.91,-15.4 -0.29,-0.22 -0.74,-0.52 -0.98,-0.76 -8.67,-6.6 -14.64,-10.39 -19.86,-12.91 -5.23,-2.53 -10.25,-4 -16.7,-5.9l-4.81 -1.41c-1.13,-0.34 -2.76,-0.85 -5.32,-1.68l-0.1 0c-1.69,-0.56 -3.35,-1.03 -4.95,-1.41 -1.72,-0.41 -3.45,-0.74 -5.18,-1 -1.83,-0.27 -3.64,-0.47 -5.42,-0.6 -1.69,-0.12 -3.57,-0.18 -5.65,-0.18 -2.08,0 -3.62,0.03 -4.74,0.08 -1,0.05 -2.71,0.18 -4.85,0.35 -2.13,0.18 -3.44,0.3 -4.29,0.39 -1.85,0.21 -3.75,0.48 -5.6,0.64l-0 -0.02c-5.92,0.65 -11.53,1.26 -17.22,1.26 -0.42,0 -1.42,-0.03 -3.05,-0.1 -1.56,-0.06 -2.57,-0.11 -3,-0.15l-2.9 -0.35c-1.19,-0.15 -2.09,-0.29 -2.71,-0.41 -2.21,-0.41 -4.44,-0.92 -6.71,-1.51 -2.11,-0.55 -4.26,-1.2 -6.45,-1.96 -2.2,-0.76 -4.26,-1.56 -6.2,-2.41 -2.31,-1.01 -4.4,-2 -6.26,-2.97 -2.11,-1.06 -4.07,-2.13 -5.88,-3.22 -2.06,-1.24 -3.97,-2.48 -5.73,-3.71 -1.67,-1.18 -3.47,-2.55 -5.38,-4.12 -1.85,-1.52 -3.54,-3.01 -5.09,-4.49 -1.84,-1.75 -3.54,-3.63 -5.14,-5.6 -1.51,-1.86 -2.91,-3.78 -4.23,-5.76 -1.58,-2.37 -2.89,-4.48 -4.06,-6.46l-3.55 -6.27c-4.24,-7.48 -8.14,-13.61 -12.1,-18.67 -3.73,-4.77 -7.6,-8.7 -11.98,-12.09 -4.31,-3.32 -9.1,-6.06 -14.78,-8.5 -6.08,-2.62 -13,-4.86 -21.21,-7.05 -2.91,-0.77 -5.75,-1.53 -7.14,-1.92 -2.18,-0.62 -4.49,-1.34 -7.1,-2.25 -2.19,-0.76 -4.39,-1.63 -6.61,-2.65 -1.14,-0.52 -2.24,-1.06 -3.31,-1.62l-0.26 0 -3.16 -1.96c-2.15,-1.33 -4.04,-2.58 -5.64,-3.75 -1.76,-1.28 -3.55,-2.68 -5.36,-4.22 -1.68,-1.42 -3.35,-2.95 -5.02,-4.59 -1.57,-1.54 -3.12,-3.19 -4.65,-4.94 -1.36,-1.5 -2.8,-3.24 -4.34,-5.21 -1.5,-1.92 -2.81,-3.74 -3.96,-5.46 -1.09,-1.64 -2.27,-3.58 -3.52,-5.81 -1.15,-2.05 -2.19,-4.05 -3.11,-6.01l-1.26 -2.68 0 -0.21c-3.29,-8.15 -4.53,-16.58 -5.83,-25.41l-0.03 -0.31c-1.22,-8.39 -2.92,-16 -5.21,-23 -2.22,-6.8 -5.02,-13.06 -8.5,-18.95 -3.48,-5.89 -7.61,-11.37 -12.48,-16.61 -5.01,-5.39 -10.85,-10.57 -17.61,-15.72l-0.17 -0.13c-3.9,-2.99 -7.69,-5.89 -11.01,-8.82 -3.77,-3.32 -7.27,-6.92 -10.33,-11.17l-0.02 0.02c-1.4,-1.94 -2.67,-3.83 -3.79,-5.65 -1.06,-1.72 -2.17,-3.7 -3.32,-5.94 -0.95,-1.84 -1.9,-3.88 -2.85,-6.13 -0.96,-2.27 -1.78,-4.4 -2.46,-6.38 -0.67,-1.86 -1.34,-4.02 -2.02,-6.48 -0.66,-2.39 -1.19,-4.57 -1.57,-6.53 -0.44,-2.25 -0.8,-4.51 -1.07,-6.78 -0.24,-2 -0.42,-4.24 -0.54,-6.72 -0.24,-5.08 0.27,-10.14 1.19,-15.24z"
        />
      </g>
    </svg>
  );
}
