import * as React from "react"
import { Frame, useCycle } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true,
            img:
                "https://gw.alicdn.com/tfs/TB1UQlmkNTpK1RjSZFMXXbG_VXa-33-54.png",
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleFileChanged = this.handleFileChanged.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }))
    }

    handleFileChanged = e => {
        let self = this
        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onload = function(r) {
            self.setState({
                image: r.target.result,
            })
        }
        reader.readAsDataURL(file)
    }

    render() {
        return (
            <Frame
                // background="transparent"
                width={"100%"}
                height={"100%"}
                onClick={this.handleClick}
            >
                <Frame
                    background="transparent"
                    width={"auto"}
                    height={"auto"}
                    visible={this.state.isToggleOn}
                    center
                >
                    {this.props.width} × {this.props.width}
                </Frame>
                <input
                    type="file"
                    ref="uploadImage"
                    accept={this.props.accept}
                    multiple={this.props.multiple}
                    capture={this.props.capture}
                    style={{ display: "none" }}
                    onChange={this.handleFileChanged}
                />
            </Frame>
        )
    }
    // 默认类型
    static defaultProps = {
        image:
            "https://gw.alicdn.com/tfs/TB1UQlmkNTpK1RjSZFMXXbG_VXa-33-54.png",
        accept: "image/*",
        capture: true,
        multiple: false,
    }
}
