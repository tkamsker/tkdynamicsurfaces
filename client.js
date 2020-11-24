// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module ,Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  buttonSurface = new Surface(300,300, Surface.SurfaceShape.Flat);

  buttonSurface.setAngle(
    5,
    0
  );

  r360.renderToSurface(
    r360.createRoot('ButtonSurface', {}),
    buttonSurface
  );


  surface = r360.getDefaultSurface();

  surfacePanel = r360.renderToSurface(
    r360.createRoot('SurfaceVR', {}),
    surface
  );

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height) {
    surface.resize(width, height)
  }

  changeSurfaceType(Type) {
    Type === "Flat" ? surface.setShape(Surface.SurfaceShape.Flat) : surface.setShape(Surface.SurfaceShape.Cylinder);
  }

  destroyPanel() {
    console.log(r360)
    r360.detachRoot(surfacePanel);
  }

  createPanel() {
    surfacePanel = r360.renderToSurface(
      r360.createRoot('SurfaceVR', {}),
      surface
    );
  }
}


window.React360 = {init};
