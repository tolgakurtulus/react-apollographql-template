import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import "./Search.css";
import { Link } from "react-router-dom";

const GET_CHARACTERS_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTERS_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div className="search">
      <div className="search-header">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </div>

      <div className="search-area">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => getLocations()}>Search</button>
      </div>
      {loading && <div>Spinner....</div>}
      {error && <div>Error....</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
