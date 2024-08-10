import Image from "next/image"

const Information = () => {
    return (
        <div className="flex justify-center items-center pt-2">
            <Image src={"/information.svg"} alt="Information" width="1056" height="150" />
        </div>
    )
};

export default Information;