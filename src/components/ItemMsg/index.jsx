/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./itemmsg.module.scss";

import IsViewImg from "../../assets/img/Vector.png";
const cx = classNames.bind(styles);

export default function MsgItem({ text, isUser, className, isView }) {
    return (
        <div
            className={cx(
                "msg",
                `${isUser ? "user" : ""}`,
                "mb-3",
                `${className}`
            )}
        >
            <div className={cx("msg-children")}>
                <div className={cx("render-text")}>
                    <p>{text}</p>
                </div>
                <Test />
                <div>
                    <span>
                        19:57
                        {isView && (
                            <img className="ms-2" src={IsViewImg} alt="" />
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}

function Test() {
    console.log("check re-redner");

    return <div></div>;
}
