import {screen, render, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../Followers';


const MockFollowers = () => {
    return(
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    );
};

beforeEach(()=> {
    //jest.mock("../../../__mocks__/axios");
});

//Warning: You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. 
test("render 1 follower", async ()=>{
    render(<MockFollowers/>);
    const followerEl = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerEl).toBeInTheDocument();
});

/*
test("render 5 followers",async ()=>{
    const followerEls = await screen.findAllByTestId(/follower-item/i);
    expect(followerEls.length).toBe(5);
});
*/