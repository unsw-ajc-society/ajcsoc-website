import AboutUs from './AboutUs';
import './App.css';
import Icons from './Icon';
import Events from './Events'

function App() {
    return (
        <div className="w-screen h-screen bg-ajc-beige-500 text-ajc-text">
            <div className="flex flex-col items-center h-full pt-2 gap-y-3">
                <img src="/assets/ajclogo.png" alt="logo" className="w-7/12" />
                <Icons/>
                {/* About Us */}
                <AboutUs/>
                <Events/>
            </div>
        </div>
    )
}

export default App
