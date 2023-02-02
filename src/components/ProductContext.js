import React,{ createContext,useEffect,useState } from "react";
import axios from "axios";
export const productContxt=createContext();

export default function ProductContext(props){

    const [arr, setArr] = useState([]);
 useEffect(()=>{axios.get('./ProductsArr.json')
 .then(product=>{
     setArr(product.data)
    })
 .catch(eror=>console.log("eror"))},[])
    return (
        <productContxt.Provider value={{ arr,setArr }}>
            {props.children}
            {/* //לא מחכה שיחזור מציג נתונים לכן נציג את הנתוינם רק אחרי שנשאל אם האורך שונה מNULL */}
        </productContxt.Provider>
    );

}