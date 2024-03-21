import { createContext, useState } from "react";
import data from "./data";
import Home from "./components/Home";

//!1- context alanı açıyoruz
export const StudentContext = createContext()


const App = () => {

return(
  
  <div>
    <Home/>
  </div>
)

};

export default App;
