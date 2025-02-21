import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgComponent = ({ size }: { size?: number }) => (
  <Svg width={size || 73} height={size || 96} fill="none" viewBox="0 0 73 96">
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M38.806 0C34.04 5.496 14.558 28.614 7.179 47.394a40.6 40.6 0 0 0-1.754 5.638c-1.355 5.835-.054 11.365 3.568 15.171 11.964 12.569 43.998-8.346 55.814-22.8.092-.111 3.143-4.118 3.143-4.118S57.92 22.022 38.806 0Z"
      />
      <Path
        fill="url(#c)"
        d="M71.633 49.083C56.145 70.1 24.297 88.725 7.078 78.803c-3.247-1.912-5.288-5.621-5.958-10.79-.033.075-.065.15-.096.226-7.623 25.738 28.76 39.744 61.5 3.751 0 0-4.91 16.123-25.66 24.01 12.843.02 42.873-4.94 34.769-46.917Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={7.756}
        x2={65.842}
        y1={15.108}
        y2={82.059}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.006} stopColor="#00C9FF" />
        <Stop offset={0.994} stopColor="#0019AA" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={8.056}
        x2={47.576}
        y1={27.333}
        y2={79.885}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.006} stopColor="#0097D4" />
        <Stop offset={0.989} stopColor="#000FAA" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h73v96H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
