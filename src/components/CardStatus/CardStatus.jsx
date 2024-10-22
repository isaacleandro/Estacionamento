import { Car, LetterCircleP } from "@phosphor-icons/react/dist/ssr"
export default function CardStatus() {

    return (
        <div className="h-32 w-56 bg-blue-950 rounded-2xl flex flex-col justify-between text-white p-2">

            <div className="flex min-w-full">
                <div className="flex-1 flex justify-center font-bold">
                    N° da vaga
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                </div>
            </div>

            <div className="flex flex-grow space-x-3 flex-row items-center justify-center">
                <Car color="white" size={26} />
                <p className="font-black text-xl">SBC8966</p>
            </div>

            <div className=" flex justify-center items-center text-color-gray">
                <div className="flex-1 flex justify-center">
                    E: &nbsp; <span className="font-bold">00:00:00</span>
                </div>
                <div className="flex-1 flex justify-center ">
                    S: &nbsp; <span className="font-bold">00:00:00</span>
                </div>
            </div>

        </div>
    )
}