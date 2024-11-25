import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import API_URL from '../Constants/URL.jsx';
import BookingContext from './BookingContext.jsx';

const Table = () => {

  const { bookings, loading, error } = useContext(BookingContext);
 

 

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} T ${hours}:${minutes}`;
  }

  

  return (
    <div>
      <div className="text-center pt-5 pb-2">
        <h1>
          Travel Requests{" "}
          <span className="bg-red-400 p-2 rounded-md text-white font-semibold text-sm mx-2">
            {bookings.length}
          </span>
        </h1>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center pt-5">
          <p className="text-gray-500 font-mono">Loading requests...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center pt-5">
          <p className="text-red-500 font-mono">{error}</p>
        </div>
      )}

      {/* Table Content */}
      {!loading && !error && bookings.length > 0 ? (
        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr className="bg-base-200" key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{formatDate(item.date.slice(0, 16))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Empty State
        !loading && !error && (
          <div className="text-center pt-5">
            <p className="text-gray-500 font-mono">No travel requests found.</p>
          </div>
        )
      )}
    </div>
  );
};

export default Table;
