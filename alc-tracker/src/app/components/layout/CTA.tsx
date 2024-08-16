import Image from "next/image"

const CTA = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="hover:bg-[#313E9E] transition-colors duration-200">
                <a href="/tracker"><Image src={"/cta.svg"} alt="Get Started Now" width="607" height="117" /></a>
            </div>
        </div>
    )
};

export default CTA;