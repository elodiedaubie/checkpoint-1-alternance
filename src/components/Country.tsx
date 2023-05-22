import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_COUNTRY = gql`
  query getcountry($code: ID!) {
    country(code: $code) {
      name
      emoji
      currency
      capital
    }
  }
`;

function Country() {
  let { countryCode } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: countryCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>{data.country.name}</h1>
      <p>{data.country.emoji}</p>
      <p>Currency:{data.country.currency}</p>
      <p>Capital:{data.country.capital}</p>
    </>
  );
}

export default Country;
