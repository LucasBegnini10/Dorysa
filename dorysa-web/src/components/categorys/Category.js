import React, { useEffect, useState } from "react";
import { Section, ContentsCategory, Title, SubSection} from "./style";
import axios from "axios"
import CardsCategory from "./CardCategory";

export default function Category(props){
    
    const [listCategory, SetListCategory] = useState();

    useEffect( () => {
        axios.get("http://localhost:3001/category")
        .then(response => SetListCategory(response.data))
    }, [])
        
    return(
       <Section>
           <SubSection>
                <Title>
                    Categorias
                </Title>
                <ContentsCategory>
                    
                    {typeof listCategory !== "undefined" &&
                    listCategory.map((value) => {
                        return <CardsCategory 
                        key={value.idCategory}
                        name={value.nome}/>
                    })} 

                </ContentsCategory>
            </SubSection>
            
       </Section>
       
    )
}