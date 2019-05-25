import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// import PropTypes from "prop-types"
import ReactFileReader from "react-file-reader"

type Props = {
    file: string
}
// https://gw.alicdn.com/tfs/TB1UQlmkNTpK1RjSZFMXXbG_VXa-33-54.png
export class LoadLocalImage extends React.Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            file: "",
        }
    }

    state = {
        file: "",
    }

    handleFiles = files => {
        this.setState({
            file: files.base64,
        })
    }

    render() {
        return (
            <Frame background="red" size={"100%"}>
                <img
                    src={this.state.file}
                    height={"100%"}
                    width={"100%"}
                    onClick={this.handleFiles}
                />
                <ReactFileReader
                    fileTypes={[".csv", ".zip"]}
                    base64={true}
                    multipleFiles={true}
                    handleFiles={this.handleFiles}
                >
                    <button className="btn">upload</button>
                </ReactFileReader>
            </Frame>
        )
    }
}

// 默认类型
// LoadLocalImage.defaultProps = {
//     accept: 'image/*',
//     capture: true,
//     multiple: false,
//     url: 'https://gw.alicdn.com/tfs/TB1UQlmkNTpK1RjSZFMXXbG_VXa-33-54.png',
//     width: 200,
//     height: 200,
// }

// 类型检查
// LoadLocalImage.propTypes = {
//     accept: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
//     capture: PropTypes.bool,
//     multiple: PropTypes.bool,
// }

// <img
//     src={this.props.url}
//     height={this.props.height}
//     width={this.props.width}
//     style={
//         {
//             // objectFit: this.props.fillMode,
//             // background: "rgba(144, 19, 254, 0.2)",
//             // border: 0
//         }
//     }
//     onClick={this.handleClick}
// />
// <p style={{
//     position: 'fixed',
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fonSize: 14,
//     margin: 0,
//     padding: 0,
//     color: "rgba(144, 19, 254, 1)"
// }}>
//     {this.props.width*3} × {this.props.height*3} px
// </p>

// 属性控制
addPropertyControls(LoadLocalImage, {
    file: {
        type: ControlType.String,
        title: "Image Url",
        defaultValue:
            "https://gw.alicdn.com/tfs/TB1UQlmkNTpK1RjSZFMXXbG_VXa-33-54.png",
    },
})
