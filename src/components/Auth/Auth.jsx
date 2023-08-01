/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";

import bgAuth from "../../assets/img/bg-auth.png";
import styles from "./auth.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconFacebookAuth, IconGoogleAuth, IconTwitterAuth } from "../icons";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/user/userSlice";

const cx = classNames.bind(styles);

export default function Auth() {
    const dispatch = useDispatch();

    const [isLoginComponent, setIsLoginComponent] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleValidate = (arrValidate = []) => {
        let isValid = true;

        for (let i = 0; i < arrValidate.length; i++) {
            if (!arrValidate[i]) {
                alert("Bạn nhập thiếu trường !");
                isValid = false;
                break;
            }
        }

        return isValid;
    };

    const handleValidLoginAndRegister = (user) => {
        dispatch(loginSuccess(user));
    };

    const handleSubmit = (type = "login") => {
        /* handleValidLoginAndRegister dispatch user dang nhap */

        if (type === "login") {
            const check = handleValidate([email, password, phoneNumber]);

            if (!check) return;

            /* call api here */
            /* handleValidLoginAndRegister() */
        }

        if (type === "register") {
            const check = handleValidate([email, password]);

            if (!check) return;

            /* call api here */
            /* handleValidLoginAndRegister() */
        }
    };

    return (
        <div className={cx("auth-container")}>
            <div className={cx("wrapper-jax")}>
                <div className={cx("content-authentication")}>
                    <div className={cx("row-authentication")}>
                        <div className={cx("col-0", "jsx-lef-authentication")}>
                            <div className={cx("content-left")}>
                                <h3>Hi, Welcome Back</h3>
                                <img src={bgAuth} alt="Bg" loading="lazy" />
                            </div>
                        </div>
                        <div className={cx("jsx-right-authentication")}>
                            <span className={cx("jax-sd")}>
                                Don't have an account?{" "}
                                <Link
                                    to="/"
                                    onClick={() => {
                                        setIsLoginComponent(!isLoginComponent);
                                    }}
                                >
                                    {isLoginComponent
                                        ? " Đăng ký"
                                        : " Đăng nhập"}
                                </Link>
                            </span>

                            <div className={cx("row-jax")}>
                                {isLoginComponent ? (
                                    <div
                                        className={cx(
                                            "chuk-jax-auth",
                                            " login-jax"
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                "title-authentication login"
                                            )}
                                        >
                                            <h1>Auth Nodemy Chat App</h1>
                                            <p>Enter your details below.</p>
                                        </div>
                                        <div
                                            className={cx(
                                                "py-3",
                                                "login-mildware"
                                            )}
                                        >
                                            <button>
                                                <IconGoogleAuth />
                                            </button>
                                            <button>
                                                <IconFacebookAuth />
                                            </button>
                                            <button>
                                                <IconTwitterAuth />
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "text-center",
                                                "jsx-or-options"
                                            )}
                                        >
                                            <b></b>
                                            <span>or</span>
                                            <b></b>
                                        </div>
                                        <div
                                            className={cx(
                                                "jsx-parents-input-and-label"
                                            )}
                                        >
                                            <label>Email</label>
                                            <input
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className={cx(
                                                    "jsx-input-authentication"
                                                )}
                                                placeholder="Nhập email của bạn eg: abc@gmail.com"
                                            />
                                        </div>
                                        <div className="jsx-parents-input-and-label login">
                                            <label>Password</label>
                                            <input
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                type="password"
                                                className={cx(
                                                    "jsx-input-authentication"
                                                )}
                                                placeholder="Nhập password của bạn eg: matkhaucauban"
                                            />
                                        </div>
                                        <div
                                            className={cx(
                                                "py-1 d-flex justify-content-end",
                                                "forgot-pass"
                                            )}
                                        >
                                            <button>Forgot password?</button>
                                        </div>
                                        <div
                                            className={cx(
                                                "text-center",
                                                "button-submit-jsx",
                                                "login"
                                            )}
                                        >
                                            <button
                                                onClick={() =>
                                                    handleSubmit("login")
                                                }
                                            >
                                                Đăng Nhập
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className={cx(
                                            "chuk-jax-auth",
                                            "login-jax"
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                "title-authentication",
                                                "login"
                                            )}
                                        >
                                            <h1>Auth Nodemy Chat App</h1>
                                            <p>Enter your details below.</p>
                                        </div>
                                        <div
                                            className={cx(
                                                "py-3",
                                                "login-mildware"
                                            )}
                                        >
                                            <button>
                                                <IconGoogleAuth />
                                            </button>
                                            <button>
                                                <IconFacebookAuth />
                                            </button>
                                            <button>
                                                <IconTwitterAuth />
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "text-center",
                                                "jsx-or-options"
                                            )}
                                        >
                                            <b></b>
                                            <span>or</span>
                                            <b></b>
                                        </div>
                                        <div
                                            className={cx(
                                                "jsx-parents-input-and-label"
                                            )}
                                        >
                                            <label>Email</label>
                                            <input
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className={cx(
                                                    "jsx-input-authentication"
                                                )}
                                                placeholder="Nhập email của bạn eg: abc@gmail.com"
                                            />
                                        </div>
                                        <div
                                            className={cx(
                                                "jsx-parents-input-and-label",
                                                "login"
                                            )}
                                        >
                                            <label>Password</label>
                                            <input
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                type="password"
                                                className={cx(
                                                    "jsx-input-authentication"
                                                )}
                                                placeholder="Nhập password của bạn eg: matkhaucauban"
                                            />
                                        </div>
                                        <div
                                            className={cx(
                                                "jsx-parents-input-and-label",
                                                "login"
                                            )}
                                        >
                                            <label>phoneNumber</label>
                                            <input
                                                value={phoneNumber}
                                                onChange={(e) =>
                                                    setPhoneNumber(
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className={cx(
                                                    "jsx-input-authentication"
                                                )}
                                                placeholder="Nhập số điện thoại của bạn"
                                            />
                                        </div>
                                        <div
                                            className={cx(
                                                "text-center",
                                                "button-submit-jsx",
                                                "login"
                                            )}
                                        >
                                            <button
                                                onClick={() =>
                                                    handleSubmit("register")
                                                }
                                            >
                                                Đăng ký
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
