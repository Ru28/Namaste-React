import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
// import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props Data",()=>{
   render(<RestaurantCard resData={MOCK_DATA}/>);

   const name = screen.getByText("Pizza Hut");

   expect(name).toBeInTheDocument();
})

it("Should render RestaurantCard component with Promoted Label",()=>{
//    render(<withPromotedLabel/>);

//    const Promoted = screen.getByText("Pizza Hut");

//    expect(Promoted).toBeInTheDocument();
})