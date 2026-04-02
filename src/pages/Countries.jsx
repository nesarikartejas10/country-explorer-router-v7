import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const countries = useLoaderData();
  console.log(countries);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Countries</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
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
        {countries.map((country) => {
          return (
            <li
              key={country.name.common}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-indigo-600 hover:underline text-lg font-semibold"
              >
                {country.name.common}
              </Link>

              <div className="text-gray-600 text-sm mt-1">
                Capital: {country.capital} <br />
                Region: {country.region} <br />
                Population: {country.population.toLocaleString()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
