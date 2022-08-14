import React, { useCallback, useState } from "react";
import {
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import { MdOutlineShoppingCart, MdSearch, MdSettings } from "react-icons/md";
import SettingMenu from "./SettingMenu";

function Header() {
  const [showSettingMenu, setShowSettingMenu] = useState(false);
  const [settingMenuTarget, setsettingMenuTarget] =
    useState<HTMLAnchorElement | null>(null);
  const handleSettingClick = useCallback((event: React.MouseEvent) => {
    setShowSettingMenu((s) => !s);
    setsettingMenuTarget(() => event.target as HTMLAnchorElement);
  }, []);
  return (
    <>
      <Navbar className="mb-4">
        <Container className="align-items-start" fluid>
          <Navbar.Brand style={{ color: "green" }}>
            GreenTune
            <img
              src="assets/logo.png"
              width="100"
              height="140"
              className="d-inline-block align-top"
              alt="GreenTune"
            />
          </Navbar.Brand>
          <Stack gap={5} className="align-items-center p-2">
            <Form noValidate className="w-75">
              <InputGroup>
                <InputGroup.Text style={{ backgroundColor: "white" }}>
                  <MdSearch />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  name="q"
                  placeholder="Search"
                  className="me-2 border-start-0"
                  aria-label="Search"
                />
              </InputGroup>
            </Form>
            <h2 className="h1" style={{ color: "green" }}>
              Your health deserves this one
            </h2>
          </Stack>
          <Nav>
            <Nav.Link onClick={handleSettingClick}>
              <MdSettings />
            </Nav.Link>
            <SettingMenu
              show={showSettingMenu}
              target={settingMenuTarget}
              onHide={() => setShowSettingMenu(false)}
            />
            <Nav.Link>
              <MdOutlineShoppingCart />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
