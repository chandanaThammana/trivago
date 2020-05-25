import React,{useState,useEffect} from 'react';
import './Movie.css';
import Navbar from './Navbar';
import Map from './Map'
const Movies=()=>{
    const [movies,setMovies]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);
    const [input, setInput] = useState('')
    useEffect(()=>{
        fetch('https://www.omdbapi.com/?s=telugu&apikey=4a3b711b')
        .then(response => response.json())
        .then(json => {
            setTimeout(()=>{
                const {Search,totalResults}=json
                setMovies([...Search])
                 setIsLoaded(true);
            },2000)                              
        })
    },[]);
    const inputHandler = (e) => {
        const { value } = e.target;
        setInput(value);
    }
    const Search = () => {
        fetch(`https://www.omdbapi.com/?s=${input}}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })

    }
    return(
        <>
        <Navbar inputHandler={inputHandler} Search={Search}></Navbar>
        {!isLoaded && (<img src="https://i.pinimg.com/originals/70/48/6f/70486fce1414047536eed4151e84b48f.gif"/>)}
    
    
        <Map movies={movies}></Map>
        </>
    )
}
export default Movies