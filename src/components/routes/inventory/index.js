import Inventory from "../../inventory";
import ongoing from "./ongoing";
import sell from "./sell";

const inventory = {
  path: "/inventory",
  element: <Inventory />,
  children: [sell, ongoing],
};

export default inventory;
