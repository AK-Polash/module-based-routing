import Accounts from "../../accounts";
import contact from "./contact";
import payment from "./payment";

const accounts = {
  path: "/accounts",
  element: <Accounts />,
  children: [contact, payment],
};

export default accounts;
