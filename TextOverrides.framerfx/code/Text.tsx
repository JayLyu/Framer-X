import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Define type of property
interface Props {
    text: string
    fontFamily: string
    size: number
    fontWeight: string
    color: string
    style: string
    textDecoration: string
    alignItems: string
    justifyContent: string
    spacing: number
    lineHeight: number
    align: string
    width: number
    height: number
    lineClamp: number
    textOverflow: string
}

export function CustomFont(props) {
    return (
        <div
            style={{
                display: "flex",
                width: props.width,
                height: "100%",
                overflow: "hidden",
                textOverflow: props.textOverflow,
                WebkitLineClamp: props.lineClamp,
                WebkitBoxOrient: "vertical",
                padding: 0,
                margin: 0,
                backgroundColor: "Transparent",
                alignItems: props.alignItems,
                justifyContent: props.justifyContent,
                flexDirection: "column",
                color: props.color,
                fontSize: props.size,
                fontFamily: props.fontFamily,
                fontWeight: props.fontWeight,
                fontStyle: props.style,
                textDecoration: props.textDecoration,
                letterSpacing: `${props.spacing + 0.0001}px`,
                paddingLeft: props.spacing,
                lineHeight: props.lineHeight,
                textAlign: props.align as
                    | "left"
                    | "center"
                    | "right"
                    | "justify"
                    | "start"
                    | "end",
            }}
        >
            <p
                style={{
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: props.textOverflow,
                    display: "-webkit-box",
                    WebkitLineClamp: props.lineClamp,
                    WebkitBoxOrient: "vertical",
                    padding: 0,
                    margin: 0,
                }}
            >
                {props.text}
            </p>
        </div>
    )
}

CustomFont.defaultProps = {
    text: "Test Text",
    fontFamily:
        "'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif",
    fontWeight: "400",
    size: 14,
    color: "#333",
    style: "normal",
    textDecoration: "none",
    alignItems: "flex-start",
    justifyContent: "center",
    spacing: 0,
    lineHeight: 1.45,
    align: "left",
    lineClamp: 1,
    textOverflow: "ellipsis",
    width: 100,
    height: 20,
}

addPropertyControls(CustomFont, {
    text: { type: ControlType.String, title: "Text" },
    fontFamily: { type: ControlType.String, title: "FontFaimly" },
    color: { type: ControlType.Color, title: "Color" },
    size: { type: ControlType.Number, title: "Size", min: 0, max: 500 },
    fontWeight: {
        type: ControlType.Enum,
        defaultValue: "400",
        title: "FontWeight",
        options: ["100", "200", "300", "400", "500", "600", "700", "800"],
    },
    style: {
        type: ControlType.Enum,
        title: "Style",
        options: ["normal", "italic", "oblique"],
        optionTitles: ["normal", "italic", "oblique"],
    },
    textDecoration: {
        type: ControlType.Enum,
        title: "Decoration",
        options: ["none", "underline", "overline", "line-through"],
        optionTitles: ["none", "underline", "overline", "line-through"],
    },
    alignItems: {
        type: ControlType.Enum,
        title: "AlignItems",
        options: ["flex-start", "center", "flex-end", "baseline"],
        optionTitles: ["flex-start", "center", "flex-end", "baseline"],
    },
    justifyContent: {
        type: ControlType.Enum,
        title: "JustifyContent",
        options: ["flex-start", "center", "flex-end"],
        optionTitles: ["flex-start", "center", "flex-end"],
    },
    align: {
        type: ControlType.Enum,
        title: "Align",
        options: ["left", "center", "right", "justify", "start", "end"],
        optionTitles: ["left", "center", "right", "justify", "start", "end"],
    },
    spacing: {
        type: ControlType.Number,
        title: "Spacing",
        min: -30,
        max: 30,
        step: 0.1,
    },
    lineHeight: {
        type: ControlType.Number,
        title: "LineHeight",
        min: 0,
        max: 5,
        step: 0.1,
    },
    lineClamp: {
        type: ControlType.Number,
        title: "LineClamp",
        min: 0,
        step: 1,
    },
    textOverflow: {
        type: ControlType.Enum,
        title: "TextOverflow",
        options: ["ellipsis", "clip"],
        optionTitles: ["ellipsis", "clip"],
    },
})
