import Button from "@/components/Button/Button";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { StackPlus } from "@phosphor-icons/react/dist/ssr";
export default function CardPark() {

    return (
        <div className="flex flex-col flex-grow w-full justify-start items-end pl-24 space-y-3 ">

            <div className="flex">
                <Button onClick={() => setShowModal(true)}>
                    <StackPlus size={24} />
                </Button>
            </div>

            <div className="flex w-full justify-between bg-gray-200 rounded-md p-4 font-bold ">
                <div className="flex">
                    VAGA 001
                </div>

                <div className="cursor-pointer">
                    <Trash size={24} />
                </div>
            </div>

        </div>
    )
}
