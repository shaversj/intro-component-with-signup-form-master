import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";

function App() {

    return (
        <>
            <div
                className={"bg-mobileBackground bg-primary-red min-h-screen max-w-screen-sm mx-auto font-Poppins lg:bg-desktopBackground lg:max-w-screen-lg lg:flex lg:items-center lg:justify-center"}>
                <Hero/>

                <div className={"mx-6 space-y-6 lg:max-w-screen-md"}>
                    <Header/>
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default App
