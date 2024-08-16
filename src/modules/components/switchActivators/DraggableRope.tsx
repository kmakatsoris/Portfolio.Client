import React from "react";
import styles from "./DraggableRope.module.css";
import rope from "../../../images/icons/Header/rope.png";
import { useDrag } from "react-dnd";

const DraggableRope = () => {
  const [{ isDragging }, drag] = useDrag({
    type: "ROPE",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`${styles.container} ${
        isDragging ? styles.draggableRopeDragging : ""
      }`}
    >
      <img ref={drag} src={rope} alt="Rope" className={styles.img} />
    </div>
  );
};

export default DraggableRope;
