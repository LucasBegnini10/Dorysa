import axios from "axios"
import {useEffect, useState } from "react"
import {Section} from "./style"
import CategoryContent from "./CategoryContent"

export default function CategorySection(){

    const[category, setCategory] = useState();
   
    

    useEffect( () => {
        axios.get("http://localhost:3001/category")
        .then((response) => setCategory(response.data))
    }, [])

    
    return(
        <Section>
            {typeof category !== "undefined" && category.map((value) => {
                    return <CategoryContent 
                                key={value.idCategoria}
                                nameCategory={value.nome}
                                id={value.idCategoria}
                            />
            })}
            
        </Section>
    )
}
