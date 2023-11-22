import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style/navbar.css';
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";




export default function Navbar() {
    const [isShown, setIsShown] = useState(false);


    useEffect(() => {
        const handleClickOutside = (e) => {
            if(!refOne.current.contains(e.target) && !refTwo.current.contains(e.target)) {
                setIsShown(false);
            } else if (!refOne.current.contains(e.target) && refTwo.current.contains(e.target)) {
                setIsShown(!isShown);
            }
        }
        document.addEventListener("click", handleClickOutside, true);
    }, [isShown]);

    const refOne = useRef(null);
    const refTwo = useRef(null);

    return (
        <>
            <nav>
                <Link to="/">CompanyName</Link>
                <button ref={refTwo} className={`buttonDefault ${isShown ? "moveButton" : ""}`}><FontAwesomeIcon icon={faBars}/></button>
            </nav>
            <div ref={refOne}>
                <Sidebar shownStatus={isShown}/>
            </div>

        </>
    )
}