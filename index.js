import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  VrButton
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule;

class ButtonSurface extends React.Component {
  render() {
    return(
      <View style={styles.buttonPanel}>
        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.createPanel()}>
          <Text>Create Panel</Text>
        </VrButton>
      </View>
    )
  }
}

export default class SurfaceVR extends React.Component {
  state = {
    width: 1000,
    height: 600
  }

  changeSurfaceDimensions(width, height) {
    surfaceModule.resizeSurface(width, height);
    this.setState({width: width, height: height});
  }

  render() {
    return (
      <View style={[styles.panel, {width: this.state.width, height: this.state.height}]}>
        <VrButton style={styles.greetingBox} onClick={() => this.changeSurfaceDimensions(500,300)}>
          <Text>Change Dim.</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.changeSurfaceType("Flat")}>
          <Text>Flat</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.changeSurfaceType("Cylinder")}>
          <Text>Cylinder</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => this.changeSurfaceDimensions(1000,600)}>
          <Text>Reset</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.destroyPanel()}>
          <Text>Destroy</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    width: 200,
    height: 60,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  buttonPanel: {
    width: 300,
    height: 300,
    backgroundColor: 'rgb(255,127,80)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('SurfaceVR', () => SurfaceVR);
AppRegistry.registerComponent('ButtonSurface', () => ButtonSurface);
