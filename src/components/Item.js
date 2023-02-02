import { useParams } from "react-router-dom"

export default function Item(){

    const params=useParams();
return(
    <>
     {params.id}
    </>
)
}