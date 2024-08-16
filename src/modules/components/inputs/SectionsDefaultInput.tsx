import React, { useEffect, useState } from "react";
import styles from "./SectionsDefaultInput.module.css";

interface SectionsDefaultInputProps {
  headerTitles: JSX.Element[];
  delegateOnClickHandlers: (() => void)[];
  content: JSX.Element[];
  activeElementIdx: number;
  activeHeaderElement: string;
  deActiveHeaderElement: string;
}

const SectionsDefaultInput: React.FC<SectionsDefaultInputProps> = (props) => {
  const [activeElementIdx, setActiveLinkIdx] = useState<number>(
    props.activeElementIdx
  );
  const [dtoElements, setDtoElements] = useState<SectionsDefaultInputItem[]>(
    []
  );

  useEffect(() => {
    const initialDtoElements: SectionsDefaultInputItem[] = [];

    props.headerTitles.forEach((title, index) => {
      initialDtoElements.push({
        headerTitleElement: title,
        delegateFunc: props.delegateOnClickHandlers[index],
        content: props.content[index],
      });
    });

    setDtoElements(
      _selectElementAsActive(initialDtoElements, props.activeElementIdx)
    );
  }, [
    props.headerTitles,
    props.delegateOnClickHandlers,
    props.content,
    props.activeElementIdx,
  ]);

  const _selectElementAsActive = (
    elements: SectionsDefaultInputItem[],
    index: number
  ): SectionsDefaultInputItem[] => {
    if (index < 0 || index >= elements.length) {
      return elements;
    }

    const movedElement = elements[index];
    const newElements = [...elements];
    newElements.splice(index, 1);
    newElements.unshift(movedElement);

    return newElements;
  };

  const _headerClickHandler = (idx: number) => {
    // console.log(idx);
    setActiveLinkIdx(idx);
    setDtoElements((prevState) => _selectElementAsActive(prevState, idx));
    props.delegateOnClickHandlers[idx]();
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {/* Content */}
        <div className={styles.contentContainer}>
          <div className={styles.headerSubContainerActive}>{dtoElements.length > 0 &&
            activeElementIdx >= 0 &&
            dtoElements[0].headerTitleElement}</div>
          {dtoElements.length > 0 &&
            activeElementIdx >= 0 &&
            dtoElements[0].content}
        </div>

        {/* Header */}
        <div className={styles.headerContainer}>
          {dtoElements.map((item: SectionsDefaultInputItem, i: number) => {
            if (i !== 0) {
              return <div
                key={i}
                className={styles.headerSubContainer}
                onClick={(): void => _headerClickHandler(i)}
              >
                <div
                  className={props.deActiveHeaderElement}
                >
                  {item.headerTitleElement}
                </div>
              </div>
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionsDefaultInput;
