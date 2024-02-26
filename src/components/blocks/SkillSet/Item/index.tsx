import Image from "next/image";
import React from "react";
interface ItemProps {
  image: string;
  title: string;
  subtitle: string;
}
const Item: React.FC<ItemProps> = ({ image, title, subtitle }) => {
  console.log("Incoming" + image, title, subtitle);
  return (
    <div className="flex flex-row m-2 p-4 rounded-lg bg-gray-700">
      <Image className="mr-3" alt={title} src={image} width={50} height={50} loading={"lazy"} />
      <div className="flex flex-col">
        <strong>{title}</strong>
        {subtitle}
      </div>
    </div>
  );
};

export default Item;
