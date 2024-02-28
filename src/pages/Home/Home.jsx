import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((responseParse) => {
        console.log(responseParse);
        setRecipes(responseParse.meals);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {recipes.map((recipes) => {
              return (
                <>
                  <Card
                    dishName={recipes.strMeal}
                    dishId={recipes.idMeal}
                    dishImage={recipes.strMealThumb}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
