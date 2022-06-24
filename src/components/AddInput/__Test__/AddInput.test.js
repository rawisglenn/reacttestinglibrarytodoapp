import {screen, render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput';

//AddInput take in a array and hook function -> mocked it
//replace setTodos = {()=>{}}
const mockedTodos = jest.fn();

test("type in input", async ()=>{
    render(<AddInput 
        todos={[]}
        setTodos = {mockedTodos}
    />);
    const inputEl = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputEl,{target:{value:"Buy fruits"}});
    expect(inputEl.value).toBe("Buy fruits");
});


test("type in input", async ()=>{
    render(<AddInput 
        todos={[]}
        setTodos = {mockedTodos}
    />);
    const inputEl = screen.getByPlaceholderText("Add a new task here...");
    const addBtn = screen.getByRole("button",{name:/add/i})
    fireEvent.change(inputEl,{target:{value:"Buy fruits"}});
    userEvent.click(addBtn)
    expect(inputEl.value).toBe("");
});