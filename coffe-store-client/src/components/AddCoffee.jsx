export default function AddCoffee() {
  return (
    <div className="bg-[#F4F3F0] p-24 mx-auto">
      <h2 className="text-3xl font-bold mb-4">Add Coffe</h2>
      <form >
            <div className="flex  flex-col gap-2">
                <div className="join">
                    
                <input
                    className="input input-bordered join-item md:w-1/3"
                    placeholder="Enter coffee name"
                />
                <button className="btn join-item rounded-r-full">Add</button>
                </div>

                <div className="join">
                <input
                    className="input input-bordered join-item md:w-1/3"
                    placeholder="Enter coffee supplier"
                />
                <button className="btn join-item rounded-r-full">Add</button>
                </div>

                <div className="join">
                <input
                    className="input input-bordered join-item md:w-1/3"
                    placeholder="Enter coffee category"
                />
                <button className="btn join-item rounded-r-full">Add</button>
                </div>

                <div className="join">
                <input
                    className="input input-bordered join-item md:w-1/3"
                    placeholder="Enter photo URL"
                />
                <button className="btn join-item rounded-r-full">Add</button>
                 </div>
            </div>
      </form>
    
    </div>
  );
}
