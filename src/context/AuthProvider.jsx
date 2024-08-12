import PropTypes from "prop-types";
import { createContext } from "react";
import { useLocalStorage } from "@/hooks";

export const AuthContext = createContext();

const users = [
  {
    name: "Fauzan Radji",
    username: "fauzan",
    password: "12345678",
  },
  {
    name: "John Doe",
    username: "john",
    password: "12345678",
  },
  {
    name: "Syifa Nur'afni",
    username: "syifa",
    password: "12345678",
  },
];

export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  function login(username, password) {
    const matchedUser = users.find((user) => user.username === username);
    if (!matchedUser) return "Wrong username or password";
    if (matchedUser.password !== password) return "Wrong username or password";

    setUser(matchedUser);
  }
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
