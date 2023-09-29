import './index.css'

function ListItems(props){
    const {value}=props
    return(
       <li className='todo-list-items'>
        <div>
        <input type="checkbox"className='todo-checkbox'/>
        <label>{value}</label>
        </div>
        {checked?(<p className='todo-checked'>complete</p>):''}
       </li>  
    )
}

export default ListItems