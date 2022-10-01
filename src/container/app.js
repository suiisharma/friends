import React,{Component}  from "react";
import Cardlist from "../components/cardlist";
import Searchbox from "../components/searchbox";
import Scroll  from "../components/scroll";
class App extends Component {
    constructor(){
        super()
        this.state={
            Robots:[],
            Searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({Robots:users})})  
    }
    onSearchchange=(event)=>{
        this.setState({Searchfield:event.target.value})
       
    }
   render (){
    const {Robots,Searchfield}=this.state;
    const filterRobots = Robots.filter(robots=>{
        return robots.name.toLowerCase().includes(Searchfield.toLowerCase());
    })
    if(!Robots.length){
        return <img  src="loading.png" alt="Loading "></img>;
    }
    else {

        return (
            
            <div className="tc ">
               <img className="ma5" src="friends.png" alt="FRIENDS"></img>
               <Searchbox Searchchange={this.onSearchchange}></Searchbox>
                <Scroll>
                <Cardlist Robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
   } 
}
export default App;