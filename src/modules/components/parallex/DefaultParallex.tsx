import React, { useEffect } from "react";
import styles from "./DefaultParallex.module.css";

interface DefaultParallaxProps {
  siteRef: React.RefObject<HTMLElement>;
  item: JSX.Element;
  deltaY: number | null;
  initScroll: number;
  maxScroll: number;
  movementStyle: (scrollY: number) => React.CSSProperties;
  scrollY: number;
  setScrollY: React.Dispatch<React.SetStateAction<number>>;
  nextPhase: () => void;
  prevPhase: () => void;
}

const DefaultParallax: React.FC<DefaultParallaxProps> = (
  props: DefaultParallaxProps
) => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (props.siteRef.current) {
        const deltaY: number = event.deltaY;
        const nextScroll: number = props.scrollY + deltaY;

        // console.log(`ScrollY:${props.scrollY}, maxScroll:${props.maxScroll}`);

        if (nextScroll <= props.maxScroll) {
          //console.log(nextScroll)
          props.setScrollY((prevState) => {
            return prevState + deltaY >= 0 ? prevState + deltaY : prevState;
          });
        } else if (nextScroll >= 0) {
          // console.log("unmount")
          unmountModuleAndUpdatePhase(handleWheel, nextScroll);
        }
      }
    };

    if (props.siteRef.current) {
      props.siteRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      props.siteRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (props.siteRef.current) {
        props.siteRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [props]);

  const unmountModuleAndUpdatePhase = (
    handleWheel: (event: WheelEvent) => void,
    nextScroll: number
  ) => {
    if (nextScroll > props.maxScroll) {
      props.nextPhase();
    } else {
      props.prevPhase();
    }
    if (props.siteRef.current) {
      props.siteRef.current.removeEventListener("wheel", handleWheel);
    }
  };

  return (
    <div
      className={styles.container}
      style={props.movementStyle(props.scrollY)}
    >
      {props.item}
    </div>
  );
};

export default DefaultParallax;

/*
const [phaseProfileImage, setPhaseProfileImage] = useState<number>(0);
  const [phaseDrones, setPhaseDrones] = useState<number>(0);

  // [NEXT & PREV Handlers]
  const nextPhaseProfileImage = () => {
    setPhaseProfileImage((prev: number) => {
      if (prev < NUMBER_OF_PHASES - 1) {
        return prev + 1;
      }
      return NUMBER_OF_PHASES - 1;
    });
  };
  const prevPhaseProfileImage = () => {
    setPhaseProfileImage((prev: number) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  };
*/
