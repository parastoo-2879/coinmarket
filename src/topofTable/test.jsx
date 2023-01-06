import React, {useEffect,useState} from 'react'

function Test() {

  const [myData , setMyData ] = useState({
      newData : [],
      oldData : []
  })


  useEffect(() => {
      const getData = async () => {
          const res = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
              headers: {'X-CMC_PRO_API_KEY': "dcaae1a3-93e1-44c8-8922-8fa16eb7463d"}
          })
          const data = await res.json()
          setMyData({
              newData: data.data,
              oldData : []
          })
          setTimeout(()=>{
              setMyData({
                  newData: data.data,
                  oldData : myData.newData
              })
              console.log(myData)
          },10000)
      }
  }, [])




  return (
      <div className="col-12 ">

      </div>
  );
}
