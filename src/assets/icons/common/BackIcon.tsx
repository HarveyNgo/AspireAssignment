import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 50 50"
    {...props}>
    <Path
      d="M24 14.5 13.5 25l10.7 10.7c5.9 5.9 11.1 10.4 11.5 10 .4-.4-3.8-5.3-9.2-10.7l-10-10 9.8-9.8C31.6 9.9 36 5.1 36 4.7c0-1.8-2.2 0-12 9.8z"
      style={{
        fill: props.color,
      }}
    />
  </Svg>
);

export default SvgComponent;
