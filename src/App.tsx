import './App.css';

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function App() {
    return (
        <>
            <div className="w-screen h-screen bg-ajc-beige-500 text-ajc-text">
                <div className="flex flex-col items-center h-full pt-10 gap-y-5">
                    <img src="/assets/ajclogo.png" alt="logo" className="h-36" />

                    <div className="flex items-center gap-x-10">
                        <span className="text-ajc-text text-xl">ホーム</span>
                        <span className="text-ajc-text text-xl">サークルについて</span>
                        <span className="text-ajc-text text-xl">イベント</span>
                    </div>

                    <div className="flex items-center gap-x-10">
                        <FaInstagram className="w-10 h-10" />
                        <FaFacebook className="w-10 h-10" />
                        <FaLinkedin className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
