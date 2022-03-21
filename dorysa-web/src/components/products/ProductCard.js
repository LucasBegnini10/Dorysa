import React from "react";
import { CardProduct } from "./style";


export default function ProductCard(props){
    return(
        <CardProduct>
            <p>{props.name}</p>
            <p>Id Produto: {props.id}</p>
            <p>Categoria: {props.idCategory}</p>
        </CardProduct>
    )
}