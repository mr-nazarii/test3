'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const runtime = 'edge';

gsap.registerPlugin(ScrollTrigger); // Register outside the component
gsap.registerPlugin(ScrollToPlugin);

export default function Scene({ ...props }) {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);

  const handleButtonClick = (pos: number) => {
    const scrollPosition = pos; // Replace this with the actual scroll position you want
    gsap.to(window, { scrollTo: scrollPosition, duration: 1 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const background = gsap.timeline({
        defaults: { duration: 0.2 },
        scrollTrigger: {
          trigger: '#vid2',
          start: '476 center',
          end: '4300 center',
          scrub: false,
          markers: false,
          pin: true
        }
      });

      background.to('.gradient-motion', {
        background: 'black'
      });
    });

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
      ctx.revert();
    };
  }, []);

  return (
    <div className="par">
      <div id="vid2">
        <video ref={videoRef} id="v0" preload="preload">
          <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="./vid2.mp4"></source>
        </video>
        <div ref={scrollSectionRef} id="scrollSection"></div>
      </div>
      <div className="fixed bottom-20 flex w-full justify-center">
        <div className="b bottom-10 mx-auto flex w-auto justify-center gap-5 rounded-md	 bg-black bg-opacity-25 px-5 py-3 align-middle">
          <button onClick={() => handleButtonClick(1000)}>Day</button>
          <button onClick={() => handleButtonClick(2000)}>Mid</button>
          <button onClick={() => handleButtonClick(3000)}>Night</button>
        </div>
      </div>
    </div>
  );
}
