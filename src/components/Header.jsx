import Button from "./ui/Button"
import Logo from "./ui/Logo"

export const Header = () => {
    return (
        <header className="bg-purple-950 text-white">
            <div className="flex justify-between items-center max-w-[100rem] mx-auto py-4">
                <Logo />

                <div>
                    <nav className="flex justify-between items-center list-none gap-4">
                        <li >Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </nav>
                </div>

                <div className="flex gap-3">
                    <Button text="Login" />
                    <Button text="signup" />
                </div>
            </div>
        </header>
    )
}

