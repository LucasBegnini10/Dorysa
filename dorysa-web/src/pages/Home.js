import Sidebar from "../components/sidebar/Sidebar";
import Logo from "../components/logo/Logo";
import Category from "../components/categorys/Category";
import ProductsSection from "../components/products/ProductsSection";

export function Home(){

    return(
        <>
            <Sidebar  />
            <Logo />
            <Category />
            <ProductsSection />
        </>
    )
}
