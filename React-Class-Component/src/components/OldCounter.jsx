const { Component } = require("react");

class OldCounter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            count2:0,
        }
    }

    render() {
        const { name } = this.props;

        console.log(this);
        return (
            <>
                <div className="flex">
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                    <h2 className="text-white">{this.state.count}</h2>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                </div>
            </>
        )
    }
}

export default OldCounter;