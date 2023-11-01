import React, { useRef } from 'react';

const CameraCaptureComponent = () => {
  const videoRef = useRef(null);

  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} autoPlay></video>
      <button onClick={handleCapture}>Ota kuva</button>
    </div>
  );
};

export default CameraCaptureComponent;