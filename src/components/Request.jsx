import React,{useContext} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import API_URL from "../Constants/URL.jsx";
import BookingContext from './BookingContext.jsx';


const formSchema = z.object({
  username: z.string().min(4).max(20),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  date: z.string(),
  pickupaddress: z.string().min(3).max(200),
  dropaddress: z.string().min(3).max(200),
  killometre: z.string().min(0).max(800).optional(),
});

const Request = () => {

  const { showData } = useContext(BookingContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const sendTask = async (data) => {
    try {

      await axios.post(API_URL, {
        username: data.username,
        phone: data.phone,
        date: data.date,
        pickupaddress: data.pickupaddress,
        dropaddress: data.dropaddress,
        kilometre: data.killometre ,
      });

       toast.success("Taxi Request Submitted Successfully 👍"); 
   
      reset();
    } catch (error) {

      console.error("Error submitting form:", error);

       toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://www.shutterstock.com/image-vector/srk-letter-initial-logo-design-260nw-2321722949.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Oops..! Server Issue 😲
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  You can book your trip by phone call..!
                </p>
    
                <p><a  href="tel:7305504500">
                   <div className='flex gap-3 items-center justify-center mt-1 text-sm text-gray-500'>
                   <div>
                   <img src="https://i2.pngimg.me/thumb/f/720/m2K9A0b1H7b1K9A0.jpg" alt="phone-icon" className='w-5' /> 
                  </div>
                  <div>
                  7305504500
                  </div>
                   </div>
                   </a></p>
    
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ))
      reset();
    } finally{
           showData()
    }
  };

  return (
    <div>
      
      <div className="flex justify-center min-h-screen items-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Travels Booking Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit(sendTask)}>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username <span className='text-red-900'>*</span></span>
              </label>
              <input 
                id="username"
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered w-full" 
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600 text-sm">{errors.username.message}</p>
              )}
            </div>
             
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone <span className='text-red-900'>*</span></span>
              </label>
              <input
                id="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
                className="input input-bordered w-full" 
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date <span className='text-red-900'>*</span></span>
              </label>
              <input 
                type="datetime-local" 
                className="input input-bordered w-full" 
                {...register("date")}
              />
              {errors.date && (
                <p className="text-red-600 text-sm">{errors.date.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Pickup Address <span className='text-red-900'>*</span></span>
              </label>
              <input 
                type="text" 
                placeholder="Enter pickup address" 
                className="input input-bordered w-full" 
                {...register("pickupaddress")}
              />
              {errors.pickupaddress && (
                <p className="text-red-600 text-sm">{errors.pickupaddress.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Drop Address <span className='text-red-900'>*</span></span>
              </label>
              <input 
                type="text" 
                placeholder="Enter drop address" 
                className="input input-bordered w-full" 
                {...register("dropaddress")}
              />
              {errors.dropaddress && (
                <p className="text-red-600 text-sm">{errors.dropaddress.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Kilometers (Optional)</span>
              </label>
              <input 
                type="number" 
                placeholder="Enter estimated kilometers" 
                className="input input-bordered w-full" 
                {...register("killometre")}
              />
              {errors.killometre && (
                <p className="text-red-600 text-sm">{errors.killometre.message}</p>
              )}
            </div>

            <button 
              type="submit" 
              className="btn btn-secondary w-full mt-4"
            >
              Book Trip
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Request;
