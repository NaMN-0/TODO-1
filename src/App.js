import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      msg : "",
      taskList : []
    }

  }

  newTask = (event) => {
    this.setState({
      msg : event.target.value
    })
  }

  putTask = (event) => {
    console.log(this.state.msg)
    this.setState({
      taskList : [...this.state.taskList,this.state.msg]
    })
    console.log(this.state.taskList)
    event.preventDefault()
  }

  delete = () => {
    console.log("delete");
    console.log(this);
  }

  render() {
      return (
          <div className='App'>
            <h1>TO-DO List</h1>
            <form action="" onSubmit={this.putTask}>
              <input type="text" name="data" onChange={this.newTask}/>
              <button action="submit">Add</button>
            </form>
            <br/>
            <div>
              {this.state.taskList.map((task => <div>
                {/* <button style={style1} onClick={this.delete}>X</button> */}                
                <Task style={style1} data={task}/>
                </div>))}
            </div>
 
          </div>
      )
  }
}

const style1 = {
  display: "inline"
}

export default App;
