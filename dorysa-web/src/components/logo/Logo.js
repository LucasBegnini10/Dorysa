import React from "react"
import logotipo from "../../assets/logo.png"
import { DivLogo } from "./style"

export default function Logo(){
    return(
        <DivLogo>
            <img src= {logotipo} alt="Logo Dorysa"></img>
        </DivLogo>
    )
}