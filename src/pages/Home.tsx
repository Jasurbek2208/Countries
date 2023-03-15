import React, { useState, useEffect } from "react";
import { myAxios } from "../service";

// Components
import MyButton from "../components/button/Button";
import LoadingSpinner from "../components/loading/Loading";

// Custom Hooks
import { usenumbersort } from "../customHooks/NumberSort";
import { Root, Root2 } from "../types/interface";

export default function Home() {
  const regions:Array<String> = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [countries, setCountries] = useState<Root | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Root | null>(null);

  // errors 
  const [error, setError] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
// console.log(countries[0].name.common);

  // Get All countries
  async function getApi() {
    setIsLoading(true);

    try {
      const res = await myAxios("/all");
      setCountries(res.data);
      setFilteredCountries(res.data);
      setError(false);
      
    } catch {
      setError(true);

    } finally {
      setIsLoading(false);
    }
  }

  // Get region countries
  async function getRegionCountries(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "All") {
      getApi();
      return;
    }
    setIsLoading(true);

    try {
      const res = await myAxios(`/region/${e.target.value}`);
      setFilteredCountries(res.data);
      setError(false);

    } catch {
      setError(true);

    } finally {
      setIsLoading(false);
    }
  }

  // Search countries
  function searchCountries(e: React.ChangeEvent<HTMLInputElement>) {
    let searchedValue = e.target.value.toLowerCase();
    let count:any = [];

    if (searchedValue) {
      filteredCountries?.map((country: Root2) => {

        if (country.name.common.toLowerCase().includes(searchedValue)) {
          count.push(country);
        }

      });
    } else {
      count = countries;
    }

    setFilteredCountries(count);
  }

  // Call function get all countries
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="pt-8 pb-12 min-h-[100vh] w-[100%] bg-gray-100 dark:bg-zinc-800">
      <div className="container mx-auto px-3">
        <header className="pb-14">
          <h1 className="mb-10 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            COUNTRIES
          </h1>

          <div className="w-full flex flex-wrap justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Search..."
              onChange={searchCountries}
              className="max-w-[340px] w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <select
              defaultValue="All"
              onChange={getRegionCountries}
              className="block max-w-[340px] w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {regions.map((region: any) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </header>

        {filteredCountries && (
          <div className="flex items-center justify-around gap-10 flex-wrap">
            {filteredCountries?.map((country:any) => (
              <div key={country.name.common} className="flex justify-center">
                <div className="block max-w-[300px] w-[300px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <a href="#!">
                    <img
                      className="rounded-t-lg w-full max-h-[200px] h-[200px]"
                      src={country.flags.png}
                      alt={country.flags.alt}
                    />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {country.name.common}
                    </h5>
                    <p className="text-base mb-1 text-neutral-600 dark:text-neutral-200">
                      Capital:{" "}
                      <span className="font-semibold">{country.capital}</span>
                    </p>
                    <p className="text-base mb-1 text-neutral-600 dark:text-neutral-200">
                      Region:{" "}
                      <span className="font-semibold">{country.region}</span>
                    </p>
                    <p className="text-base mb-1 text-neutral-600 dark:text-neutral-200">
                      Population:{" "}
                      <span className="font-semibold">
                        {usenumbersort(country.population)}
                      </span>
                    </p>
                    <MyButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoading ? (
          <LoadingSpinner />
        ) : error && !filteredCountries ? (
          <h1 className="mt-10 text-2xl sm:text-4xl xl:text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            Countries Not Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
}
