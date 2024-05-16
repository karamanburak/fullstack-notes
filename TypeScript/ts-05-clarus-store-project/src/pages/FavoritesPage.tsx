import React from "react";
import { useAppSelector } from "../app/hooks";
import Card from "../components/Card";

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state=> state.products)
  console.log(favorites);
  
  return (
    <div>
   
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {favorites.map((item) => <Card key={item.id} text="Remove"
           item={item} 
          //  handleFunc={handleAdd} 
           />)}
        </div>
    </div>
)
};

export default FavoritesPage;
