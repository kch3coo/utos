import React, { Component } from 'react'

export default class ExampleComponent extends Component {
    constructor(props) { super(props) }
    render() {
        const element = (<div>Text from Element</div>)
        return (
            <div>
                <div className="comptext">
                    <h3>Example of how to embed a Component</h3>
                    {this.props.displaytext}
                    </div>
            </div>
        )
    }
}

