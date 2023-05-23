import React from "react";


interface ButtonProps {
    textButton?: string;
    styleClass?: string;
    text?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    textButton,
    styleClass,
    text,
    onClick,
}) => {

    return (
        <button onClick={onClick} className={styleClass}>
            {textButton ? textButton : text}
        </button>
    );
};

export default Button;


