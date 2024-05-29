import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


// Chunking
// Code Splitting
// Dynamic Bundling
// On Demand Loading
// Lazy Loading
// dynamic import

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
  const [userName,setUserName] = useState();

  // authentication
  useEffect(()=>{
    // Make an API call and send username and password
    const data = {
      name: "Rupesh Virani"
    }
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element:<Suspense fallback={<Shimmer/>}> <About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<Shimmer/>}> <Grocery /> </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path:"/contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
