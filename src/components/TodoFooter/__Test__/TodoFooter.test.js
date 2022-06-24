import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return(
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
};

test("render amt of incomplete task",()=>{
    //You should not use <Link> outside a <Router>
    //render(<TodoFooter numberOfIncompleteTasks="5"/>);
    render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
    const taskEl = screen.getByText(/5 tasks left/i);
    expect(taskEl).toBeInTheDocument();
});


test("render singular task when 1",()=>{
    //You should not use <Link> outside a <Router>
    //render(<TodoFooter numberOfIncompleteTasks="5"/>);
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const taskEl = screen.getByText(/1 task left/i);
    expect(taskEl).toBeInTheDocument();
});