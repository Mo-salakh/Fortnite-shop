import { useEffect } from "react"

function Alert(props) {
    let {name, setAlert = Function.prototype } = props

    useEffect(() => {
        const timer = setTimeout(setAlert, 3000)
        return () => {
            clearTimeout(timer)
        }
    // eslint-disable-next-line
    }, [name])

    return (
        <div id="toast_container">
            <div className="toast">{name} добавлено в корзину</div>
        </div>
    )
}

export { Alert }