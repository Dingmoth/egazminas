import { useNavigate } from "react-router-dom";
import { googleProvider, auth, db } from "../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";


export default function SignIn () {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        navigate("/");
    };

    const signInUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value);
        navigate("/");
    };
    
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (err) {
            console.error(err)
        }
    };
    return (
        <div>
            <form onSubmit={createUser}>
                <h1>Register</h1>
                <label>
                    Email: <input name="email" type="text" />
                </label>
                <label>
                    Password: <input name="password" type="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={signInUser}>
                <h1>Sign In</h1>
                <label>
                    Email: <input name="email" type="text" />
                </label>
                <label>
                    Password: <input name="password" type="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}


