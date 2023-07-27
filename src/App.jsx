import { Col, Row } from "reactstrap";
import SideBar from "./components/SideBar";
import "./global.scss";
import Chat from "./components/Chat";
import AccountItem from "./components/AccountItem";
import Setting from "./components/setting/setting";

function App() {
    return (
        <main>
            <Row>
                <Col md={3} className="pe-0">
                    <SideBar />
                </Col>
                <Col md={9} className="d-flex justify-content-between ps-0">
                    <div className="flex-w100 flex-grow-1 h-100">
                        <AccountItem
                            className="py-3 custom-header-account"
                            img="https://media.thuonghieucongluan.vn/uploads/2018_06_06/5-1528272790.jpg"
                            title="Elon Musk Dev"
                            isHeader={true}
                            timeOfflineOrMember="45 Thành viên"
                            // timeOfflineOrMember="Hoạt động 4 Giờ Trước"
                        />
                        <Chat />
                    </div>
                    <Setting />
                </Col>
            </Row>
        </main>
    );
}

export default App;
