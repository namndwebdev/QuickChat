/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./accountItem.module.scss";
import { useDispatch } from "react-redux";
import { toggleSetting, toggleSideBarFunc } from "../../features/app/appSlice";
const cx = classNames.bind(styles);

AccountItem.PropTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    lastMsg: PropTypes.string,
    img: PropTypes.string,
};

export default function AccountItem({
    title = "",
    time = "",
    img = "",
    lastMsg = "",
    timeOfflineOrMember = "",
    className = "",
    isHeader = false,
    isShowMenu = true,
    onClick = () => {},
}) {
    const dispatch = useDispatch();

    const handleToggleSetting = () => {
        dispatch(toggleSetting());
    };

    const handleClick = () => {
        dispatch(toggleSideBarFunc());
    };

    return (
        <div
            onClick={onClick}
            className={cx(
                "item-chat",
                `${isHeader ? "shadown-cs" : ""}`,
                className
            )}
        >
            {isShowMenu && (
                <button
                    onClick={handleClick}
                    className={cx("btn", "pe-3", "hidden-pc")}
                >
                    <i className="bi bi-menu-button-wide-fill"></i>
                </button>
            )}
            <img src={img} alt="Hình ảnh avatar" />
            <div className={cx("info-and-time")}>
                <div>
                    <h3>{title}</h3>
                    {isHeader ? (
                        <p className="time-online">{timeOfflineOrMember}</p>
                    ) : (
                        <p>{lastMsg}</p>
                    )}
                </div>
                {!isHeader ? (
                    <div>
                        <p>{time}</p>
                        <span className={cx("badge-custom")}>20</span>
                    </div>
                ) : (
                    <div className="d-flex flex-row gap-4 pe-5 text-lg h5 no-padding-right">
                        <p>
                            <i className="bi bi-telephone"></i>
                        </p>
                        <p>
                            <i className="bi bi-camera-video"></i>
                        </p>
                        <p onClick={handleToggleSetting}>
                            <i className="bi bi-three-dots"></i>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
