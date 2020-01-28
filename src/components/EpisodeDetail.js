import React from "react";
import { useSelector } from "react-redux";

const EpisodeDetail = () => {
  const episode = useSelector(state => state.episode);
  return (
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
  );
};

export default EpisodeDetail;
