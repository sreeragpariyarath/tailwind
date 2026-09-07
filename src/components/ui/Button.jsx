const Button = ({text}) => {
    
    return (
        <button className="bg-white text-purple-950 font-medium px-4 py-1 border border-transparent 
         rounded-md hover:border hover:bg-transparent hover:border-white hover:text-white duration-300 cursor-pointer transition-colors
    ">
            {text}
        </button>
    )
}
export default Button