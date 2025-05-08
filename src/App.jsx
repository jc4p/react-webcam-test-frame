import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as frame from '@farcaster/frame-sdk';

function App() {
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    frame.sdk.actions.ready();
  }, [])

  const handleStartCamera = () => {
    setCameraActive(true);
  };

  return (
    <div className="app-container">
      {!cameraActive ? (
        <button onClick={handleStartCamera}>Start Camera</button>
      ) : (
        <div className="webcam-container">
          <Webcam
            audio={false} // No audio needed as per requirements
            mirrored={true} // Common default for user-facing cameras
            videoConstraints={{ width: 380, height: 285 }} // Fit within 400px div nicely
          />
        </div>
      )}
    </div>
  );
}

export default App;
