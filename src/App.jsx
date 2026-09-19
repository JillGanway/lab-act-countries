import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
<<<<<<< HEAD
        <Route path="countries">
         <Route index element={<CountriesPage />} />
        <Route path=":countryCode" element={<CountryDetailPage/>} />
        </Route>
=======

        <Route path="countries">
          <Route index element={<CountriesPage />} />
          <Route path=":countryCode" element={<CountryDetailPage />} />
        </Route>

>>>>>>> 44f7c52 (Task 1: convert nav Links to NavLinks with active styling; remove debug borders)
        <Route path="bucket-list" element={<BucketListPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;