import { createBrowserRouter } from "react-router-dom";
import registration from "./registration";
import login from "./login";
import home from "./home";
import accounts from "./accounts";
import inventory from "./inventory";
import hr from "./hr";

const router = createBrowserRouter([
  registration,
  login,
  home,
  accounts,
  inventory,
  hr,
]);

export default router;
