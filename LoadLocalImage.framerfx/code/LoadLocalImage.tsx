import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

type Props = {
    image: string
}
type State = {
    image: string
    // uploadImage: string
}

export class LoadLocalImage extends React.Component {
    constructor() {
        super()
        this.state = {
            image:
                "https://gw.alicdn.com/tfs/TB1UQlmkNTpK1RjSZFMXXbG_VXa-33-54.png",
            toggle: false,
        }

        this.handleFiles = this.handleFiles.bind(this)
    }

    handleFiles() {
        // let input = this.refs.input_reader
        this.refs.uploadImage.click()
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
        const { accept, capture, multiple } = this.props,
            { uploadImage, image } = this.state
        return (
            <Frame background="transparent" size={"100%"}>
                <img
                    // ref={uploadImage}
                    src={image}
                    height={"100%"}
                    width={"100%"}
                    onClick={this.handleFiles}
                />
                <input
                    type="file"
                    ref="uploadImage"
                    accept={Array.isArray(accept) ? accept.join(",") : accept}
                    multiple={multiple}
                    capture={capture}
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

// 属性控制
addPropertyControls(LoadLocalImage, {
    image: {
        type: ControlType.String,
        title: "Image Url",
        defaultValue: "",
    },
})
