import { Root2 } from "../types/interface";

interface ICountry {
  country: Root2 | null;
}

export default function CountryPage({ country }: ICountry) {
  return (
    <div className="container">
      <h1 className="text-center text-4xl font-extrabold">{country?.name?.common}</h1>
    </div>
  );
}
