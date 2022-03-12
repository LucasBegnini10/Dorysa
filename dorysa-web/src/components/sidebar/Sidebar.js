import React from "react"
import { Bars, IconsCenter } from "./style"
import {BsFillCartFill, BsWhatsapp} from "react-icons/bs"
import {BiCategory} from "react-icons/bi"


export default function Sidebar(){
    return(
        <Bars>
            <IconsCenter>
                <BiCategory />
                <BsFillCartFill/>
                <BsWhatsapp />
            </IconsCenter>
        </Bars>
    )
}