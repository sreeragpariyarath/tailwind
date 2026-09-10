const Hero = () => {
    return (
        <div className="grid grid-cols-12  min-h-96">
            <div className="col-span-6 flex  items-left justify-center flex-col space-y-8">
                <h1 className=" font-bold text-7xl text-[#403C39] leading-18 tracking-tight montserrat">Let your <span className="text-[#F38160]">groceries</span> come to you</h1>
                <p className="text-[#949494] text-xl font-light leading-relaxed">Get fresh groceries online without stepping out to <br /> make delicious food with the freshest ingredients</p>
            </div>
            <div className="col-span-4"> center </div>
            <div className="col-span-2">right </div>
        </div>
    )
}
export default Hero