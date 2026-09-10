const Button = ({ name, varitent, variant = "primary" }) => {
    const variants = {
        primary: "bg-[#F38160] text-white p-4 w-[149px] rounded-2xl text-md",
        secondary: "bg-transparent text-[#F38160] underline p-4 w-[149px] rounded-2xl text-md",
    }

    return (
        <button className={variants[varitent || variant]}>
            {name}
        </button>
    )
}

export default Button