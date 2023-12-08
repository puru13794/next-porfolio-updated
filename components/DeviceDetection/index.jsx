// useDeviceDetect.js
import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  return { isMobile };
};

export default useDeviceDetect;
