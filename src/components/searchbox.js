import React from "react";
const Searchbox =({Searchfield,Searchchange})=>{
    return (
        <div className="pa2 ">

            <input className="bg-light-blue b5 b--green   pa3" type="search" 
            placeholder="Search Robots"
            onChange={Searchchange}
             ></input>
                </div>
    );
}
export default Searchbox;