export default function CoffeeCard({ coffee }) {
  const { name, quantity, category, details, supplier, taste, photoUrl } =
    coffee;
  return (
    <div className="card card-side bg-base-100 shadow-md md:p-4">
      <figure>
        <img src={photoUrl} alt="Coffee" />
      </figure>
      <div className=" flex justify-between w-full items-center pl-2">
        <div className=" ">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{details}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
