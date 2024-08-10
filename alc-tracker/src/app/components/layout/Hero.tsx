import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex justify-center items-center pt-24">
            <Image src={"/hero-text.svg"} alt="Drink Responsibly - Your Future Matters" width="607" height="150" />
        </div>
    )
};

export default Hero;