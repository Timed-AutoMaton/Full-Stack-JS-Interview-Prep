const withCardLook = (WrappedComponent) => {
    return () => {
        return (
            <div className="bg-700 p-10 rounded-2xl mb-3">
                <WrappedComponent />
            </div>

        )
    }
}
export default withCardLook