import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const [search, setSearch] = useState("");
  const countries = useLoaderData();

  const filteredCountries = countries.filter((country) => {
    const matchSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Countries</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500">
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCountries.map((country) => {
          return (
            <Link
              to={`/countries/${country.name.common}`}
              key={country.name.common}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-indigo-600 text-lg font-semibold">
                {country.name.common}
              </h3>

              <div className="text-gray-600 text-sm mt-1">
                Capital: {country.capital} <br />
                Region: {country.region} <br />
                Population: {country.population.toLocaleString()}
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
