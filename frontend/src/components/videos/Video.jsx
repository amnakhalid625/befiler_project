import React, { useState, useEffect } from 'react';
import './video.css';

const Videos = () => {
  const [videos, setVideos] = useState([
    {
      title: "Tax Filing, NTN Registration, Business Registration with Befiler",
      description: "Befiler is Pakistan's only online tax solution which all the wealth reconciliation realtime for your easy and provide instant support ...",
      videoUrl: "https://www.youtube.com/embed/iN5ZwB8OqNY"
    },
    {
      title: "Tax Filing is easy with Befiler's App!",
      description: "Register your NTN or file your tax return with Befiler's App within minutes. Its fast, simple, and accurate.",
      videoUrl: "https://www.youtube.com/embed/VgZK3sh9KpE"
    },
    {
      title: "Benefits of Tax Filing | Why become a Filer",
      description: "The video explains why a person should file the tax return and become tax filer to have his/her name / NTN appear in Active ...",
      videoUrl: "https://www.youtube.com/embed/4onMfOE0bq0"
    },
    {
      title: "Befiler.com - Hassle Free way of filling tax in 3 EASY STEPS",
      description: "Wasim Akram talks about Befiler.com as a most convenient way to file returns in 3 easy steps. Watch the video to see what he has ...",
      videoUrl: "https://www.youtube.com/embed/pexIO1SMR3k"
    }
   
  ]);

  // If you want to fetch from API (uncomment and implement)
  /*
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${baseURL}youtube?type=featured&size=4&page=1&direction=ASC&order=id&query&categoryId`);
        const res = await response.json();
        
        const data = res.response.map(data => ({
          title: data.title,
          description: data.description,
          videoUrl: `https://www.youtube.com/embed/${data.videoUrl}`,
          thumbnailUrlMedium: data.thumbnailUrlMedium
        }));
        
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  */

  return (
    <div className="video" id="video">
      <div className="container">
        <div className=''> <h1 className=' text-center text-2xl lg:text-4xl sm:text-3xl font-semibold mb-8'>Featured Videos</h1></div>
        <div className="video__list" id="video__list">
          {videos.map((video, index) => (
            <a 
              key={index}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="list__item"
              title={video.title}
            >
              <div className="item__image">
                <iframe
                  src={video.videoUrl}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="item__title">{video.title}</div>
              <div className="item__description">
                <p>{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;