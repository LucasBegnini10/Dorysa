import Sidebar from "../components/sidebar/Sidebar";
import Logo from "../components/logo/Logo";
import Category from "../components/categorys/Category";
import CategorySection from "../components/products/CategorySection";

export function Home(){

    return(
        <>
            <Sidebar  />
            <Logo />
            <Category />
            <CategorySection />
        </>
    )
}
