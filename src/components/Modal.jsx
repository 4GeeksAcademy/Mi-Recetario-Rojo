const Modal = ({ children, show, onCloseModal }) => {


    return <>
        <div 
            className={ (show ? "block" : "hidden") + " bg-white text-black z-50 flex flex-col justify-center items-center absolute inset-y-1/3 inset-x-1/4 drop-shadow-lg rounded-lg"}
        > 
            { children }
        </div>
        <div className={ (show ? "block" : "hidden") + " absolute w-full h-full backdrop-blur-lg"}
            onClick={onCloseModal}>
        </div>
    </>
}

export default Modal;