import React, { useEffect, useState } from "react";

export const Home = () => {
    const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((responseParse) => {
        console.log(responseParse)
         setRecipes(responseParse.categories)
 
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <>
      <div>Home</div>
      {recipes.map((recipes) =>{
          
      })}
    </>
  );
};
