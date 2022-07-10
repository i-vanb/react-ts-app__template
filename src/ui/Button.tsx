import './style.scss'

type ButtonProps = {
    onClick:()=>void,
    title:string,
    disabled?:boolean
}

export const Button = (props:ButtonProps) => {
    return <button disabled={props.disabled} className="custom-ui__button" onClick={props.onClick}>{props.title}</button>
}
