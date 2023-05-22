import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

interface ContinentsType {
  name: string;
}

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
    }
  }
`;

function Continents() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.continents.map(({ name }: ContinentsType) => (
    <div>
      <h3 onClick={() => navigate(`/continents/${name}`)}>{name}</h3>
    </div>
  ));
}

export default Continents;
