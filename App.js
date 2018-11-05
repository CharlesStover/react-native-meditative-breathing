/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, WebView} from 'react-native';

const source = {
  html: `
<!DOCTYPE html>
<html>
  <head>
    <title>Meditative Breathing</title>
    <link rel="manifest" href="assets/manifest.json" />
    <link rel="shortcut icon" type="image/x-icon" href="assets/favicon.ico" />
    <style type="text/css">

@keyframes inhale {
  0%   { opacity: 1; }
  10%  { opacity: 1; }
  20%  { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes hold {
  0%   { opacity: 0; }
  19%  { opacity: 0; }
  20%  { opacity: 1; }
  38%  { opacity: 1; }
  55%  { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes exhale {
  0%   { opacity: 0; }
  54%  { opacity: 0; }
  55%  { opacity: 1; }
  75%  { opacity: 1; }
  95%  { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes lungs {
  0%  { padding: 0.4em; }
  21% { padding: 0.75rem; }
  58% { padding: 0.75rem; }
  95% { padding: 0.4em; }
}

body {
  align-items: center;
  background-color: #202020;
  color: #F0F0F0;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

body > div {
  animation-delay: 0s;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-name: lungs;
  background-color: #455A64;
  border: 0.0125em solid #263238;
  border-radius: 0.5em;
  box-sizing: border-box;
  color: #202020;
  font-size: 90vh;
  height: 1em;
  line-height: 1em;
  margin: 0 auto;
  padding: 0.4em;
  position: relative;
  width: 1em;
}

  body > div > div {
    background-color: #607D8B;
    border-radius: 0.5em;
    height: 100%;
    margin: auto;
    text-align: center;
    user-select: none;
    width: 100%;
  }

    body > div > div + span {
      animation-name: inhale;
      opacity: 1;
    }

    body > div > div + span + span {
      animation-name: hold;
      opacity: 0;
    }

    body > div > div + span + span + span {
      animation-name: exhale;
      opacity: 0;
    }

  body > div > span {
    animation-delay: 0s;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.05em;
    font-weight: bold;
    height: 19.5em;
    left: 0;
    line-height: 19.5em;
    position: absolute;
    text-align: center;
    top: 0;
    width: 19.5em;
  }

button {
  background-color: #455A64;
  border-color: #263238;
  border-radius: 1em 1em 0 0;
  border-style: solid;
  border-width: 0.25em 0.75em 0 0.75em;
  bottom: -2.5em;
  line-height: 1.5em;
  padding: 0.25em 0.75em 0 0.75em;
  position: absolute;
  transition-duration: 0.5s;
  transition-property: bottom;
  transition-timing-function: ease;
}

html {
  font-size: 16px;
  height: 100%;
}

@media (max-width: 100vh) {
  body > div {
    font-size: 90vw;
  }
}

</style>
    <meta name="description" content="Use meditative breathing to relax with this simple app." />
    <meta name="keywords" content="deep breathing app, deep breathing exercise, meditative breathing app, meditative breathing application, meditative breathing exercise, practice deep breathing, practice meditative breathing" />
  </head>
  <body>
    <div>
      <div></div>
      <span>Inhale</span><span> Hold </span><span>Exhale</span>
    </div>
    <script type="text/javascript" src="assets/index.js"></script>
  </body>
</html>`
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#202020',
    flex: 1,
  }
});

export default class App extends React.PureComponent {
  render() {
    return (
      <WebView
        scrollEnabled={false}
        source={source}
        startInLoadingState
        style={styles.root}
      />
    );
  }
}