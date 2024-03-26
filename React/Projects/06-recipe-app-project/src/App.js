import React from "react";
import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";



const App = () => {
 return(
   //^ context sayfamiz ile bütün proje sarmallandi \\
   <RecipeProvider>
      <AppRouter />
    </RecipeProvider>
   )
  
};

export default App;
