import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    state = {

    }
    onIsDoneChanged = (event) => {
        this.props.changeStatus(this.props.task,event.currentTarget.checked)
    }

    render = () => {
        let TodoListTasks = this.props.task.isDone === true ? "todoList-task done" : "todoList-task"
        return (
                <div className={TodoListTasks}>
                    <input type="checkbox"
                           onChange={this.onIsDoneChanged}
                           checked={this.props.task.isDone}/>
                    <span>{this.props.task.title}</span>,
                    <span> priority: {this.props.task.priority}</span>
                </div>
        );
    }
}

export default TodoListTask;

