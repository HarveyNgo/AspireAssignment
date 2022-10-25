import * as React from 'react';
import Svg, {SvgProps, Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={18.075} {...props}>
    <Defs></Defs>
    <Path
      className="a"
      d="M23.5 8H.5a.474.474 0 0 0-.5.5v7.053a2.485 2.485 0 0 0 2.5 2.519h19a2.485 2.485 0 0 0 2.5-2.519V8.5a.474.474 0 0 0-.5-.5Zm-20 4.03h4a.504.504 0 0 1 0 1.008h-4a.504.504 0 0 1 0-1.008Zm7 3.023h-7a.504.504 0 0 1 0-1.008h7a.504.504 0 0 1 0 1.008Zm8.5 0a1.68 1.68 0 0 1-1-.3 1.68 1.68 0 0 1-1 .3 2.015 2.015 0 0 1 0-4.03 1.68 1.68 0 0 1 1 .3 1.68 1.68 0 0 1 1-.3 2.015 2.015 0 0 1 0 4.03ZM21.5 0h-19C1.1 0 0 1.378 0 3.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V3.132C24 1.378 22.9 0 21.5 0Z"
      style={{
        fill: props.color,
      }}
    />
  </Svg>
);

export default SvgComponent;
