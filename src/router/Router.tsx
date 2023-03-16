import { myAxios } from "../service";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import CountryPage from "../pages/[id]";
import NotFound from "../pages/NotFound";

// Interface
import { Root2 } from "../types/interface";

export default function Router() {
  const [currentCountry, setCurrentCountry] = useState<Root2 | null>(null);

  const location = useLocation().pathname;

  // errors
  const [error, setError] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  // Get Current countries
  async function getCountry() {
    setIsLoading(true);

    try {
      const res = await myAxios(`/translation/${location.split("/")[2]}`);

      setCurrentCountry(res.data[0]);
      setError(false);
      
    } catch {
      setError(true);

    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    if (!currentCountry) {
      getCountry();
    }
  }, [currentCountry]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home setCurrentCountry={setCurrentCountry} />}
      />
      <Route
        path={`/country/${currentCountry?.name?.common}`}
        element={<CountryPage country={currentCountry} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
