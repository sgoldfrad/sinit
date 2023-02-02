import react, { useState, useRef, useEffect,useContext } from 'react'
import Bootstrap from './Bootstrap';
import { productContxt } from './ProductContext';

export default function Table() {
   // const [arr, setarr] = useState([{ id: 111, name: "skirt", src: "../logo192.png" },
   // { id: 112, name: "blouse", src: "../logo512.png" },
   // { id: 113, name: "socks", src: "../logo192.png" }]);
   const productCtx = useContext(productContxt);
   const idinput = useRef();
   const nameinput = useRef();

   const add = () => {
      idinput.current.value &&
         nameinput.current.value &&
         productCtx.setArr([...productCtx.arr, { id: idinput.current.value, name: nameinput.current.value, src: "" }])
   }
   //useEffect(() => { alert("mmmmm") }, [productCtx.arr]);

   return (
      <>
      {productCtx.arr.length?
      <table className="table table-striped table-hover">
         <tr>
            <th>קוד</th>
            <th>שם</th>
         </tr>

         {productCtx.arr.map((item, index) => <tr key={index}> <td>{item.id}</td><td>{item.name}</td></tr>)}

         <tr> <td><input type="text" placeholder="id" ref={idinput}></input></td> <td><input type="text" placeholder="name" ref={nameinput}></input></td></tr>
         <button onClick={() => add()}> הוסף</button>
      </table>
      :
      <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
}
      </>
   )
}

