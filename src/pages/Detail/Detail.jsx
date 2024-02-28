import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { Layout } from "../../components/layout/Layout";
 
export const Detail = () => {
  const { id } = useParams();
  const [dish, setDish] = useState();
 
  useEffect(() => {
    const formatedId = id.substring(1);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${formatedId}`;
    fetchData(url);
  }, []);
 
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const result = await response.json();
      const dishDetail = result.meals[0];
      setDish(dishDetail);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };


  return (
    <Layout>
      {dish ? (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={dish.strMealThumb}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {dish.strTags}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {dish.strMeal}
                </h1>
                <p class="leading-relaxed">{dish.strInstructions}</p>
                <button className="flex  my-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded">
                  <a href={dish.strYoutube} target="_blank">
                    Ver en Youtube
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 flex justify-center py-52 ">
          Loading...
        </h1>
      )}
  </Layout>
  );
};
