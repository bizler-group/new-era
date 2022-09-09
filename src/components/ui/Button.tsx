import { FC, ReactNode } from "react";

interface ButtonProps {
    color: "primary" | "black";
    onClick?: () => void;
    children: ReactNode;
    type?: "reset" | "button" | "submit";
}

export const Button: FC<ButtonProps> = ({ color, onClick, children, type }) => {
    return (
        <button
            onClick={onClick}
            className={`flex justify-center items-center font-bold text-sm xl:text-tiny h-54 xl:h-64 w-[240px] xl:w-[400px] cursor-pointer ${
                color === "primary"
                    ? "bg-primary text-black"
                    : "bg-black text-primary"
            }`}
            type={type || "button"}
        >
            {children}
        </button>
    );
};
