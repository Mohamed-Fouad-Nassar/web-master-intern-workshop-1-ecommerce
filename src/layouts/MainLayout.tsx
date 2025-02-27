import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-60px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
