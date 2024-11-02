import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <section className="container">
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default SharedLayout;
