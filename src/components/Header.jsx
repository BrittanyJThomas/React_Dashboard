import React from "react";
import Dates from "./Dates";
import Time from "./Time";
const currentTime = new Date().getHours();
console.log(currentTime);

function Header(){
  let statement;
if(currentTime < 12 ){
    statement = "Good Morning";
    } else if(currentTime < 18){
      statement = "Good Afternoon";
    } else {
      statement = "Good Evening"
    }    
return(
<div>
<header> 
<h1>{statement} Brittany</h1> 
<Dates />
<Time />
</header>
</div>
);
}
export default Header;
