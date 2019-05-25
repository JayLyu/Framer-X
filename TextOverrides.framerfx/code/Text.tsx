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
    alignItems: string
    justifyContent: string
    spacing: number
    line: number
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
                letterSpacing: `${props.spacing + 0.0001}px`,
                paddingLeft: props.spacing,
                lineHeight: props.line,
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
    text: "测试文本",
    fontFamily:
        "'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif",
    fontWeight: "400",
    size: 14,
    color: "#333",
    style: "normal",
    alignItems: "flex-start",
    justifyContent: "center",
    spacing: 0,
    line: 1.45,
    align: "left",
    lineClamp: 1,
    textOverflow: "ellipsis",
    width: 100,
    height: 20,
}

addPropertyControls(CustomFont, {
    text: { type: ControlType.String, title: "文本" },
    fontFamily: { type: ControlType.String, title: "字体" },
    color: { type: ControlType.Color, title: "文字颜色" },
    size: { type: ControlType.Number, title: "文字大小", min: 0, max: 500 },
    fontWeight: {
        type: ControlType.Enum,
        defaultValue: "400",
        title: "字重",
        options: ["100", "200", "300", "400", "500", "600", "700", "800"],
    },
    style: {
        type: ControlType.Enum,
        title: "样式",
        options: ["normal", "italic", "oblique"],
        optionTitles: ["默认", "斜体", "倾斜"],
    },
    alignItems: {
        type: ControlType.Enum,
        title: "水平对齐",
        options: ["flex-start", "center", "flex-end", "baseline"],
        optionTitles: ["左对齐", "居中", "右对齐", "基线对齐"],
    },
    justifyContent: {
        type: ControlType.Enum,
        title: "垂直对齐",
        options: ["flex-start", "center", "flex-end"],
        optionTitles: ["顶对齐", "居中", "底对齐"],
    },
    align: {
        type: ControlType.Enum,
        title: "文字对齐",
        options: ["left", "center", "right", "justify", "start", "end"],
        optionTitles: ["左对齐", "居中", "右对齐", "两端对齐", "Start", "End"],
    },
    spacing: {
        type: ControlType.Number,
        title: "字间距",
        min: -30,
        max: 30,
        step: 0.1,
    },
    line: {
        type: ControlType.Number,
        title: "行高",
        min: 0,
        max: 5,
        step: 0.1,
    },
    lineClamp: {
        type: ControlType.Number,
        title: "最大行数",
        min: 0,
        step: 1,
    },
    textOverflow: {
        type: ControlType.Enum,
        title: "超出裁切",
        options: ["ellipsis", "clip"],
        optionTitles: ["省略号", "裁切"],
    },
})
