import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";

export default function RootLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
