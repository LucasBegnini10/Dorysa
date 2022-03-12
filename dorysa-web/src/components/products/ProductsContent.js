import React from "react";
import { SubSection } from "./style";

export default function ProductsContent(props){
    return(
        <SubSection>
            <h1>{props.name}</h1>
        </SubSection>
    )
}