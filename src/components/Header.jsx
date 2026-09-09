
import CartBtn from "./header/CartBtn"
import Logo from "./header/Logo"
import NavItems from "./header/NavItems"

export const Header = () => {
    return (
        <header className="h-32 flex justify-between items-center">
            <Logo/>
            <NavItems/>
            <CartBtn/>

        </header>
    )
}

