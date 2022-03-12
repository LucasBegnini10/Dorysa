import React from "react";
import { CategorysInCards } from "./style";

export default function CardsCategory(props){
    return(
        <CategorysInCards>
            <h1>{props.name}</h1>
        </CategorysInCards>
    )
}