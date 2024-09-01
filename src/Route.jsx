import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import App from "./App";



function AppRouters(){
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<App/>} />
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/Dashboard/:title/id/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
      
        </>
    )

};
export default AppRouters;