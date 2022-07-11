export const App = () => {
    return (
        <div>
            {/*<Example title='' />*/}
        </div>
    )
}

type ExampleProps = {
    title:string
}

const Example = (props:ExampleProps) => {
    return (
        <div style={{display:'flex', alignItems:'center',justifyContent:'center', flexDirection:"column"}}>
            <h1>{props.title}</h1>

        </div>
    )
}

