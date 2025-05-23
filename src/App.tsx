import AboutUs from './AboutUs';
import './App.css';
import Icons from './Icon';

function App() {
    return (
        <div className="w-full h-full bg-ajc-beige-500 text-ajc-text">
            <div className="flex flex-col items-center h-full pt-10 gap-y-5">
                <img src="/assets/ajclogo.png" alt="logo" style={{ width: '75vw', height: 'auto' }} />

                {/* <div className="flex items-center gap-x-10">
                    <span className="text-ajc-text text-xl">ホーム</span>
                    <span className="text-ajc-text text-xl">サークルについて</span>
                    <span className="text-ajc-text text-xl">イベント</span>
                </div> */}

                <Icons/>
                {/* About Us */}
                <AboutUs/>
            </div>
        </div>
    )
}

export default App
