import {render, screen} from '@testing-library/react';
import Header from '../Header';

test("header render prop, element with text",()=>{
    render(<Header title="My Header"/>);
    const headerEl = screen.getByText(/My Header/i);
    expect(headerEl).toBeInTheDocument();
});

/*
//need to be specific, else get 2nd header too and throw error
test("header render prop, heading with text",()=>{
    render(<Header title="My Header"/>);
    const headerEl = screen.getByRole("heading", {name:"My Header"});
    expect(headerEl).toBeInTheDocument();
});


//with title, cannot get role
test("presence of subheader with title",()=>{
    render(<Header title="My Header"/>);
    const headerEl = screen.getByTitle(/pokemon/);
    expect(headerEl).toBeInTheDocument();
});


test("header render prop, with testid",()=>{
    render(<Header title="My Header"/>);
    const headerEl = screen.getByTestId("header-1");
    expect(headerEl.textContent).toBe("My Header");
});

//with title, cannot get role
test("using query instead of get for negative check",()=>{
    render(<Header title="My Header"/>);
    const headerEl = screen.queryByText(/dog/);
    expect(headerEl).not.toBeInTheDocument();
});

//get all header
test("get all headers",()=>{
    render(<Header title="My Header"/>);
    const headerEls = screen.getAllByRole("heading");
    expect(headerEls.length).toBe(2);
});

*/