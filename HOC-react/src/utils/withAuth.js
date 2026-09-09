const withAuth = (Component) => {
    return function () {
        return <Component />
    }
}