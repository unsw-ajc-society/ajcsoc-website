import './App.css';

function App() {
    return (
        <>
            <div className="w-screen h-screen bg-ajc-beige-500 text-ajc-text">
                <div className="flex flex-col items-center h-full pt-10">
                    <img src="/assets/ajclogo.png" alt="logo" class="h-48" />

                    <div className="flex items-center gap-x-10">
                        <div className="rounded-lg w-10 h-10 bg-black"></div>
                        <div className="rounded-lg w-10 h-10 bg-black"></div>
                        <div className="rounded-lg w-10 h-10 bg-black"></div>
                        <div className="rounded-lg w-10 h-10 bg-black"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
