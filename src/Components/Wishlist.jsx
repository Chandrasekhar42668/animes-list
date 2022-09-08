import { useEffect, useState } from "react";
import Animeslist from "./Animeslist";
import useFetch from "./useFetch";

const Wishlist = () => {
    
    let {data : animes , pending , error } = useFetch("https://api.jikan.moe/v4/anime");

    const[wish , setwish] = useState(null);
    
    useEffect(()=>
    {
    let w = localStorage.getItem("wish");
    w = JSON.parse(w);
    setwish(w);

    } , [] )

    return ( 
        <div>
            {pending &&
            <center>
                <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </center>
            }

            {animes && <Animeslist animes = {animes.filter((anime)=>{return wish.includes(anime.mal_id)})}/> }
        </div>
     );
}

export default Wishlist;