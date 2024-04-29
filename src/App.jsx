import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";

const App = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello World</h1>
            <div className="pt-[3.75rem] lg:pt-[6.75rem] ">
                <Button className="mt-2.5" href="#link">
                    Click me
                </Button>
            </div>
            <ButtonGradient/>

        </>
    )
}

export default App
