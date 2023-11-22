import { collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import "../style/product.css";

export default function Product (props) {
    const [editDesc, setEditDesc] = useState("");
    const [editPrice, setEditPrice] = useState();
    const [editTitle, setEditTitle] = useState("");
    const [showInputEle, setShowInputEle] = useState(false);
    const [curUser, setCurUser] = useState("");




    useEffect(() => {
        setEditDesc(props.description);
        setEditPrice(props.price);
        setEditTitle(props.title);

        const whatUser = () => {
            if(auth?.currentUser?.uid === props.userID ) {
                setCurUser(true);
            } else {
                setCurUser(false);
            }
        }
        whatUser();
    }, [props.description, props.title, props.price, props.userID]);

    const handleDesc = (e) => {
        setEditDesc(e.target.value);
    };
    const handleTitle = (e) => {
        setEditTitle(e.target.value);
    };
    const handlePrice = (e) => {
        setEditPrice(e.target.value.slice(0, 10));
    };
    const editListing = () => {
        setShowInputEle(true);
    };
    const cancelEdit = () => {
        setShowInputEle(false)
        setEditDesc(props.description);
        setEditPrice(props.price);
        setEditTitle(props.title);
    };
    const saveChange = async (id) => {
        if(editPrice != isNaN){
            await updateDoc(doc(db, "products", id), {
                description: editDesc,
                title: editTitle,
                price: editPrice
                });
        } else {
            alert("Please put in an actual price.");
        }
        setShowInputEle(false);
    };
    const deleteListing = async () => {
        setShowInputEle(false);
        await deleteDoc(doc(db, "products", props.id));
    }



    return(
        <div className="product">
            <img src="https://placehold.co/280x200" alt="product" />
            <div className="productDesc">
                {
                showInputEle ? 
                <>
                        <div>
                            <h2><input type="text" value={editTitle} onChange={handleTitle} className="productInput" maxLength={15} /></h2>
                            <input type="text" value={editDesc} onChange={handleDesc} className="productInput" maxLength={100} />
                        </div>
                        <input type="number" value={editPrice} onChange={handlePrice} className="priceButton" maxLength={10}/>
                        <div className="editGroup">
                            <button onClick={() => saveChange(props.id)}>Save Changes</button>
                            <button onClick={cancelEdit}>Cancel</button>
                            <button onClick={deleteListing}>Delete</button>
                        </div>
                    </>
                : (
                    <>
                        <div>
                            <h2>{editTitle}</h2>
                            <p>{editDesc}</p>
                        </div>
                        <button className="priceButton">{editPrice}$</button>
                        {curUser ? <button  className="priceButton" onClick={editListing}>Edit listing</button> : null}

                    </>
                )
                }
            </div>
        </div>
    )
};