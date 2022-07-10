type StatusBarProp = {
    step: number,
    steps:number,
    width: number
}

export const StatusBar = (props:StatusBarProp) => {
    const {step, width, steps} = props

    return(
        <div className="steps__status-bar">
            <div className="steps__status-bar__active-line" style={{width:width/(steps-1)*step}} />
        </div>
    )
}
