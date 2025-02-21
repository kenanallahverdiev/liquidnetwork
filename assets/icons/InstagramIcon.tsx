import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgComponent = () => (
  <Svg width={52} height={52} fill="none" viewBox="0 0 52 52">
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M26 52c14.36 0 26-11.64 26-26S40.36 0 26 0 0 11.64 0 26s11.64 26 26 26Z"
      />
      <Path
        fill="#fff"
        d="M31.524 11.556H20.488c-4.922 0-8.92 3.998-8.92 8.92v11.036c0 4.923 3.998 8.92 8.92 8.92h11.036c4.922 0 8.92-3.997 8.92-8.92V20.476c0-4.922-3.998-8.92-8.92-8.92Zm5.697 19.968a5.713 5.713 0 0 1-5.709 5.708H20.477a5.713 5.713 0 0 1-5.709-5.708V20.488a5.713 5.713 0 0 1 5.709-5.708h11.035a5.713 5.713 0 0 1 5.709 5.708v11.036Z"
      />
      <Path
        fill="#fff"
        d="M26 18.616c-4.067 0-7.384 3.317-7.384 7.384 0 4.068 3.317 7.384 7.384 7.384 4.068 0 7.384-3.316 7.384-7.384 0-4.067-3.316-7.384-7.384-7.384Zm0 11.868A4.488 4.488 0 0 1 21.517 26 4.488 4.488 0 0 1 26 21.517 4.488 4.488 0 0 1 30.484 26 4.488 4.488 0 0 1 26 30.484ZM33.947 19.425a1.248 1.248 0 1 0-.4-2.463 1.248 1.248 0 0 0 .4 2.463Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={6.203}
        x2={43.152}
        y1={45.797}
        y2={8.848}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEE411" />
        <Stop offset={0.052} stopColor="#FEDB16" />
        <Stop offset={0.138} stopColor="#FEC125" />
        <Stop offset={0.248} stopColor="#FE983D" />
        <Stop offset={0.376} stopColor="#FE5F5E" />
        <Stop offset={0.5} stopColor="#FE2181" />
        <Stop offset={1} stopColor="#9000DC" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h52v52H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
