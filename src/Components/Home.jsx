import useFetch from "./useFetch";
import Animeslist from "./Animeslist";

const Home = () => 
{
    let {data : animes , pending , error } = useFetch("https://api.jikan.moe/v4/anime");

    return ( 
        <div>

            {pending &&
            <center>
                <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </center>
            }

            {animes && <Animeslist animes = {animes}/> }

        </div>
     );
}

export default Home;