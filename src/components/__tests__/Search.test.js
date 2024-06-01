import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should render the Body Component with Search", async()=>{
    await act(async ()=>
        render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    const searchBtn = screen.getByRole("button", { name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: { value:"Pizza"}});
    fireEvent.click(searchBtn);

    // screen should load 1 card
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
});