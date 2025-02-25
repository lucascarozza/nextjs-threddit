import React from "react";

interface CardProps {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  outerClassName,
  innerClassName,
}) => {
  return (
    <div
      className={`p-[1px] bg-gradient-to-t from-pink-500 to-yellow-500 rounded-4xl shadow-sm overflow-hidden ${outerClassName}`}
    >
      <div
        className={`flex flex-col w-full h-full bg-zinc-800 rounded-4xl ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
