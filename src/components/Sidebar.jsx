
import { useEffect, useState } from "react";
import "../style/sidebar.css";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import UserInfo from "./UserInfo";


export default function Sidebar (props) {
    const [isLogged, setIsLogged] = useState();


    


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            user ? setIsLogged(true) : setIsLogged(false);
          });

    }, [props.shownStatus]);
    

    return(
        <div className={`sidebar ${props.shownStatus ? "showSide" : ""}`}>
            
            {isLogged ? <UserInfo /> : <><Link to="/LoggingIn">Log In</Link> <Link to="/">Home Page</Link></>}

        </div>
    )
}