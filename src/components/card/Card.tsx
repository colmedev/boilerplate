import React from "react";
import "./card.css";
type CardProps = {
  title: string;
  key?: number;
  children?: React.ReactNode;
  className?: string;
};


const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
    <div className={className}>
      <h2 className="card__title">{title}</h2>
      <pre>{children}</pre>
    </div>
  );
};

export default Card;
