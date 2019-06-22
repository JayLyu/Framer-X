import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

const GrayImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAW1JREFUeAHt01ENACAMxFDAv8C5gQQV/XhT0LS7PTN3uYyBkyEB8g0IEnsEQQSJGYjhWIggMQMxHAsRJGYghmMhgsQMxHAsRJCYgRiOhQgSMxDDsRBBYgZiOBYiSMxADMdCBIkZiOFYiCAxAzEcCxEkZiCGYyGCxAzEcCxEkJiBGI6FCBIzEMOxEEFiBmI4FiJIzEAMx0IEiRmI4ViIIDEDMRwLESRmIIZjIYLEDMRwLESQmIEYjoUIEjMQw7EQQWIGYjgWIkjMQAzHQgSJGYjhWIggMQMxHAsRJGYghmMhgsQMxHAsRJCYgRiOhQgSMxDDsRBBYgZiOBYiSMxADMdCBIkZiOFYiCAxAzEcCxEkZiCGYyGCxAzEcCxEkJiBGI6FCBIzEMOxEEFiBmI4FiJIzEAMx0IEiRmI4ViIIDEDMRwLESRmIIZjIYLEDMRwLESQmIEYjoUIEjMQw7EQQWIGYjgWIkjMQAzHQmJBHm4eBE9r/MyjAAAAAElFTkSuQmCC"

export class LoadLocalImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            src: GrayImage,
        }
        this.handleChangeFile = this.handleChangeFile.bind(this)
    }

    render() {
        return (
            <label>
                <input
                    style={{ display: "none" }}
                    type="file"
                    accept="image/*"
                    onChange={e => this.handleChangeFile(e)}
                />
                <img
                    id="test"
                    ref="image"
                    height="100%"
                    width="100%"
                    src={this.state.src}
                />
            </label>
        )
    }

    handleChangeFile = e => {
        let file = e.target.files[0]
        let preview = this.refs.image
        let reader = new FileReader()
        reader.addEventListener(
            "load",
            function() {
                preview.src = reader.result
            },
            false
        )
        if (file) {
            reader.readAsDataURL(file)
        }
    }
}
