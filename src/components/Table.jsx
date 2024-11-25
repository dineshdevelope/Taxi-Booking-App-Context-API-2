import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../Constants/URL.jsx';

const Table = () => {
  const [formdata, setFormdata] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const showData = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error
    try {
      const res = await axios.get(API_URL);
      setFormdata(res.data);
    } catch (err) {
      setError("Failed to load travel requests. Please try again.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} T ${hours}:${minutes}`;
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <div className="text-center pt-5 pb-2">
        <h1>
          Travel Requests{" "}
          <span className="bg-red-400 p-2 rounded-md text-white font-semibold text-sm mx-2">
            {formdata.length}
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
      {!loading && !error && formdata.length > 0 ? (
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
              {formdata.map((item, index) => (
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
