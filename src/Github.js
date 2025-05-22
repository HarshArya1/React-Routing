import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
export default function Github(){
    // const data=useParams();// provides us an object
    const {name}=useParams();
    const [Profile,setProfile]=useState(null);
    const navigate=useNavigate();
    async function fetchuser() {
        const response= await fetch(`https://api.github.com/users/${name}`);
        const data= await response.json();
        setProfile(data);

    }
    useEffect(()=>{
        fetchuser();
    },[name])
    return(
        <>
        <h1>My GitHub Profile</h1><br></br>
        <button onClick={()=> navigate(`/Github/rohit`)}>View Rohit's Profile</button>
        <button onClick={()=> navigate(`/Github/rohan`)}>View Rohan's Profile</button>
        <button onClick={()=> navigate(`/Github/HarshArya1`)}>View HarshArya's Profile</button>
        <button onClick={()=> navigate(`/Github/Alex`)}>View Alex's Profile</button>
        <button onClick={()=> navigate(`/Github/roman`)}>View Roman's Profile</button>
        <button onClick={()=> navigate(`/Github/mask`)}>View Mask's Profile</button>
        {/* Display the user data */}
        <div>
            {/* ? kyoki useeffect toh sabse last me chaega lekin jsx avtar vale image ko acces karne ka try karega jo ko profile hi null hai so ? se agar profile null ho ya exist karta ho tab hi acess karna */}
            <img src={Profile?.avatar_url}/>
            <h2>{Profile?.login}</h2>
        </div>
        </>
    )
}