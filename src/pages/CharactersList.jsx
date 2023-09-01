import React from "react";
import UseCharacters from "../hooks/UseCharacters";
import "./CharactersList.css";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, data, loading } = UseCharacters();

  if (loading) {
    return <div>Spinner....</div>;
  } else if (error) {
    return <div>Somethings Wrong</div>;
  } else {
    return (
      <div className="characterList">
        <div className="characterList-header">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </div>
        <div className="characterList-row">
          {data.characters.results.map((character) => {
            return (
              <Link to={`/${character.id}`}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
              </Link>
            );
          })}
          )
        </div>
      </div>
    );
  }
}
