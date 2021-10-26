import React from "react";
import Svg, {
   Defs,
   ClipPath,
   Path,
   G,
   Mask,
   Image,
   LinearGradient,
   Stop,
   Rect,
   Circle,
   Ellipse
} from "react-native-svg";
import { Dimensions, Animated } from "react-native";

const { height, width } = Dimensions.get("screen");

export function TopSvg(props) {
   return (
      <Svg
         width={146.082}
         height={166.946}
         viewBox="0 0 146.082 166.946"
         {...props}
      >
         <Path
            data-name="Path 28"
            d="M1.848 165.097s150.593-42.062 142.409-163.5"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
            opacity={0.3}
         />
      </Svg>
   );
}

export function DNA(props) {
   return (
      <Svg width={194} height={365} viewBox="0 0 194 365" {...props}>
         <Defs>
            <ClipPath id="prefix__a">
               <Path
                  data-name="Rectangle 6"
                  transform="translate(-465.176 513.63)"
                  fill="#fff"
                  stroke="#707070"
                  d="M0 0h194v365H0z"
               />
            </ClipPath>
         </Defs>
         <G
            data-name="Mask Group 1"
            transform="translate(465.176 -513.63)"
            clipPath="url(#prefix__a)"
         >
            <G
               data-name="Group 3"
               opacity={0.4}
               fill="none"
               stroke="#fff"
               strokeMiterlimit={10}
               strokeWidth={8}
            >
               <Path
                  data-name="Path 1"
                  d="M-310.875 259.034c.83 84.343-120.551 85.556-119.721 169.9s122.213 83.13 123.044 167.474-120.551 85.559-119.72 169.906 122.212 83.135 123.043 167.481"
               />
               <Path
                  data-name="Path 2"
                  d="M-425.61 935.005c-.831-84.344 120.551-85.556 119.721-169.9s-122.212-83.13-123.045-167.473 120.551-85.559 119.72-169.906-122.212-83.134-123.043-167.481"
               />
            </G>
         </G>
      </Svg>
   );
}

export function ClippedImage() {
   return (
      <Svg height={height} width={width}>
         <Defs>
            <ClipPath id="clip">
               <Circle cx="50%" cy="50%" r="40%" />
            </ClipPath>
         </Defs>

         <Image
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={require("./assets/background.png")}
            clipPath="url(#clip)"
         />
      </Svg>
   );
}

export class MaskedImage extends React.Component {
   render() {
      const { passedValue, passedValue2 } = this.props;
      return (
         <Svg height={height} width={width}>
            <Defs>
               <LinearGradient id="grad" x1="0" y1="1" x2="0" y2="0">
                  <Stop offset={passedValue} stopColor="white" stopOpacity="1" />
                  <Stop
                     offset={passedValue2}
                     stopColor="black"
                     stopOpacity={"1"}
                  />
                  <Stop offset={"1"} stopColor="black" stopOpacity="1" />
               </LinearGradient>

               <Mask id="mask">
                  <Rect
                     x="0"
                     y="0"
                     width={width}
                     height={height}
                     fill="url(#grad)"
                  />
               </Mask>
            </Defs>

            <Image
               x="0%"
               y="0%"
               width={width}
               height={height}
               preserveAspectRatio="xMidYMid slice"
               href={require("./assets/background.png")}
               mask="url(#mask)"
            />
         </Svg>
      );
   }
}
