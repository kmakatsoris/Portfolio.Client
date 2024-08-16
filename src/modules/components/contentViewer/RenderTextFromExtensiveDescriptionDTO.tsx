import React, { useEffect, useState } from "react";
import styles from "./RenderTextFromExtensiveDescriptionDTO.module.css";

interface RenderTextFromExtensiveDescriptionDTOProps {
  texts: ExtensiveDescriptionDTO[];
  index: number;
  targetLocation: string;
  fontSize: string;
}

const RenderTextFromExtensiveDescriptionDTO: React.FC<
  RenderTextFromExtensiveDescriptionDTOProps
> = (props) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [result, setResult] = useState<JSX.Element | undefined>(undefined);

  useEffect(() => {
    renderTextBasedOnLocationAndIndex();
    renderArrayOfElements(elements);
  }, [props.index, props.texts, props.targetLocation]);

  const _findClassname = (location: string) => {
    switch (location) {
      case "Space":
        return styles.spaceContainer;
      case "Line":
        return styles.lineContainer;
      case "Paragraph":
        return styles.paragraphContainer;
      case "Page":
        return styles.pageContainer;
      default:
        return styles.defaultContainer;
    }
  };

  const renderTextBasedOnLocationAndIndex = () => {
    let foundOnce: boolean = false;
    let foundTwice: boolean = false;
    let locationCounter = 0;
    const els = props.texts.map(
      (t: ExtensiveDescriptionDTO, idx: number): JSX.Element | null => {
        if (t.location !== props.targetLocation && foundOnce && !foundTwice) {
          return (
            <div
              key={idx}
              className={_findClassname(t.location)}
              style={{ color: t.color, fontSize: props.fontSize }}
            >
              {t.text}
            </div>
          );
        }
        if (t.location === props.targetLocation && foundOnce) foundTwice = true;
        if (t.location === props.targetLocation && !foundOnce) {
          if (locationCounter === props.index) {
            foundOnce = true;
            return (
              <div
                key={idx}
                className={_findClassname(t.location)}
                style={{ color: t.color, fontSize: props.fontSize }}
              >
                {t.text}
              </div>
            );
          } else {
            locationCounter += 1;
          }
        }
        return null;
      }
    );

    setElements(els.filter((e) => e !== null) as JSX.Element[]);
  };

  const renderArrayOfElements = (elements: JSX.Element[]) => {
    if (elements?.length > 0) {
      setResult(
        <div key={elements?.length} className={styles.container}>
          {elements.map((e: JSX.Element, idx: number) => (
            <span key={idx} className={e.props.className} style={e.props.style}>
              {e.props.children}
            </span>
          ))}
        </div>
      );
    }
  };

  return result ?? <>Loading...</>;
};

export default RenderTextFromExtensiveDescriptionDTO;
