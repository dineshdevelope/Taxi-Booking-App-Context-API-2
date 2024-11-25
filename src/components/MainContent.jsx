import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div>
      <div className="bg-gray-100 font-sans">
        {/* Hero Section */}
        <section id="home" className="bg-gray-100 py-5 sm:py-10 px-3">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-red-600">Fast & Reliable Taxi Service</h2>
              <p className="mt-4 text-gray-800">Get to your destination safely and on time with our trusted drivers and comfortable vehicles.</p>
              <div className="mt-6 flex space-x-4">
                <Link to={"/makerequest"} className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700">
                  Book Now
                </Link>
                <a href="tel:+917305504500" className="px-6 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900">
                  Contact Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src="https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2025HYC191926665_01_1280_W6H.png" alt="Taxi Image" className="rounded-lg shadow-lg mx-auto" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-5 sm:py-10 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-600">Our Services</h2>
            <p className="mt-4 text-gray-800">We offer a variety of services to meet your transportation needs.</p>
            <div className="flex flex-wrap mt-5">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                  <h3 className="text-2xl font-semibold text-red-600">Airport Transfers</h3>
                  <p className="mt-2 text-gray-700">Safe and convenient transportation to and from the airport.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                  <h3 className="text-2xl font-semibold text-red-600">City Rides</h3>
                  <p className="mt-2 text-gray-700">Fast and reliable rides within the city.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                  <h3 className="text-2xl font-semibold text-red-600">Hourly Rentals</h3>
                  <p className="mt-2 text-gray-700">Hire our taxis for a flexible and comfortable travel experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-gray-100 py-1 sm:py-3 px-1">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-600">About Us</h2>
            <p className="mt-4 text-gray-800">We have been providing reliable taxi services for over 10 years.</p>
            <p className="mt-4 text-gray-800">Our team is dedicated to offering fast and safe rides to our customers at any time of day.</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-10 bg-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-6 text-red-600">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-6 mb-4">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Affordable Rates</h3>
              <p className="text-gray-800">We offer competitive rates and transparent pricing with no hidden fees.</p>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-4">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Safe and Reliable</h3>
              <p className="text-gray-800">Our drivers are experienced and background-checked for your safety.</p>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-4">
              <h3 className="text-xl font-semibold mb-2 text-red-600">24/7 Service</h3>
              <p className="text-gray-800">Available round the clock, we are here whenever you need a ride.</p>
            </div>
          </div>
        </section>

        <ContactForm />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p>&copy; 2024 S.R.K Travels. All rights reserved.</p>
          <p>Contact us at <a href="mailto:srktravels97@gmail.com" className="underline text-red-400">srktravels97@gmail.com</a></p>
        </footer>
      </div>
    </div>
  );
};

export default MainContent;
