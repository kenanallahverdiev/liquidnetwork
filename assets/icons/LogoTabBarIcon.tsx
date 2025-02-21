import * as React from "react";
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgComponent = ({ size }: { size?: number }) => (
  <Svg
    width={size || 168}
    height={size || 168}
    fill="none"
    viewBox="0 0 168 168"
  >
    <Rect width={167} height={167} x={0.5} y={0.5} fill="#fff" rx={83.5} />
    <Rect width={167} height={167} x={0.5} y={0.5} stroke="#ACACAC" rx={83.5} />
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M85.806 36c-4.765 5.496-24.248 28.614-31.627 47.394a40.59 40.59 0 0 0-1.754 5.638c-1.355 5.835-.054 11.365 3.568 15.171 11.964 12.569 43.998-8.346 55.814-22.8.092-.112 3.143-4.118 3.143-4.118S104.92 58.022 85.806 36Z"
      />
      <Path
        fill="url(#c)"
        d="M118.633 85.083c-.001 0-.001 0 0 0-15.488 21.017-47.336 39.642-64.555 29.72-3.247-1.912-5.288-5.622-5.958-10.79l-.096.226c-7.623 25.738 28.76 39.744 61.5 3.752 0 0-4.909 16.122-25.66 24.009 12.843.019 42.873-4.941 34.769-46.917Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={54.756}
        x2={112.842}
        y1={51.108}
        y2={118.059}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.006} stopColor="#00C9FF" />
        <Stop offset={0.994} stopColor="#0019AA" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={55.056}
        x2={94.576}
        y1={63.333}
        y2={115.885}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.006} stopColor="#0097D4" />
        <Stop offset={0.989} stopColor="#000FAA" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M47 36h73v96H47z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
