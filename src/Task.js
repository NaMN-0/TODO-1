import React, { Component } from 'react'

class Task extends Component {
    render(props) {
        return (
            <div style={style1}>
                <pre style={style1}>   </pre>
                <h1 style={style1}>{this.props.data}</h1>
            </div>
        )
    }
}

const style1 = {
    display: "inline"
}

export default Task