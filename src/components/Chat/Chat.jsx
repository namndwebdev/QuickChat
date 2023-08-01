import classNames from "classnames/bind";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import IsViewImg from "../../assets/img/Vector.png";
import styles from "./chat.module.scss";
import MsgItem from "../ItemMsg";
const cx = classNames.bind(styles);

export default function Chat() {
    return (
        <div className={cx("wp")}>
            <div className={cx("children")}>
                <div className={cx("render-chat", "py-2", "px-5")}>
                    <MsgItem
                        isUser={true}
                        text="testst"
                        className={"cia"}
                        // isView={true}
                        data={{ name: "testst" }}
                    />
                    <MsgItem text="testst 234324" isView={true} />
                </div>
                <div className={cx("input-chat")}>
                    <input
                        type="text"
                        placeholder="Nhập tin nhắn bạn muốn gửi...."
                    />
                    <button>
                        <i className="bi bi-send-fill"></i>
                    </button>
                    <div className={cx("button-emoj")}>
                        <div className={cx("emoij-wp")}>
                            {/* <Picker data={data} onEmojiSelect={console.log} /> */}
                        </div>
                        <button>
                            <i className="bi bi-emoji-smile"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
