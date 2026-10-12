
import { useParams } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();

  const country = COUNTRIES.find(
    (c) => c.code === countryCode.toUpperCase()
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {country.name}
      </h1>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <p>
            <strong>Country Code:</strong> {country.code}
          </p>

          <p>
            <strong>Country Name:</strong> {country.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
