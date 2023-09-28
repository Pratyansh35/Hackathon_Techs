import React, { useState } from 'react';
import '../css/Video.css';
import Header from './Header';
export default function Video() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([
  
    {
      
      embedUrl: 'https://www.youtube.com/embed/im4DI6UNzIA?si=IDD3zdXv5XGOTo_e" title="YouTube video player',
      title: 'flood',
    },
    {
      title: 'How to protect yourself during an earthquake',
      embedUrl: 'https://www.youtube.com/embed/BLEPakj1YTY?si=J4Rt67rnRc4e2Pt_',
    },
    {
      title: 'flood',
      embedUrl: 'https://www.youtube.com/embed/SgScj6-NzQg?si=nWiY7_rSpJQtFsNf',

    },
    {
      title: 'Severe drought safety tips..',
      embedUrl: 'https://www.youtube.com/embed/RrmWXfiM_b8?si=30THTqejfXWER-PG',

    },
    {
      title: 'How to survive an earthquake',
      embedUrl: 'https://www.youtube.com/embed/r5EbbrVXoQw?si=SG51e54kZ9tVE3Pm',

    },
    {
      title: 'How to survive a Tsunami',
      embedUrl: 'https://www.youtube.com/embed/7EDflnGzjTY?si=OQcCqLiXS8DMcscQ',

    },
    {
      title: 'Understanding drought',
      embedUrl: 'https://www.youtube.com/embed/oXG5SaZCVNU?si=DlzDQALrhSbbD9aM',

    },
    {
      title: 'How does earthquake occur',
      embedUrl: 'https://www.youtube.com/embed/RqqqSnaTfQo?si=uvEei3ks1eg_EG8c',

    },
    {
      title: 'Never Do Certain Things during tsunami',
      embedUrl: 'https://www.youtube.com/embed/fQAciMgl-kM?si=TaqOfvqBtooPwNio',

    },
    {
      title: 'flood',
      embedUrl: 'https://www.youtube.com/embed/HYIXcvshlYo?si=X-dl8vn6DHa6tu2A',

    },
    {
      
      embedUrl: 'https://www.youtube.com/embed/im4DI6UNzIA?si=IDD3zdXv5XGOTo_e" title="YouTube video player',
      title: 'flood',
    },
    {
      title: 'Earthquake Prevention Measures',
      embedUrl: 'https://www.youtube.com/embed/BLEPakj1YTY?si=J4Rt67rnRc4e2Pt_',
    },

    {
      title: '360° tsunami wave',
      embedUrl: 'https://www.youtube.com/embed/P1HX9Uh8OUg?si=1NerDz8WWi4q34Er',

    },
    {
      title: 'flood',
      embedUrl: 'https://www.youtube.com/embed/LiZ5hryi2Sw?si=fW6JVG3F6_25UUXH',
     
    },
    {
      title: 'Drought prevention strategy',
      embedUrl: 'https://www.youtube.com/embed/5qMl5UDQkZc?si=bwnYRlbpMztd4kvc',

    },
   
    {
      title: 'Drought: Be Prepared',
      embedUrl: 'https://www.youtube.com/embed/gmz8sFN2CeA?si=ZWJ73eV_7WUSRvSY',
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
    <Header/>
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
