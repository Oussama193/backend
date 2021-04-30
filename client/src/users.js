import React, {Component} from "react"
import axios from "axios"
class Users extends Component{
constructor (props){
  super(props)
this.state={
 users:[]
}
}
show=()=>{axios.get("http://localhost:5000/facebook/showusers").then((res)=>this.setState({users:res.data}))}
render(){
 
 return(
   <div>
   <button onClick={()=>console.log(this.state.users)} > show </button>
    </div>
 )
  
}
}
export default Users