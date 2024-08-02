import React from "react";

export const Card = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.png} alt={`drapeau ${country.name.common}`} />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </div>
  );
};
