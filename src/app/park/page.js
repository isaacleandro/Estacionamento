"use client"
import SideBar from "@/components/SideBar/SideBar";
import CardPark from "@/components/CardPark/CardPark";
import ModalWithBackdrop from "@/components/ModalWithBackdrop/ModalWithBackdrop";
import { useState } from "react";
export default function ParkPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <ModalWithBackdrop show={showModal} onclose={() => setShowModal(false)} />
            <SideBar />
            <CardPark />
        </div>

    )
}

