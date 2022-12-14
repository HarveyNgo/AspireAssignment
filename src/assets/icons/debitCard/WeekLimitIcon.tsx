import * as React from 'react';
import Svg, {SvgProps, Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16.001} height={16} {...props}>
    <Defs></Defs>
    <Path
      style={{
        fill: 'transparent',
      }}
      d="M0 0h16v16H0z"
    />
    <Path
      className="b"
      d="M4.603 5.169a.2.2 0 0 0-.048-.141L3.009 3.27a.2.2 0 0 0-.275-.018A8.041 8.041 0 0 0 .982 5.44a.2.2 0 0 0 .078.265l2.054 1.123a.195.195 0 0 0 .265-.078 5.316 5.316 0 0 1 1.159-1.447.194.194 0 0 0 .065-.134ZM5.268 4.528a.195.195 0 0 0 .264.081 5.254 5.254 0 0 1 1.761-.566.2.2 0 0 0 .167-.22l-.315-2.32a.2.2 0 0 0-.22-.167 7.975 7.975 0 0 0-2.673.86.2.2 0 0 0-.081.264ZM2.78 7.639.52 7.026a.2.2 0 0 0-.239.137 8.059 8.059 0 0 0-.28 2.107c0 .122 0 .245.009.375a.2.2 0 0 0 .195.186h.009l2.339-.108a.2.2 0 0 0 .186-.2c0-.088-.006-.169-.006-.249a5.326 5.326 0 0 1 .185-1.394.2.2 0 0 0-.138-.241ZM11.476 2.057a7.979 7.979 0 0 0-2.7-.756.2.2 0 0 0-.213.175l-.226 2.33a.2.2 0 0 0 .175.213 5.256 5.256 0 0 1 1.781.5.2.2 0 0 0 .26-.091l1.012-2.11a.2.2 0 0 0-.089-.261ZM14.889 5.32a.2.2 0 0 0-.022-.148 8.045 8.045 0 0 0-1.835-2.119.195.195 0 0 0-.274.028l-1.477 1.816a.2.2 0 0 0 .028.274 5.318 5.318 0 0 1 1.214 1.4.2.2 0 0 0 .268.067l2.01-1.2a.2.2 0 0 0 .088-.118ZM15.634 6.866a.2.2 0 0 0-.245-.128l-2.234.7a.2.2 0 0 0-.128.244 5.31 5.31 0 0 1 .242 1.589c0 .08 0 .161-.006.249a.2.2 0 0 0 .186.2l2.339.108h.009a.2.2 0 0 0 .195-.186c.006-.13.009-.253.009-.375a8.038 8.038 0 0 0-.367-2.401ZM9.029 10.777l-.099-.017-2.8-2.391a.2.2 0 0 0-.32.22l1.14 3.492a1.863 1.863 0 0 0-.043.184 1.83 1.83 0 1 0 2.121-1.484Z"
      style={{
        fill: props.color,
      }}
    />
  </Svg>
);

export default SvgComponent;
