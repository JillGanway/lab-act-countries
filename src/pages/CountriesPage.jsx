
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import COUNTRIES from "../data/countries";

const CountriesPage = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const [notice] = useState(state?.missingCode ?? null);

  useEffect(() => {
    if (state?.missingCode) {
      navigate(pathname, { replace: true, state: null });
    }
  }, [state, pathname, navigate]);

  return (
    <div className="max-w-4xl mx-auto">
      {notice && (
        <div className="alert alert-warning mb-4">
          <span>
            We don't have a country with code "{notice}".
          </span>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4">Countries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {COUNTRIES.map((country) => (
          <div
            key={country.code}
            className="card bg-base-100 shadow-md"
          >
            <div className="card-body">
              <h2 className="card-title">{country.name}</h2>

              <p>Country Code: {country.code}</p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  navigate(`/countries/${country.code}`)
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
