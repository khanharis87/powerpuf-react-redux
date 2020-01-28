import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EpisodeDetail = () => {
  const episode = useSelector(state => state.episode);
  return (
    <div>
      <Link style={{ margin: "10px 10px" }} to="/" className="nav-link">
        &larr; Back to Home{" "}
      </Link>

      <section className="episode-detail-box">
        <img
          className="episode-detail-img"
          src={episode.image ? episode.image.medium : ""}
          alt={`Powerpuff ${episode.name}`}
        />
        <h3 className="episode-detail-title">{episode.name}</h3>
        <div
          className="episode-detail-summary"
          dangerouslySetInnerHTML={{ __html: episode.summary }}
        ></div>
      </section>
    </div>
  );
};

export default EpisodeDetail;
