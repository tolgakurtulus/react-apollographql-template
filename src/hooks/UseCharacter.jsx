import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

function UseCharacter(id) {
  const { error, data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
}

export default UseCharacter;
