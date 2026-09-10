
import { Menu } from "lucide-react"
import CartBtn from "./header/CartBtn"
import Logo from "./header/Logo"
import NavItems from "./header/NavItems"
import Button from "./ui/Button"

export const Header = () => {
    return (
        <header className="h-32 flex justify-between items-center">
            <Logo />
            <NavItems />
            <div className="lg:flex justify-between gap-2 items-center hidden">
                <CartBtn />
                <Button name={"Sign In"} varitent={"secondary"} />
                <Button name={"Sign Up"} varitent={"primary"} />
            </div>
            <Menu className="flex lg:hidden" />


        </header>
    )
}

