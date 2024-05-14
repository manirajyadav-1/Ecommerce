import "./NewCollections.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Url";


export default function NewCollections(){
    const [new_collection,setNew_Collection] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        async function newCollection(){
            setIsLoading(true);
            await fetch(`${baseUrl}/newcollections`)
            .then((response) => response.json())
            .then((data) => setNew_Collection(data));
            setIsLoading(false);
        }
        newCollection();
    },[])

    function Loader(){
        return <p className="loader">Loading...</p>
    }

    return <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        {isLoading ? <Loader/> : <div className="collections">
            {new_collection.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>}
    </div>
}