import { useEffect, useState } from "react";

const useFetch = (request) => 
{
   const[data , setdata] = useState(null);
   const[pending , setpending] = useState(true);
   const[error , seterror] = useState(null);

   useEffect( ()=>{

    setTimeout(() => {
        
        fetch(request)
        .then( (response)=>{
            if(response.ok === false) 
            {
                throw Error("404 data not found try another rersourse")
            }
            return response.json() } )
        .then( (recievedData)=>{setdata(recievedData.data); setpending(false)})
        .catch( (error)=>{ seterror(error.message); setpending(false)})

    }, 1000);
   } , [] )

   return{ data , pending , error };
}

export default useFetch;