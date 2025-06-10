import AboutUs from './AboutUs';
import './App.css';
import Icons from './Icon';
import Events from './Events'
// import T2Welcome from './T2Welcome' <- save for T3

function App() {
    return (
        <div className="w-full h-full bg-ajc-beige-500 text-ajc-text">
            <div className="flex flex-col items-center h-full">
                <img src="/assets/ajclogo.png" alt="AJCsoc UNSW logo" className="w-[62vw] h-auto" />
                <Icons/>
                <AboutUs/>
                {/* <T2Welcome/> */}
                <Events/>
                <h2 className= "mt-15 ajc-text text-bold text-4xl font-bold text-ajc-text mb-10 text-center">
                    Connect with us and stay tuned~
                </h2>
                <Icons/>
                <div className= "mt-15"></div>
            </div>
        </div>
    )
}

export default App
