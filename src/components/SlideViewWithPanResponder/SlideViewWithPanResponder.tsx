import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Text,
  View,
  PanResponder,
  StyleSheet,
  Dimensions,
} from 'react-native';

const SlideViewWithPanResponder = () => {
  //   const pan = useRef(new Animated.ValueXY()).current;
  //   const panResponder = useRef(
  //     PanResponder.create({
  //       onMoveShouldSetPanResponder: () => true,
  //       onPanResponderMove: Animated.event([null, {dy: pan.y}]),
  //       //   onPanResponderGrant: () => {
  //       //     pan.setOffset({
  //       //       x: pan.x._value,
  //       //       y: pan.y._value,
  //       //     });
  //       //   },
  //       onPanResponderRelease: () => {
  //         Animated.spring(pan, {
  //           toValue: {x: pan.x._value, y: pan.y._value},
  //         }).start();
  //       },
  //     }),
  //   ).current;

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
        // if (gestureState.moveY >= 100 && gestureState.moveY <= 200) {
        Animated.event([null, {dy: pan.y}])(event, gestureState);
        // }
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
                inputRange: [-100, 100],
                outputRange: [-100, 100],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
  },
  box: {
    marginTop: 100,
    height: '80%',
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default SlideViewWithPanResponder;
