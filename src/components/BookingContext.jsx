import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import API_URL from "../Constants/URL";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch bookings
  const showData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setBookings(response.data);
    } catch (err) {
      setError("Failed to fetch bookings. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a booking
  const deleteBooking = async (_id) => {
    try {
      await axios.delete(`${API_URL}/${_id}`);
      toast.success("Booking deleted successfully!");
      setBookings((prevData) => prevData.filter((item) => item._id !== _id));
    } catch (err) {
      toast.error("Failed to delete booking.");
      console.error("Error deleting booking:", err);
    }
  };

  // Update a booking
  const updateBooking = async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedData);
      toast.success("Booking updated successfully!");
      setBookings((prev) =>
        prev.map((booking) => (booking._id === id ? { ...booking, ...updatedData } : booking))
      );
    } catch (err) {
      toast.error("Failed to update booking.");
      console.error("Error updating booking:", err);
    }
  };

   useEffect(() => {
    showData();
  },[]);
 

  return (
    <BookingContext.Provider
      value={{ bookings, loading, error, showData, deleteBooking, updateBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
