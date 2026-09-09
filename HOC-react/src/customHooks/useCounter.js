const useCounter = (initialState) => {

    const [count, setCount] = useState(initialState);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const setByValue = (value) => {
        setCount(value);
    }

    return {
        count,
        increment,
        decrement,
        setByValue
    }
}
export default useCounter