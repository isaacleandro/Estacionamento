"use client"
import SideBar from "@/components/SideBar/SideBar";
import CardPark from "@/components/CardPark/CardPark";
import ModalWithBackdrop from "@/components/ModalWithBackdrop/ModalWithBackdrop";
import { useState } from "react";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Button from "@/components/Button/Button";

export default function ParkPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <SideBar />

            <ModalWithBackdrop show={showModal} onclose={() => setShowModal(false)}>
                <div className="flex flex-col space-y-4">
                    <InputWithLabel label="N° Identificador" type="number" />
                    <Button>Salvar</Button>
                </div>
            </ModalWithBackdrop> 

            <CardPark />
        </div>

    )
}

