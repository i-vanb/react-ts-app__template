import {StepProgress} from './components/stepProgress/StepProgress'
import {useState} from "react";

export const App = () => {

    return (
        <div>
            <Example title='Example Step Progress' />
        </div>
    )
}


type ExampleProps = {
    title:string
}

const Example = (props:ExampleProps) => {
    const [step, setStep] = useState(0)
    const steps = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]

    return (
        <>
            <h1>{props.title}</h1>
            <StepProgress step={step} steps={steps} setStep={setStep} width={300}/>
        </>
    )
}
