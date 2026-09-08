import { NewCounter } from "./NewCounter"
import OldCounter from "./OldCounter"

export const Home = () => {
    return (
        <>
            <h1 className="text-white">Welcome to Our Home</h1>
            <NewCounter name="New Counter" />
            <hr />
            <OldCounter name="old Counter" />
        </>
    )
}