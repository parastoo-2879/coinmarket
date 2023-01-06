// import { useEffect } from "react"
import { useState } from "react"
import './master.css'




export default function Table(){

  const[resp,setResp]=useState([])
 

      fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",{
  headers:{
    'X-CMC_PRO_API_KEY':"dcaae1a3-93e1-44c8-8922-8fa16eb7463d"
  }
}).then(response=>response.json())
.then(res=>{
  let Mydata = res.data
  setResp(Mydata)
  console.log(resp)
  })
  

  return(

    <section id="table">
{
resp.map((val)=>{

   return(
    <div key={val.id} className="row p-0 m-0 tableRows ">
    
    <span className="col-1">{val.cmc_rank}</span>  

    <span className="col-2 col-lg-1"><span>{val.name}</span> <em>{val.symbol}</em> </span>  

 <span className=" col-4 col-lg-2 price text-success">${(val.quote.USD.price).toFixed(4)}</span> 

   <span className="col-4 col-lg-2 ch1h">{val.quote.USD.percent_change_1h}%</span>  

   <span className="d-none d-lg-flex col-lg-2 ch24h">{val.quote.USD.percent_change_24h}%</span>  

   <span className="d-none d-lg-flex col-lg-2 ch7d">{val.quote.USD.percent_change_7d}%</span>  

   <span className="d-none d-lg-flex col-lg-2">{val.quote.USD.volume_24h}</span>  
    
    </div>
   ) 
})}
    </section>
  )
}

