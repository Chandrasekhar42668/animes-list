// import heart from './logo/heart.png'

import { useEffect, useState } from "react";
import Wishlist from "./Wishlist";

const Animeslist = ( {animes} ) => 
{

    const [wish , setwish] = useState([]);

    useEffect( ()=>{
        if(localStorage.getItem("wish")==null)    // if wish array is not present before
        {
        localStorage.setItem( "wish" , "[]" );    // then nly u add wish array
        }
    } , [] )

    let handleWishlist = (id)=>
    {
        let x = localStorage.getItem("wish");
        x = JSON.parse(x);

        if(x.includes(id)===false)          // if id is not present then push 
        {
        x.push(id);
        x = JSON.stringify(x);
        localStorage.setItem( "wish" , x );
        // console.log(x);
        alert("item is added to wishlist");
        }
        else
        {
          let i = x.indexOf(id);
          x.splice(i , 1);
          x = JSON.stringify(x);
          localStorage.setItem("wish" , x);
          alert("item is removed from wishlist");
        }        
    }

    return ( 
             <div className="animes-list">
            {
                animes.map( (anime)=>
                {
                    return (
                            <div key={anime.mal_id} className="anime">
                            <img src={anime.images.jpg.large_image_url} alt="poster not found" /> <br />
                            <h1> Title : {anime.title} </h1>
                            <h1> Type : {anime.type}</h1>
                            <h1> Year : {anime.year}</h1>
                            <button onClick={()=>{handleWishlist(anime.mal_id)}}>
                                &#10084;
                            </button>
                            {/* <iframe src={anime.trailer.embed_url} /> <br /> */}
                            </div>
                    )
                } )
            }
            </div>
     );
}

export default Animeslist;