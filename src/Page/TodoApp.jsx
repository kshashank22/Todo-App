import {Component} from 'react'
import './TodoApp.css'
import ListItems from '../Components/ListItems'

class TodoApp extends Component{

  constructor(){
    super();
    this.state={task:'',taskData:[{list:'Learn React',check:false}]}
  }

  onChangeInputValues=(event)=>{
        this.setState({task:event.target.value})
  }

  getDataFromInput=(event)=>{
    const{task}=this.state
      event.preventDefault()
      if (task!==""){
        this.setState({
            task:'',
            taskData:[...this.state.taskData,{list:this.state.task,check:false}]
          })
      } 
  }

  onChangeCheckbox=(each)=>{
    this.setState({
      taskData:this.state.taskData.map((items)=>
          items.list===each.list?{...items,check:!items.check}:items
        )}
    )
  }

  

  render(){
    const {task,taskData}=this.state
    return(
      <div className='todo-container'>
        <h1 className='todo-heading'>Todo App</h1>
        <form onSubmit={this.getDataFromInput} className='todo-form'>
           <input type="text" className='todo-input' placeholder='Your Todo' value={task} onChange={this.onChangeInputValues}/>
           <br/>
        <button type='submit' onClick={this.getDataFromInput} className='todo-button'>Add On</button>
        <ul>
          {taskData.map((each,index)=>(
            <li key={index} className='todo-list-items'>
            <div>
            <input type="checkbox" className='todo-checkbox' onChange={()=>this.onChangeCheckbox(each)}/>
            <label>{each.list}</label>
            </div>
            {each.check?(<p className='todo-checked'>completed</p>):''}
           </li> 
          ))}
        </ul>
        </form>      
      </div>
    )
  }
}

export default TodoApp