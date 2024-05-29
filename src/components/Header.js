import { LOGO_URL } from "../../utils/constant";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  const [btnName,setBtnName] = useState("Login");
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnName] = > called everytime btnName is updated

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  useEffect(()=>{
  },[btnName]);

  // Subscribing to the store using a Selector

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);  

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus? "✅":"🉐"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
            <button className="login" onClick={()=>{
                btnName=== "Login" ? setBtnName("Logout"):setBtnName("Login")
            }}>{btnName}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;