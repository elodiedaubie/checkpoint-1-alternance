import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

interface ContinentsType {
  name: string;
  code: string;
}

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

function Continents() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.continents.map(({ name, code }: ContinentsType) => (
    <div>
      <h3 onClick={() => navigate(`/continents/${code}`)}>{name}</h3>
      <p>{code}</p>
    </div>
  ));
}

export default Continents;
