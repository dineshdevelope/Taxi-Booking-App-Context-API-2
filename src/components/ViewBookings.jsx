import React, { useContext } from "react";
import BookingContext from "./BookingContext";

const ViewBookings = () => {
  const { bookings, loading, error, deleteBooking, updateBooking,showData } = useContext(BookingContext);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}-${month}-${year} T ${hours}:${minutes}`;
  };

  return (
    <div className="px-5">
      <div className="pt-5">
        <p className="text-center font-serif font-semibold">Travel Booking List</p>
      </div>

      {loading ? (
        <div className="text-center pt-5">
          <p className="text-gray-500 font-mono">Loading bookings...</p>
        </div>
      ) : error ? (
        <div className="text-center pt-5">
          <p className="text-red-500 font-mono">{error}</p>
        </div>
      ) : bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {bookings.map((item, index) => (
            <div
              className="max-w-sm p-6 my-5 bg-white border border-pink-300 shadow-orange-600 border-x-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={item._id}
            >
              <div>
                <div className="flex sm:flex-none items-center justify-evenly">
                  <p className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {index + 1}
                  </p>
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.username}
                  </h5>
                  <a
                    href={`tel:+91${item.phone}`}
                    className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                  >
                    {item.phone}
                  </a>
                </div>
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-x-auto">
                  <p>Date: {formatDate(item.date.slice(0, 16))}</p>
                  <p>Pickup Address: {item.pickupaddress}</p>
                  <p>Drop Address: {item.dropaddress}</p>
                  <p>Distance (km): {item.kilometre || "N/A"}</p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => updateBooking(item._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteBooking(item._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center pt-5">
          <p className="text-gray-500 font-mono">No bookings available.</p>
        </div>
      )}
    </div>
  );
};

export default ViewBookings;
