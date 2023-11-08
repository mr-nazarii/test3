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
          start: '50% center',
          end: '4300 center',
          scrub: false,
          markers: false,
          pin: true
        }
      });

      background.to('.gradient-motion', {
        background: 'black'
      });

      const text = gsap.timeline({
        defaults: { duration: 0.2 },
        scrollTrigger: {
          trigger: '.textwrap',
          start: '50% center',
          end: '4300 center',
          scrub: true,
          markers: true,
          pin: true
        }
      });

      text
        .to('.span1', { color: 'white', x: 0, duration: 0.5 })
        .to('.span2', { color: 'white', x: 0, duration: 0.5 }, '-=0.25') // overlap with previous animation by 0.25 seconds
        .to('.span3', { color: 'white', x: 0, duration: 0.5 }, '-=0.25');
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
    <>
      <div className="par">
        <div className="textwrap absolute right-0 top-16 z-40 flex w-2/5  justify-center bg-black bg-opacity-40 p-9 px-8 pt-10 align-middle backdrop-blur-sm">
          <p className="text1 text-5xl font-medium  ">
            <span style={{ color: '#ffffff26' }} className="span1 ">
              The first grow tent system designed with smart controls
            </span>
            <span style={{ color: '#ffffff26' }} className="span2">
              {' '}
              that can automate its ventilation, circulation, and
            </span>
            <span style={{ color: '#ffffff26' }} className="span3">
              lighting to create the ideal growing environment for your plants.
            </span>
          </p>
        </div>

        <div id="vid2" className="h-screen w-screen">
          <video ref={videoRef} id="v0" preload="preload">
            <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="./vid2.mp4"></source>
          </video>
        </div>
        <div className="fixed bottom-20 flex w-full justify-center">
          <div className="b bottom-8 mx-auto flex w-auto justify-center gap-3 rounded-full bg-black bg-opacity-25 px-2 py-1 align-middle">
            <button
              className="rounded-full transition ease-in-out hover:bg-white  hover:bg-opacity-20 hover:transition hover:ease-in-out"
              onClick={() => handleButtonClick(1000)}
            >
              <svg
                width="30"
                height="23"
                viewBox="0 0 414 417"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="206.5" cy="209.783" r="78.2609" stroke="white" stroke-width="21.913" />
                <path
                  d="M204.935 11L204.935 92.3913"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M209.065 409L209.065 327.609"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M347.626 69L290.074 126.552"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M66.3738 351L123.926 293.448"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M68 69L125.552 126.552"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M346 351L288.448 293.448"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M8 208.652L89.3913 208.652"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M406 211.348L324.609 211.348"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M406 208.652L324.609 208.652"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button
              className="rounded-full transition ease-in-out hover:bg-white  hover:bg-opacity-20 hover:transition hover:ease-in-out"
              onClick={() => handleButtonClick(2000)}
            >
              <svg
                width="30"
                height="23"
                viewBox="0 0 414 409"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M204.935 9L204.935 90.3913"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M347.626 67L290.074 124.552"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M68 67L125.552 124.552"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M8 206.652L89.3913 206.652"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M406 209.348L324.609 209.348"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M406 206.652L324.609 206.652"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M272.698 220C273.425 216.038 273.804 211.955 273.804 207.783C273.804 170.611 243.671 140.478 206.5 140.478C169.329 140.478 139.196 170.611 139.196 207.783C139.196 211.955 139.575 216.038 140.302 220H118.112C117.565 216.006 117.283 211.927 117.283 207.783C117.283 158.509 157.227 118.565 206.5 118.565C255.773 118.565 295.717 158.509 295.717 207.783C295.717 211.927 295.435 216.006 294.888 220H272.698Z"
                  fill="white"
                />
                <path
                  d="M269 262H145"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M245 309H170"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
                <path
                  d="M217 356H198"
                  stroke="white"
                  stroke-width="15.6522"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button
              className="rounded-full transition ease-in-out ease-in-out  hover:bg-white hover:bg-opacity-20 hover:transition

            "
              onClick={() => handleButtonClick(3000)}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 398 409"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M314.317 227.769C313.134 226.584 311.652 225.743 310.028 225.337C308.404 224.931 306.7 224.975 305.099 225.464C287.524 230.778 268.837 231.224 251.028 226.753C233.22 222.283 216.958 213.063 203.975 200.078C190.992 187.092 181.774 170.826 177.305 153.014C172.835 135.202 173.28 116.511 178.594 98.9321C179.087 97.3303 179.134 95.6244 178.73 93.9977C178.326 92.3711 177.487 90.8853 176.302 89.7002C175.117 88.5151 173.632 87.6755 172.005 87.2716C170.379 86.8678 168.674 86.915 167.072 87.4082C142.774 94.8532 121.442 109.774 106.112 130.047C92.7057 147.849 84.5283 169.038 82.4983 191.233C80.4683 213.428 84.6663 235.75 94.6206 255.69C104.575 275.63 119.891 292.399 138.848 304.112C157.806 315.826 179.653 322.02 201.936 321.999C227.933 322.08 253.237 313.627 273.968 297.938C294.237 282.605 309.154 261.268 316.598 236.965C317.085 235.369 317.13 233.671 316.729 232.051C316.327 230.432 315.493 228.952 314.317 227.769ZM262.885 283.21C243.362 297.918 219.185 305.076 194.804 303.369C170.423 301.661 147.479 291.202 130.196 273.917C112.913 256.632 102.454 233.684 100.745 209.298C99.0358 184.912 106.191 160.729 120.894 141.202C130.473 128.549 142.857 118.293 157.071 111.24C156.262 116.923 155.854 122.657 155.85 128.399C155.884 160.174 168.519 190.638 190.983 213.107C213.447 235.576 243.905 248.213 275.674 248.247C281.425 248.245 287.169 247.837 292.864 247.025C285.805 261.245 275.543 273.632 262.885 283.21Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>{' '}
    </>
  );
}
