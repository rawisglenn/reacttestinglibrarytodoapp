import {screen, render, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

//You should not use <Link> outside a <Router>
const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
};

const addTask = (tasks) => {
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    const addBtn = screen.getByRole("button",{name:/add/i});

    tasks.forEach(task => {
        fireEvent.change(inputEl,{target:{value:task}});
        fireEvent.click(addBtn);  
    });

};

beforeEach(()=>{
    render(<MockTodo/>);
});

test("add to task item to list",async ()=>{
    //render(<MockTodo/>);
    //const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    //const addBtn = screen.getByRole("button",{name:/add/i});
    //fireEvent.change(inputEl,{target:{value:"learn coding"}});
    //fireEvent.click(addBtn);
    addTask(["learn coding"]);

    const divTaskEl = screen.getByText("learn coding");
    expect(divTaskEl).toBeInTheDocument();
});

test("add multiple task item to list",async ()=>{
    //render(<MockTodo/>);
    //const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    //const addBtn = screen.getByRole("button",{name:/add/i});

    addTask(["learn coding","eat prata","drink tea"]);
    const divTaskEl = screen.getAllByTestId("divTask");
    expect(divTaskEl.length).toBe(3);

    /*
    fireEvent.change(inputEl,{target:{value:"learn coding"}});
    fireEvent.click(addBtn);
    fireEvent.change(inputEl,{target:{value:"eat prata"}});
    fireEvent.click(addBtn);
    fireEvent.change(inputEl,{target:{value:"drink tea"}});
    fireEvent.click(addBtn);

    const divTaskEl = screen.getByText("learn coding");
    expect(divTaskEl).toBeInTheDocument();

    const divTaskEl2 = screen.getByText("eat prata");
    expect(divTaskEl2).toBeInTheDocument();

    const divTaskEl3 = screen.getByText("drink tea");
    expect(divTaskEl3).toBeInTheDocument();
    */
});

test("click task to complete task",async ()=>{

    addTask(["learn coding"]);
    const divTaskEl = screen.getByText("learn coding");
    fireEvent.click(divTaskEl);
    expect(divTaskEl).toHaveClass("todo-item-active");

});