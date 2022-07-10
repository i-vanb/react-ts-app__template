import {Button} from "../../ui/Button";
import {StatusBar} from "./StatusBar";

type StepProgressProps = {
    step:number,
    setStep:(s:number)=>void,
    steps:Array<any>,
    width: number
}

export const StepProgress = (props:StepProgressProps) => {
    const {step, setStep, steps, width} = props

    const nextStep = () => {
        if(step === steps.length-1) return
        setStep(step+1)
    }

    const prevStep = () => {
        if(step === 0) return
        setStep(step-1)
    }

    return(
        <div className='steps__container'>
            <div className='steps__header' style={{width:width+'px'}}>
                {steps.map((_,i) => {
                    const getClassName = () => i<=step ? 'steps__header__item active':'steps__header__item'
                    const clickHandler = () => setStep(i)
                    return <div key={i} onClick={clickHandler} className={getClassName()}>{i+1}</div>
                })}
                <StatusBar step={step} width={width} steps={steps.length} />
            </div>
            <div className='steps__btn-group'>
                <Button disabled={step===0} onClick={prevStep} title='Prev'/>
                <Button disabled={step===steps.length-1} onClick={nextStep} title='Next'/>
            </div>
        </div>
    )
}
