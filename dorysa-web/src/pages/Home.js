import Sidebar from "../components/sidebar/Sidebar";
import Logo from "../components/logo/Logo";
import Category from "../components/categorys/Category";
import Products from "../components/products/Products";

export function Home(){

    return(
        <>
            <Sidebar  />
            <Logo />
            <Category />
            <Products />
        </>
    )
}
