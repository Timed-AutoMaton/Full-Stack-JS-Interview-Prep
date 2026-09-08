import { useEffect } from "react"

const Alpha = () => {
    useEffect(() => {
        console.log("re render");
    })

    return (
        <div>Alpha</div>
    )
}
export default Alpha