import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileSideBar from "../components/ProfileSideBar";

export default function ProfileLayout() {
  return (
    <>
      <Header />
      <main className="px-2 py-4 min-h-[calc(100dvh-125px)] flex gap-4 ">
        <ProfileSideBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
