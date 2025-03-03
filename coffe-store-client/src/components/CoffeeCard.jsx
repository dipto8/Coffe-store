import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CoffeeCard({ coffee, coffees, setCoffees }) {
  const { _id, name, quantity, category, details, supplier, taste, photoUrl } =
    coffee;

  //Delete Coffee
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your COFFEE has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] card md:card-side bg-base-100 shadow-md md:p-4">
      <figure>
        <img  src={photoUrl} alt="Coffee" />
      </figure>
      <div className=" flex justify-between w-full items-center pl-2">
        <div className=" ">
          <h2 className="md:card-title">{name}</h2>
          <p>{category}</p>
          <p>{details}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical">
            <button className="btn join-item">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn join-item bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
