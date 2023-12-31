import { Col, Row } from "reactstrap";
import SideBar from "./components/SideBar";
import "./global.scss";
import Chat from "./components/Chat";
import AccountItem from "./components/AccountItem";
import Setting from "./components/setting/setting";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth.jsx";

function App() {
    //useSelector((state) => state.user.isLogin);
    const toggleSideBar = useSelector((state) => state.app.toggleSideBar);
    const isLogin = false;

    return (
        <main>
            {isLogin ? (
                <Row className="limit-height">
                    {toggleSideBar && (
                        <Col sm={12} className="pe-0 hidden-pc">
                            <SideBar isMobile />
                        </Col>
                    )}
                    <Col md={3} sm={0} className="pe-0 hidden-mb">
                        <SideBar />
                    </Col>
                    <Col
                        md={9}
                        sm={12}
                        className="d-flex justify-content-between ps-0 pe-0"
                    >
                        <div className="flex-w100 flex-grow-1 h-100">
                            <AccountItem
                                className="py-3 custom-header-account"
                                img="https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg"
                                title="Elon Musk Dev"
                                isHeader={true}
                                // timeOfflineOrMember="45 Thành viên"
                                timeOfflineOrMember="Hoạt động 4 Giờ Trước"
                            />
                            <Chat />
                        </div>
                        <Setting />
                    </Col>
                </Row>
            ) : (
                <>
                    <Auth />
                </>
            )}
        </main>
    );
}

export default App;
