import React from "react";
import { Link } from "react-router-dom";

const EpisodeList = ({ episodes, onEpisodeClick }) =>
  episodes.map(episode => (
    <div
      key={episode.id}
      className="episode-box"
      onClick={() => onEpisodeClick(episode._links.self.href)}
    >
      <Link to={`/${episode.id}/detail`}>
        <img
          src={episode.image ? episode.image.medium : ""}
          alt={`Powerpuff ${episode.name}`}
        />
        <div className="nav-link">{episode.name}</div>
        <section>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
        </section>
      </Link>
    </div>
  ));

export default EpisodeList;
