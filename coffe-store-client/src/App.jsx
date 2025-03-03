import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees)

  return (
    <>
      <div className=" md:m-20">
        <h2 className="text-3xl text-red-800 text-center mb-2">Coffe Store</h2>
        <Link to='/addCoffee' className=" text-xl font-semibold text-orange-800 underline"><p className="text-center mb-4 ">Add Coffe</p></Link>
        <div className="grid md: grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
