
import { X } from "@phosphor-icons/react/dist/ssr";

export default function ModalWithBackdrop({ children, show, onclose }) {

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${show ? 'visible' : 'hidden'} flex`}>
            <div className="bg-white rounded-lg p-4 w-96">
                <div className="flex justify-end">
                    <button onClick={onclose}>
                        <X size={24} /> 
                    </button>
                </div>

            </div>
            {children}
        </div>
        
    )
}