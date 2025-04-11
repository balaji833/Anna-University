import React from "react";
import univ1 from "../assets/univ1.jpg";
import univ2 from "../assets/univ2.jpg";
import univ3 from "../assets/univ3.jpg";
import univ4 from "../assets/univ4.jpeg";
import univ5 from "../assets/univ5.jpg";
import univ6 from "../assets/univ6.jpg";
import univ7 from "../assets/univ7.jpg";
import univ8 from "../assets/univ8.jpg";

const galleryItems = [
  { type: "image", src: univ1 },
  { type: "image", src: univ2 },
  { type: "image", src: univ3 },
  { type: "image", src: univ4 },
  { type: "image", src: univ5 },
  { type: "image", src: univ6 },
  { type: "image", src: univ7 },
  { type: "image", src: univ8 },
];

const videoItems = [
  {
    type: "video",
    src: "https://www.youtube.com/embed/U3ZPrFW88d0",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/fvtg65zJPJE",
  },
];

const Gallery = () => {
  return (
    <div className="container py-5">
      {/* Photo Gallery */}
      <h1 className="text-center text-primary mb-4">Photo Gallery</h1>
      <p className="text-center mb-5">
        View moments and memories from university events and milestones.
      </p>
      <div className="row g-4 mb-5">
        {galleryItems.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.src}
                alt={`Anna University ${index + 1}`}
                className="card-img-top img-fluid"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Video Gallery */}
      <h2 className="text-center text-primary mb-4">Video Gallery</h2>
      <p className="text-center mb-5">
        Watch highlights and important visual moments from Anna University.
      </p>
      <div className="row g-4">
        {videoItems.map((video, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div className="ratio ratio-16x9 shadow-sm rounded">
              <iframe
                src={video.src}
                title={`Anna University Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
