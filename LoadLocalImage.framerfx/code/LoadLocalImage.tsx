import * as React from "react"
import { useState } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

const GrayImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAW1JREFUeAHt01ENACAMxFDAv8C5gQQV/XhT0LS7PTN3uYyBkyEB8g0IEnsEQQSJGYjhWIggMQMxHAsRJGYghmMhgsQMxHAsRJCYgRiOhQgSMxDDsRBBYgZiOBYiSMxADMdCBIkZiOFYiCAxAzEcCxEkZiCGYyGCxAzEcCxEkJiBGI6FCBIzEMOxEEFiBmI4FiJIzEAMx0IEiRmI4ViIIDEDMRwLESRmIIZjIYLEDMRwLESQmIEYjoUIEjMQw7EQQWIGYjgWIkjMQAzHQgSJGYjhWIggMQMxHAsRJGYghmMhgsQMxHAsRJCYgRiOhQgSMxDDsRBBYgZiOBYiSMxADMdCBIkZiOFYiCAxAzEcCxEkZiCGYyGCxAzEcCxEkJiBGI6FCBIzEMOxEEFiBmI4FiJIzEAMx0IEiRmI4ViIIDEDMRwLESRmIIZjIYLEDMRwLESQmIEYjoUIEjMQw7EQQWIGYjgWIkjMQAzHQmJBHm4eBE9r/MyjAAAAAElFTkSuQmCC"

export function LoadLocalImage(props) {
    const [img, setImg] = useState(GrayImage)
    const [intro, setIntro] = useState(true)

    function handleChangeFile(e) {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.addEventListener(
            "load",
            function() {
                setImg(reader.result)
                setIntro(false)
            },
            false
        )
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <label>
            <input
                style={{ display: "none" }}
                type="file"
                accept="image/*"
                onChange={e => handleChangeFile(e)}
            />
            <div
                style={{
                    display: intro ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "rgba(98,54,255,0.1)",
                    border: "1px solid rgba(98,54,255,1)",
                    fontSize: "1rem",
                    color: "rgba(98,54,255,1)",
                }}
            >
                Drag a image to here.
            </div>
            <img
                alt={"upload image"}
                style={{
                    position: "absolute",
                    display: intro ? "none" : "block",
                    width: "100%",
                    height: "100%",
                }}
                src={img}
            />
        </label>
    )
}
