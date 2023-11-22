import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import "../style/userInfo.css"
import { Link } from "react-router-dom";


export default function UserInfo() {
    

    const logOut = async () => {
        try {
            signOut(auth);
            window.location.reload(true);
        } catch (err) {
            console.error(err);
        }
    }
    

    return(
        <div className="userInfo">
            <div>
                <img src={auth?.currentUser?.photoURL} alt="UserImage" />
                {auth?.currentUser?.displayName}
                <Link to="/">Home Page</Link>
                <Link to="/UploadListing">Upload A Product</Link>
                <button onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}