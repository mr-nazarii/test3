'use client';

import { useEffect, useRef, useState } from 'react';

export default function Scene({ ...props }) {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const playbackConst = 1200; // Adjust the constant as needed
    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.pageYOffset / playbackConst;
        videoRef.current.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener('loadedmetadata', () => {
      const { duration } = video;
      const playbackConst = 500;
      const scrollSection = scrollSectionRef.current;
      console.log('scrollSection', videoRef.current.duration);
      if (videoRef?.current) {
        scrollSection.style.height = Math.floor(duration) * playbackConst + 'px';
      }
      console.log(duration); // Output: video duration in seconds
    });

    return () => {
      video.removeEventListener('loadedmetadata', () => {});
    };
  }, []);

  return (
    <div className="App sticky top-0">
      <div>
        <video ref={videoRef} id="v0" preload="preload">
          <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="./vid2.mp4"></source>
        </video>
        <div ref={scrollSectionRef} id="scrollSection"></div>
      </div>
    </div>
  );
}
