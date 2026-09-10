const NavItems = () => {
    const items = [
        {
            id: 1,
            name: "Home",
            url: "/",
            isActive: true
        },
        {
            id: 2,
            name: "Categories",
            url: "/categories"
        },
        {
            id: 3,
            name: "Sales",
            url: "/sales"
        },
        {
            id: 4,
            name: "FAQ",
            url: "/faq"
        },
        {
            id: 5,
            name: "About",
            url: "/about"
        },
        {
            id: 6,
            name: "Contact",
            url: "/contact"
        },
    ]

    return (
        <div className="lg:flex gap-4 hidden">
            {
                items.map(({ id, name, isActive }) => (
                    <div key={id} >
                        <span className={isActive ? "text-[#F38160]" : "text-[#403C39]" + "text-lg font-light"}>{name}</span>

                        {
                            isActive ? <div className="w-5/6 h-0.5 bg-[#F38160] mx-auto"></div> : ""
                        }
                        
                    </div>
                ))
            }
        </div>
    )
}

export default NavItems