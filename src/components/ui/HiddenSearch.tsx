import {useState, useRef} from 'react'
import './style.scss'

export const HiddenSearch = () => {
    const [isHidden, setIsHidden] = useState(true)

    let ref = useRef<HTMLInputElement>(null)

    const toggleHandler = () => {
        if(isHidden && ref.current !== null) ref.current.focus()
        setIsHidden(!isHidden)
    }

    return(
        <div className="ui-hidden-search__container">
            <span className="ui-hidden-search__toggle" onClick={toggleHandler} />
            <input ref={ref} className={`ui-hidden-search__input${isHidden?'':' active'}`}/>
        </div>
    )
}

