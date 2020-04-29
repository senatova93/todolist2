import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import PropTypes from 'prop-types'
class TodoListTasks extends React.Component {
    render = () => {
let taskElements = this.props.tasks.map ( task =>

    <TodoListTask
        task = {task}
        changeStatus = {this.props.changeStatus}
        // title = {task.title}
        // isDone = {task.isDone}
        // priority = {task.priority}
    />)

        return (
            <div className="todoList-tasks">
                {taskElements}
            </div>
        );
    }
}
TodoListTask.propTypes = {
    changeStatus: PropTypes.string
}
export default TodoListTasks;

