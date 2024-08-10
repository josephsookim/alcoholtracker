import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex justify-center items-center pt-8">
            <Image src={"/hero-text.svg"} alt="Drink Responsibly - Your Future Matters" width="300" height="300" />
        </div>
    )
};

export default Hero;