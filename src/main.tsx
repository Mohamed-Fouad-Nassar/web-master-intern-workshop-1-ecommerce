import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./AppRouter.tsx";

import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
