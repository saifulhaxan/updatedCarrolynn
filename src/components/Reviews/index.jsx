import React, { useEffect, useRef } from "react";
import pinkQuote from "/images/pink-quote.png";
import testimonialImg from "/images/testimonial-img.png";

export const ReviewsBox = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.src = video.dataset.src;
            video.load();
            observer.unobserve(video);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="feedback_bottom">
      {props.videoContent ? (
        <div className="feedback_card">
          <video
            ref={videoRef}
            data-src={`./videos/${props.videoContent}.mp4`}
            width="100%"
            height="100%"
            controls
            loop
            muted
            preload="none"
          ></video>
        </div>
      ) : (
        <div className="reviewContainer">
          <div className="qoute_top">
            <img src={pinkQuote} alt="Quotation Mark" />
          </div>
          <div className="testimonal_img">
            <img src={testimonialImg} alt="" />
          </div>
          <div className="feedback_card">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
