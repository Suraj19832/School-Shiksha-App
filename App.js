import React from "react";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./Utils/context/AuthContext";
export default function App() {
  return (
    <AuthProvider><Navigation/></AuthProvider>
  );
}
