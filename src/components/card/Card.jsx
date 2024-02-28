import { Link } from "wouter";
export const Card = ({ dishName, dishId, dishImage }) => {
  return (
    <>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            src={`${dishImage}`}
          />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
            PLATO
          </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">
            {dishName}
          </h2>

          <Link to={`/detalle-produicto/:${dishId}`}>
            <button class="flex  my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              See more
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
