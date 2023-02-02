import react from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Page from './Page'
import Table from './Table'
import Bootstrap from './Bootstrap'
import Login from './Login'
import Item from './Item'
import ProductContext from './ProductContext'
export default function MyRouter() {

    return (
        <>
            <nav>
                <ul>
                    <li>  <Link to="page">  page </Link> </li>
                    <li>  <Link to="table"> table </Link> </li>
                    <li>  <Link to="/bootstrap"> boot  </Link> </li>
                    <li>  <Link to="/bootstrap"> boot  </Link> </li>
                </ul>
            </nav>
            <ProductContext>    
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="page" element={<Page />} />
                <Route path="table" element={<Table />} />
                <Route path="/bootstrap" element={<Bootstrap />} />
                <Route path="/item/:id" element={<Item />} />
            </Routes>

             </ProductContext>
        </>
    )
}
