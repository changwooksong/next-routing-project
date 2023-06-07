import Link from "next/link";
import styled from "./button.module.css";

const Button = (props) => {
    if (props.link) {
        return (
            <Link href={props.link} className={styled.btn}>
                {props.children}
            </Link>
        );
    }

    return (
        <button className={styled.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
