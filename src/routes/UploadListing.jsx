import { addDoc, collection, setDoc } from "firebase/firestore";
import { auth, db, docRef } from "../config/firebase";
import "../style/uploadListing.css";



export default function UploadListing() {
    const uploadListing = async (event) => {
        event.preventDefault()

        if(auth?.currentUser?.uid != undefined) {
            await addDoc(collection(db, "products"), {
                title: event.target.title.value,
                description: event.target.desc.value,
                price: event.target.price.value,
                userID: auth?.currentUser?.uid,
            });
        }

        event.target.title.value = "";
        event.target.desc.value = "";
        event.target.price.value = "";
        
    }
    return(
        <form onSubmit={uploadListing} className="uploadListing">
            <label htmlFor="title">
                What are you selling?: <input name="title" id="title" type="text" placeholder="Cookies..." required/>
            </label><br />
            <label htmlFor="desc">
                The description of your product: <input name="desc" id="desc" type="text" placeholder="Yummy treat..." required/>
            </label><br />
            <label htmlFor="price">
                The price of your product: <input name="price" id="price" type="text" placeholder="2.00" required/>
            </label><br />
            <button type="submit">Upload Listing</button>
        </form>
    )
}