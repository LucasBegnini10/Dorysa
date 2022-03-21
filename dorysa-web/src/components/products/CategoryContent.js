import React, {useState, useEffect} from "react";
import {SubSection, CardContent} from "./style";
import axios from "axios";
import ProductCard from "./ProductCard";


export default function CategoryContent(props){

    const[product, setProduct] = useState();
    
    useEffect( () => {
        axios.get("http://localhost:3001/product")
        .then((response) => setProduct(response.data))
    }, [])

    return(
        <SubSection>
            <h1>Nome da Categoria: {props.nameCategory}</h1>
            <p>Id da Categoria: {props.id}</p>

            <CardContent>
            {typeof product !== "undefined" && product.map(value =>{
                if(value.idCategoria === props.id){
                    return <ProductCard 
                    key={value.idProduto}
                    id={value.idProduto}
                    name={value.nome}
                    idCategory={value.idCategoria} 
                    />
                }else{
                    return false
                }
            })}
            </CardContent>

        </SubSection>
    )
}