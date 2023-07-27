import classNames from "classnames/bind";

import styles from "./setting.module.scss";
import { useSelector } from "react-redux";
import AccountItem from "../AccountItem";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);

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

export default function Setting() {
    const isOpenSetting = useSelector((state) => state.app.isOpenSetting);

    const [edit, setIsEdit] = useState(false);
    const refInput = useRef(null);

    const handleClickChangeThumbnail = () => {
        const inputElement = refInput.current;

        if (inputElement) {
            inputElement.click();
        }
    };

    return (
        <div className={cx("wp", `${isOpenSetting ? "active" : "disable"}`)}>
            <div
                className={cx(
                    "header-info",
                    "d-flex py-3 gap-2 justify-content-between px-2 align-items-center"
                )}
            >
                <button className="btn">
                    <i className="bi bi-x"></i>
                </button>
                <h4>Group Info</h4>
                <button
                    className="btn"
                    onClick={() => {
                        setIsEdit(!edit);
                    }}
                >
                    <i className="bi bi-pencil-fill"></i>
                </button>
            </div>
            {!edit ? (
                <div className={cx("one-step")}>
                    <div className={cx("introduce")}>
                        <img
                            className={cx("thumbnail")}
                            src="https://images.pexels.com/photos/3654869/pexels-photo-3654869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <h5>Elon Musk Dev</h5>
                        <div className="px-2 py-4">
                            <div className="d-flex align-items-center gap-3">
                                <i className="bi bi-info-circle"></i>
                                <p className={cx("note", "pe-3")}>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Laborum non vero
                                    quibusdam, rem perspiciatis doloremque
                                    officia architecto deserunt voluptate
                                    maiores veniam obcaecati cumque blanditiis
                                    dicta? Alias veniam ea iure mollitia!
                                    Laudantium officiis sunt quisquam odit rem
                                    doloremque, sint deserunt deleniti labore,
                                    praesentium ut ipsa adipisci. Optio
                                    obcaecati, voluptate eius error corporis
                                    omnis, soluta deserunt suscipit aperiam unde
                                    asperiores repellat. Harum? Illo quaerat
                                    architecto quasi sapiente sunt culpa
                                    officiis, saepe ipsa delectus neque
                                    doloremque vel nemo similique explicabo quod
                                    ut recusandae eum eos praesentium possimus
                                    totam consequatur cumque maiores debitis!
                                    Voluptatum. Aut quam praesentium suscipit
                                    consequatur cum. Deleniti ipsam non in neque
                                    deserunt est, vero voluptatem nostrum.
                                    Provident animi non at! Provident, aperiam
                                    enim. Culpa alias dolor vitae ullam
                                    aspernatur similique! Quae, unde voluptatem
                                    repellat laboriosam quo illo suscipit
                                    voluptate dolores minus cumque neque
                                    corrupti expedita mollitia amet sit nemo
                                    fugit vero labore maiores voluptatibus odio
                                    harum earum maxime aut. Tenetur!
                                </p>
                            </div>
                            <div className={cx("nav")}>
                                <button>users</button>
                            </div>
                            {a.map((item, index) => (
                                <AccountItem
                                    title={item.title}
                                    time={item.time}
                                    img={item.img}
                                    lastMsg={item.lastMsg}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx("content")}>
                    <div
                        className={cx("introduce", "customize-edit")}
                        onClick={handleClickChangeThumbnail}
                    >
                        <img
                            className={cx("thumbnail", "edit")}
                            src="https://images.pexels.com/photos/3654869/pexels-photo-3654869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <span>Thay Hình Ảnh</span>
                        <div className={cx("overlay")}></div>
                        <input ref={refInput} type="file" hidden />
                    </div>
                    <div className="row mt-4">
                        <div className="mb-3">
                            <label className="form-label">
                                <strong>Tên Group</strong>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên Group của bán"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
