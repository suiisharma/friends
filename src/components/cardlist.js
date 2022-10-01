import React from "react";
import Card from "./card";
const Cardlist =({Robots})=>{
 const carcompoments=Robots.map((user ,i )=>{
    return (<Card key={Robots[i].id} id={Robots[i].id} name={Robots[i].name} username ={Robots[i].username} email={Robots[i].email}/>);
    
 });
 return (<div>
    {carcompoments}
 </div>
 );
}
export default Cardlist;