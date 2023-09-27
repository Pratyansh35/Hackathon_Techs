import React, { useState } from 'react';
import '../css/Video.css';
export default function Video() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([
  
    {
      
      embedUrl: 'https://www.youtube.com/embed/im4DI6UNzIA?si=IDD3zdXv5XGOTo_e" title="YouTube video player',
      title: 'floods',
    },
    {
      title: 'earthquakhjvbe',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'earthquake',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'drought',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'earthquake',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'drought',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'drought',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'floods',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'floods',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
    {
      title: 'floods',
      embedUrl: 'https://www.youtube.com/embed/https://www.youtube.com/watch?v=TkFz4sySV7M&list=RDTkFz4sySV7M&start_radio=1',

    },
   
  ]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  return (
    <>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
              setSearchTerm('');
            }
          }}
          
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <h3>{video.title}</h3>
            <iframe
              width="560"
              height="315"
              src={video.embedUrl}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}
