import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React. createRef()
     }

    state = {
    tasks: [
        {title: "JS", isDone: true, priprity: "high"},
        {title: "HTML", isDone: true, priority: "low"},
        {title: "CSS", isDone: true, priority: "low"},
        {title: "React", isDone: false, priority: "high"}
    ],
    filterValue: "All"};


    addTask = (newText) => {

        let newTask =
            {title: newText,
             isDone: true,
             priority: "low"};
        let newTasks = [...this.state.tasks,newTask]
        this.setState({tasks:newTasks})

    }

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        })
    }
    changeStatus = (task,isDone) => {
        let newTasks = this.state.tasks.map (t => {
        if (t===task) {
            return {...t,isDone:isDone}
        }
        return t
    })
        this.setState({tasks:newTasks})
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask = {this.addTask}/>
                    {/*<div className = "todoList-header">*/}

                    {/*    <h3 className="todoList-header__title">What to Learn</h3>*/}

                    {/*    <div className="todoList-newTaskForm">*/}

                    {/*        <input ref = {this.newTaskTitleRef} placeholder="New task name"/>*/}
                    {/*        <button onClick={this.onAddTaskClick}>Add</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <TodoListTasks
                        changeStatus = {this.changeStatus}
                        tasks = {this.state.tasks.filter(t => {
                        switch (this.state.filterValue) {
                            case 'Active':
                                return t.isDone === false
                            case 'Completed':
                                return t.isDone === true
                            default:
                               return true;

                        }
                    })}/>
                    <TodoListFooter changeFilter = {this.changeFilter}
                                    filterValue = {this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

