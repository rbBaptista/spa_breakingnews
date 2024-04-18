import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
