import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { LOGO } from "./data/site";

/* Favicon com a logo oficial da marca (evita 404 e dá identidade à aba). */
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/png";
icon.href = LOGO;
document.head.appendChild(icon);

const apple = document.createElement("link");
apple.rel = "apple-touch-icon";
apple.href = LOGO;
document.head.appendChild(apple);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
