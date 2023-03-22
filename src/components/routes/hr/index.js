import Hr from "../../hr";
import admin from "./admin";
import management from "./management";

const hr = {
  path: "/hr",
  element: <Hr />,
  children: [admin, management],
};

export default hr;
