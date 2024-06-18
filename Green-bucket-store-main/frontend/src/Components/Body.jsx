import React from "react";
import Corosel from "./Corosel";
import Category from "./Category";
import Home from "./Home";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Dairy from "./Dairy";
import Rice from "./Rice";
import Masalas from "./Masalas";
import Oilsandghee from "./Oilsandghee";
import Munchies from "./Munchies";
import Sweettooth from "./Sweettooth";
import Colddrinks from "./Colddrinks";
import Biscuits from "./Biscuits";
import Frozenfood from "./Frozenfood";
import Meatandseafood from "./Meatandseafood";
import UserCart from "../UserCart";
import LoginSignup from "../LoginSignup";
import ProductSingle from "../Single/ProductSingle";
import Orders from "./Orders";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Privacy from "../Pages/Privacy";
import Termsandconditions from "../Pages/Termsandconditions";
import UserProfile from "../UserProfile";
import UpdateProfile from "../UpdateProfile";

import {Route,Routes} from "react-router"
const Body=()=>{
    return(<>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/loginsignup" element={<LoginSignup/>}></Route>
            <Route path="/corosel" element={<Corosel/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
            <Route path="/vegetables" element={<Vegetables/>}></Route>
            <Route path="/fruits" element={<Fruits/>}></Route>
            <Route path="/dairy" element={<Dairy/>}></Route>
            <Route path="/rice" element={<Rice/>}></Route>
            <Route path="/masalas" element={<Masalas/>}></Route>
            <Route path="/oilsandghee" element={<Oilsandghee/>}></Route>
            <Route path="/munchies" element={<Munchies/>}></Route>
            <Route path="/sweettooth" element={<Sweettooth/>}></Route>
            <Route path="/colddrinks" element={<Colddrinks/>}></Route>
            <Route path="/biscuits" element={<Biscuits/>}></Route>
            <Route path="/frozenfood" element={<Frozenfood/>}></Route>
            <Route path="/meatandseafood" element={<Meatandseafood/>}></Route>
            <Route path="/product/:pid" element={<ProductSingle/>}></Route>
            <Route path="/cart" element={<UserCart/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/FAQ" element={<FAQ/>}></Route>
            <Route path="/privacypolicy" element={<Privacy/>}></Route>
            <Route path="/termsandconditions" element={<Termsandconditions/>}></Route>
            <Route path="/user/accountsettings" element={<UserProfile/>}></Route>
            <Route path="/update-profile" element={<UpdateProfile/>}></Route>
        </Routes>
    </>)
}
export default Body