import react, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../MyStyle.css'
import { productContxt } from './ProductContext';

export default function Bootstrap() {
    // const [arrProduct, setArrProduct] = useState([{ id: 111, name: "skirt", src: "../logo192.png" },
    // { id: 112, name: "blouse", src: "../logo512.png" },
    // { id: 113, name: "socks", src: "../logo192.png" }]);
    const navigat = useNavigate();
    const productCtx=useContext(productContxt);
    return (
        <div className="mydiv">
            {productCtx.arr.map((item, index) =>
                <div className="card d" key={index} style={{ maxWidth: '100px' }} onClick={() => { navigat(`/item/${item.id}`) }}>
                    <img src={item.src} className="card-img-top" />
                    <div classNmae="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.id}</p>
                    </div>
                </div>)}
        </div>
    )
}