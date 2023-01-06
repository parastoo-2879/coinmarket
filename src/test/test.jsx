import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function Test(){
  const[nprice,setNprice]=useState([1,1,1,1,1])
  const [oprice,setOprice]=useState([0,0,0,0,0])
  
    useEffect(()=>{
    
      fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5")
      .then(para=>para.json())
      .then(data=>{
        setOprice(nprice)
      setNprice(data)
      console.log(oprice)
      console.log(nprice)
      }) 
     
     },);
    

  // function compare(x,y){
  //   if(x>y){
  //     console.log(x + ">" + y)
  //   }else{
  //     console.log(x + "<" + y)
  //   }
  // }
  
  



    return(
  
      nprice.map((val,item)=>{
        return(
          val >oprice[item] ? <span className="text-success">{val}</span> :<span className="text-danger">{val}</span>
        )
      })
      

    )
  }
