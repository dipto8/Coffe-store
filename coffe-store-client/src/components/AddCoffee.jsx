import { data, Link } from "react-router-dom";
import Swal from 'sweetalert2'

export default function AddCoffee() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const photoUrl = form.photoUrl.value;
    const newCoffee = {
      name,
      quantity,
      category,
      details,
      supplier,
      taste,
      photoUrl,
    };
    console.log(newCoffee);

    //send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added',
            icon: 'Success',
            confirmButtonText: 'Cool'
          })
        }
      
      });

  };
  return (
    <div className="bg-[#F4F3F0] p-24  ">
      <h2 className="text-3xl font-bold mb-4 text-center text-orange-900 ">Add COFFEE</h2>
      <Link to='/'><p className=" underline text-xl text-center font-semibold text-orange-800">Home</p></Link>
      <form onSubmit={handleSubmit} className="md:p-12 ">
        {/* form row  coffee name, Available Quantity */}
        <div className="md:flex gap-6  ">
          <label className="form-control md:w-full ">
            <div className="">
              <span className="label-text font-bold">Name</span>
            </div>
            <input
              name="name"
              type="text"
              placeholder="Enter coffee name"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control md:w-full  ">
            <div className="">
              <span className="label-text font-bold"> Quantity</span>
            </div>
            <input
              name="quantity"
              type="text"
              placeholder=" Quantity"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* form row Category, Details*/}
        <div className="md:flex gap-6">
          <label className="form-control md:w-full ">
            <div className="">
              <span className="label-text font-bold">Category</span>
            </div>
            <input
              name="category"
              type="text"
              placeholder="Enter Category"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control md:w-full ">
            <div className="">
              <span className="label-text font-bold">Details</span>
            </div>
            <input
              name="details"
              type="text"
              placeholder="Details"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* form row  Supplier, Taste */}
        <div className="md:flex gap-6">
          <label className="form-control md:w-full ">
            <div className="">
              <span className="label-text font-bold">Supplier</span>
            </div>
            <input
              name="supplier"
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control md:w-full ">
            <div className="">
              <span className="label-text font-bold">Taste</span>
            </div>
            <input
              name="taste"
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* form row photo URL*/}
        <div className="flex mb-4">
          <label className="form-control w-full">
            <div className="">
              <span className="label-text font-bold">Photo URL</span>
            </div>
            <input
              name="photoUrl"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <button className="btn  btn-success w-full">Submite</button>
      </form>
    </div>
  );
}
