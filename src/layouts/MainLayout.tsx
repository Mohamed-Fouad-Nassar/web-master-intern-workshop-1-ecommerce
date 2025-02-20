import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-60px)] container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
