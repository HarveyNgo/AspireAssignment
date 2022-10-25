import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
type SlideViewWithPanResponderProps = {
  children: any;
};
const SlideViewWithPanResponder: React.FC<SlideViewWithPanResponderProps> = ({
  children,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (event, gestureState) => {
        Animated.event([null, {dy: pan.y}])(event, gestureState);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {translateX: pan.x},
            {
              translateY: pan.y.interpolate({
                inputRange: [-50, 100],
                outputRange: [-50, 100],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
        {...panResponder.panHandlers}>
        {/* <View style={styles.box} /> */}
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  box: {
    marginTop: 100,
    height: '80%',
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default SlideViewWithPanResponder;
