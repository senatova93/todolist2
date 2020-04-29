import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React. createRef()
    };
    state = {
        error: false,
        title: ""
    }

    onAddTaskClick = () => {
        let newText = this.state.title

        if (newText !== ''){
            this.props.addTask(newText)
            this.setState({error:false, title: ""})
        } else {
            this.setState({error:true})
        }

    }
    OnTitleChanged = (e) => {this.setState({
        error:false,
        title: e.currentTarget.value})}
    onKeyPress = (e) => {if (e.key === 'Enter') {
        this.onAddTaskClick()
    }}



    render = () => {
        let error = this.state.error === true ? "error": ""
        return ( <div className = "todoList-header">

            <h3 className="todoList-header__title">What to Learn</h3>

                <div className="todoList-newTaskForm">

                    <input
                        value = {this.state.title}
                        onKeyPress= {this.onKeyPress}
                        onChange={this.OnTitleChanged}
                        className= {error}
                        ref={this.newTaskTitleRef}
                        type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

