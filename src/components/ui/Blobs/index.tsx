import React from "react";
import styles from "./styles.module.scss";

interface BlobsProps {
  classVariable?: string;
  type?: string;
}

const Blobs: React.FC<BlobsProps> = ({ classVariable = "", type = "v1" }) => {
  const blobType = type ? type : "v1";
  return (
    <div
      className={`${styles.blob} ${styles[blobType]} ${classVariable}`}
    ></div>
  );
}

export default Blobs;
