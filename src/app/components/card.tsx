import React from "react";

// Mengupdate tipe props untuk Card dan CardContent agar menerima className
type CardProps = {
  children: React.ReactNode;
  className?: string;  // className menjadi opsional
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white p-3 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}>
      {children}
    </div>
  );
}

type CardContentProps = {
  children: React.ReactNode;
  className?: string;  // className menjadi opsional
};

export function CardContent({ children, className }: CardContentProps) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}