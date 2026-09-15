import * as React from "react";

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
      {icon && <div className="mb-4 text-white text-2xl">{icon}</div>}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
};
