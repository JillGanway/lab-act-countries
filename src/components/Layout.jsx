<<<<<<< HEAD
// NOTE: The nav below uses <a href="…"> which triggers full page reloads.
// Lab 07 asks you to install react-router and replace these with <Link>.

=======
>>>>>>> 44f7c52 (Task 1: convert nav Links to NavLinks with active styling; remove debug borders)
import { NavLink, Outlet } from "react-router";

const Layout = () => {

  return (

    <div className="min-h-screen flex flex-col">
<<<<<<< HEAD
      <nav className="h-14 flex items-center justify-between px-5 shadow">
        <div className="flex items-center gap-2">
=======

      <nav className="h-14 flex items-center justify-between px-5 shadow">

        <div className="flex items-center gap-2">

>>>>>>> 44f7c52 (Task 1: convert nav Links to NavLinks with active styling; remove debug borders)
          <span className="font-bold">Countries of the World</span>

        </div>

        <div className="flex gap-5">
<<<<<<< HEAD
          <NavLink to={"/"} end>
          {({ isActive })=> } 
            <p className="text-[12px]">Home</p>
          </NavLink>
          <NavLink to="/countries">
            <p className="text-[12px]">Countries</p>
          </NavLink>
          <NavLink to="/bucket-list">
            <p className="text-[12px]">Bucket List</p>
          </NavLink>
          <NavLink to="/about">
            <p className="text-[12px]">About</p>
          </NavLink>
=======

          <NavLink to={"/"} end>
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                Home
              </p>
            )}
          </NavLink>

          <NavLink to={"/countries"}>
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                Countries
              </p>
            )}
          </NavLink>

          <NavLink to={"/bucket-list"}>
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                Bucket List
              </p>
            )}
          </NavLink>

          <NavLink to={"/about"}>
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                About
              </p>
            )}
          </NavLink>

>>>>>>> 44f7c52 (Task 1: convert nav Links to NavLinks with active styling; remove debug borders)
        </div>

      </nav>

      <main className="flex-1 p-6">
<<<<<<< HEAD
=======

>>>>>>> 44f7c52 (Task 1: convert nav Links to NavLinks with active styling; remove debug borders)
        <Outlet />

      </main>

    </div>

  );

};

export default Layout;