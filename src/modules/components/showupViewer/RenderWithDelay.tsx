import React, { useEffect, useState } from "react";
import styles from "./RenderWithDelay.module.css";

interface RenderWithDelayProps {
    content: JSX.Element;
    interval: number;
    mode: number;
    transitionDistance: string;
}

const RenderWithDelay = (props: RenderWithDelayProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        let intervalId: NodeJS.Timer;

        if (!isVisible) {
            intervalId = setInterval(() => {
                setIsVisible(true);
            }, props.interval);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [props.interval, isVisible]);

    const loadAnimationContainer = () => {
        switch (props.mode) {
            case 0:
                return styles.slideLeftcontainer;
            case 1:
                return styles.slideRightcontainer;
            case 2:
                return styles.slideUpcontainer;
            default:
                return '';
        }
    }

    const contentClassName = props.content.props.className || '';
    const animationClassName = loadAnimationContainer();
    const classNames = `${contentClassName} ${animationClassName}`.trim();
    const style = { "--transitionDistance": `${props.transitionDistance}` };

    const mergedStyle = Object.assign({}, props.content.props.style, style);

    const clonedElement = React.cloneElement(props.content, {
        className: classNames,
        style: mergedStyle
    });

    return isVisible ? clonedElement : <></>;
}

export default RenderWithDelay;
