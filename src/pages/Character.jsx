import React from "react";
import UseCharacter from "../hooks/UseCharacter";
import "./Character.css";
import { useParams } from "react-router-dom";

export default function CharactersList() {
  const { id } = useParams();
  const { error, data, loading } = UseCharacter(id);

  if (loading) {
    return <div>Spinner....</div>;
  } else if (error) {
    return <div>Somethings Wrong</div>;
  } else {
    return (
      <div className="characterList">
        <div className="character">
          <img
            src={data.character.image}
            alt={data.character.name}
            width={750}
            height={750}
          />
          <div className="characterContent">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="characterEpisode">
              {data.character.episode.map((episode) => {
                return (
                  <div>
                    {episode.name} - <b>{episode.episode}</b>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
