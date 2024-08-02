import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [maxCountry, setMaxCountry] = useState(36);
  const [continent, setContinent] = useState("");
  const continents = ["Africa", "America", "Asia", "Europe", "Oceanie"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          name="numbCountry"
          onChange={(e) => setMaxCountry(e.target.value)}
          defaultValue={maxCountry}
        />

        {continents.map((value) => {
          return (
            <li key={value}>
              <input
                type="radio"
                name="continent"
                id={value}
                checked={continent === value}
                onChangeCapture={(e) => setContinent(e.target.id)}
              />
              <label htmlFor={value}>{value}</label>
            </li>
          );
        })}
      </ul>
      {continent && (
        <button
          onClick={(e) => {
            setContinent("");
          }}
        >
          Effacer la recherche
        </button>
      )}
      <ul>
        {countries
          .sort((a, b) => b.population - a.population)
          .filter((value) => {
            return continent !== ""
              ? value.continents[0].includes(continent)
              : true;
          })
          .slice(0, maxCountry)
          .map((country, index) => (
            <Card key={`${country.flags}${index}`} country={country} />
          ))}
      </ul>
    </div>
  );
};
