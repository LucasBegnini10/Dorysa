import axios from "axios"
import { useEffect, useState } from "react"
import { Section} from "./style"
import ProductsContent from "./ProductsContent"

export default function Products(){

    const[nameCategory, setNameCategory] = useState()

    useEffect( () => {
        axios.get("http://localhost:3001/category")
        .then((response) => setNameCategory(response.data))

    }, [])
    
    return(
        <Section>
                {typeof nameCategory !== "undefined" &&
                nameCategory.map((value) => {
                    return <ProductsContent 
                    key={value.idCategory}
                    name={value.nome}
                    />
                })}
        </Section>
    )
}