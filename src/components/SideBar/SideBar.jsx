/* eslint-disable react/prop-types */
import classNames from "classnames/bind";

import styles from "./sidebar.module.scss";
import AccountItem from "../AccountItem";
import { useDispatch } from "react-redux";
import { toggleSideBarFunc } from "../../features/app/appSlice";
const cx = classNames.bind(styles);

export default function SideBar({ isMobile = false }) {
    const dispatch = useDispatch();

    /* isMobile de click toggle toggleSideBar redux */

    const a = [
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk Dev",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },

        {
            img: "https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg",
            title: "Elon Musk",
            lastMsg: "hank you for the invitation, Denis",
            time: "10:57",
        },
    ];

    const handleClick = () => {
        dispatch(toggleSideBarFunc());
    };

    return (
        <div className={cx("px-2 p-4", "wp")}>
            <input className={cx("input-search")} placeholder="Tìm kiếm..." />
            <div className={cx("navigation")}>
                <button className={cx("active")}>All Chat</button>
                <button>
                    New
                    <span className={cx("badge-custom")}>9</span>
                </button>
                <button>
                    Work
                    <span className={cx("badge-custom")}>20</span>
                </button>
            </div>
            <div className={cx("list-item-chat")}>
                {a.map((item, index) => (
                    <AccountItem
                        onClick={handleClick}
                        title={item.title}
                        time={item.time}
                        img={item.img}
                        lastMsg={item.lastMsg}
                        key={index}
                        isShowMenu={false}
                    />
                ))}
            </div>
        </div>
    );
}
