
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from './logo.png';
import telegram from './telegram.png';
import budilnik from './budilnik.png';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <>
      <Navbar style={{ height: '100px', backgroundColor: '#BE95C4', boxShadow: '0px 2px 0px', zIndex: "7" }}>
        <Container bg="#BE95C4" style={{position: 'absolute', width: '100%'}}>
          <Link to="/Main" style={{left: '0'}}>
            <img
              src={logo}
              height="100%"
              className="d-inline-block align-top"
              alt="logo"
              style={{ left: "0" }}
            />
          </Link>
          <Nav className="ms-left d-flex flex-row-reverse" style={{position: 'absolute', fontSize: "1vw", right: '-20vw'}}>
            <Nav.Link href="/" className="nav-link-with-icon">
              <img src={telegram} className="nav-link-icon" alt="Telegram" />
              Telegram
            </Nav.Link>
            <Nav.Link href="/" className="nav-link-with-icon">
              <img src={budilnik} className="nav-link-icon" alt="Set Notifications" />
              Set Notifications
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

