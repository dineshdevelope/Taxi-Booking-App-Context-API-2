import Header from "./components/Header"
import Request from "./components/Request"
import { Toaster } from "react-hot-toast"
import Table from "./components/Table"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import ViewBookings from "./components/ViewBookings"
import MainContent from "./components/MainContent"
import Logout from "./components/Logout"
import { BookingProvider } from "./components/BookingContext"



function App() {
 
  return (
    <>
    <BookingProvider>
      
      <Router>
      <Header />
      <Toaster />
     
      <Routes>
      <Route path="/" element={<MainContent />} /> 
      <Route path="/makerequest" element={<Request />} />
      <Route path="/viewrequest" element={ <Table /> } />
      <Route path="/viewbookings" element={ <ViewBookings /> } />
      <Route path="/logout" element={ <Logout /> } />



      </Routes>
     
      </Router>

    </BookingProvider>
    </>
  )
}

export default App
