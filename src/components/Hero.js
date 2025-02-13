import React, { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { src: '/India-360-v2.mp4', title: 'India 360' },
    { src: '/Adventure.mp4', title: 'Adventure' },
    { src: '/Nature.mp4', title: 'Nature' },
    { src: '/Wildlife.mp4', title: 'Wildlife' },
    { src: '/Heritage.mp4', title: 'Heritage' },
    { src: '/Spiritual.mp4', title: 'Spiritual' },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });

      const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);

      return () => {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideo]);

  const handlePrevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={videos[currentVideo].src}
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-end justify-center h-full pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="container inc-container-video-component d-flex flex-col justify-end h-full">
            <div className="video-slider-nav flex justify-center mb-4">
              {videos.map((video, index) => (
                <div className="items mx-2" data-index={index} key={index}>
                  <a
                    href="#"
                    className={`inc-btm-navlink ${currentVideo === index ? 'active' : ''}`}
                    onClick={() => setCurrentVideo(index)}
                  >
                    {video.title}
                  </a>
                </div>
              ))}
            </div>
            <div className="controls flex justify-center">
              <button className="prev-video mx-2" onClick={handlePrevVideo}>Previous Video</button>
              <button className="next-video mx-2" onClick={handleNextVideo}>Next Video</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;