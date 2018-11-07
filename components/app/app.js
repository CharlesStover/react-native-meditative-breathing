import React from 'react';
import { Animated, Dimensions, Easing, Text, View } from 'react-native';
import styles from './app-styles';
import createStyleSheet from './constants/create-style-sheet';

const animationTimingConfig = {
  delay: 0,
  duration: 19000,
  easing: Easing.linear,
  toValue: 1
};

const windowDimensions = Dimensions.get('window');

export default class App extends React.Component {

  state = {
    ...windowDimensions,
    exhaleOpacityAnimation: new Animated.Value(0),
    holdOpacityAnimation: new Animated.Value(0),
    inhaleOpacityAnimation: new Animated.Value(0),
    lungsSizeAnimation: new Animated.Value(0),
    styles: createStyleSheet(windowDimensions.width, windowDimensions.height)
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleDimensionsChange);
    Animated.loop(Animated.timing(this.state.exhaleOpacityAnimation, animationTimingConfig)).start();
    Animated.loop(Animated.timing(this.state.holdOpacityAnimation,   animationTimingConfig)).start();
    Animated.loop(Animated.timing(this.state.inhaleOpacityAnimation, animationTimingConfig)).start();
    Animated.loop(Animated.timing(this.state.lungsSizeAnimation,     animationTimingConfig)).start();
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleDimensionsChange);
  }

  get exhaleAnimationStyle() {
    return {
      opacity: this.state.inhaleOpacityAnimation.interpolate({
        inputRange:  [ 0, 0.57, 0.58, 0.79, 1 ],
        outputRange: [ 0, 0,    1,    1,    0 ]
      })
    };
  }

  handleDimensionsChange = window => {
    if (
      this.state.height !== window.height ||
      this.state.width !== window.width
    ) {
      this.setState({
        ...window,
        styles: createStyleSheet(window.width, window.height)
      });
    }
  };

  get holdAnimationStyle() {
    return {
      opacity: this.state.inhaleOpacityAnimation.interpolate({
        inputRange:  [ 0, 0.20, 0.21, 0.39, 0.58, 1 ],
        outputRange: [ 0, 0,    1,    1,    0,    0 ]
      })
    };
  }

  get inhaleAnimationStyle() {
    return {
      opacity: this.state.inhaleOpacityAnimation.interpolate({
        inputRange:  [ 0, 0.105, 0.21, 1 ],
        outputRange: [ 1, 1,     0,    0 ]
      })
    };
  }

  get lungsAnimationStyle() {
    const size = this.state.lungsSizeAnimation.interpolate({
      inputRange:  [   0,     0.21,   0.58,   0.95,   1   ],
      outputRange: [ '40%', '5%',  '5%',  '40%',  '40%' ]
    });
    return {
      paddingBottom: size,
      paddingLeft: size,
      paddingRight: size,
      paddingTop: size
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={this.state.styles.lungs}>
          <Animated.View style={this.lungsAnimationStyle}>
            <View style={this.state.styles.lungs2}>
              <View style={styles.textView}>
                <Animated.View style={this.inhaleAnimationStyle}>
                  <Text style={this.state.styles.text}>Inhale</Text>
                </Animated.View>
              </View>
              <View style={styles.textView}>
                <Animated.View style={this.holdAnimationStyle}>
                  <Text style={this.state.styles.text}> Hold </Text>
                </Animated.View>
              </View>
              <View style={styles.textView}>
                <Animated.View style={this.exhaleAnimationStyle}>
                  <Text style={this.state.styles.text}>Exhale</Text>
                </Animated.View>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}
