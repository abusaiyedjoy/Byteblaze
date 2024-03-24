import { SyncLoader } from "react-spinners";
const spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-196px)] flex-col">
            <SyncLoader size={30} color='#f92fD3'></SyncLoader>
        </div>
    );
};

export default spinner;