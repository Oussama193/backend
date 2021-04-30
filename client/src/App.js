import React, {Component} from "react"
import axios from "axios"
import Users from "./users"
class App extends Component{
constructor (props){
  super(props)
this.state={
  name:"",
  num:""
}
}
change=(e)=>{ 
  this.setState({[e.target.name]:e.target.value})
}
add=(data)=>{
axios.post("http://localhost:5000/facebook/adduser",data).then(()=>this.setState({name:"",num:""})).catch(error=>console.log(error))
}
render(){
 
 return(
   <div>
   <input onChange={(e)=> this.change(e)} name="name" placeholder="name" value={this.state.name} />
  <input onChange={(e)=> this.change(e)}  name="num" placeholder="number" value={this.state.num} />
   <button onClick={()=>this.add(this.state)} > Add </button>
   <Users />
   </div>
 )
  
}
}
export default App