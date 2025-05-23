import AboutUs from './AboutUs';
import './App.css';
import Icons from './Icon';
import Events from './Events'

function App() {
    return (
        <div className="w-full h-full bg-ajc-beige-500 text-ajc-text">
            <div className="flex flex-col items-center h-full">
                <img src="/assets/ajclogo.png" alt="logo" style={{ width: '60vw', height: 'auto' }} />
                <Icons/>
                {/* About Us */}
                <AboutUs/>
                <Events/>
            </div>
        </div>
    )
}

export default App
