import { useEffect, useState } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import Product from "./Product";
import "../style/productList.css";


export default function ProductList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "products"));
        onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({
                    id: doc.id,
                    ...doc.data(),
                }); 
            });
            setProductList(products);
        });
    }, []);




    return(
        <div className="productList">
            {productList.map((elem) => {
                return(
                    <>
                        <Product title={elem.title} description={elem.description} price={elem.price} id={elem.id} userID={elem.userID}/>
                    </>
                )
            })}
        </div>
    )
}