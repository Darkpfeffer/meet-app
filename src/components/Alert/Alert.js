//import
import { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.bgColor = null;
    }

    getStyle() {
        return {
            color: this.color,
            backgroundColor: this.bgColor,
            borderWidth: "2px",
            borderStyle: "solid",
            fontWeight: "bolder",
            borderRadius: "7px",
            borderColor: this.color,
            textAlign: "center",
            fontSize: "12px",
            margin: "10px 0",
            padding: "10px"
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(0, 0, 255)' //blue
        this.bgColor = 'rgba(220, 220, 255, 0.8)' //light blue
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(128, 8, 8)'
        this.bgColor = 'rgba(255, 115, 119, 0.8)'
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(121, 90, 21)'
        this.bgColor = 'rgba(238, 220, 131, 0.8)'
    }
}

export { InfoAlert, ErrorAlert, WarningAlert }