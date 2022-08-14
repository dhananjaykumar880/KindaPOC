import React from "react";
import { Dropdown, Overlay, Popover } from "react-bootstrap";

interface ISettingMenu {
  show?: boolean;
  target: HTMLElement | null;
  onHide: () => void;
}

function SettingMenu({ show, target, onHide }: ISettingMenu) {
  return (
    <>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        rootClose={true}
        onHide={onHide}
      >
        <Dropdown.Menu as={Popover} show>
          <Dropdown.Item>Sing Up/Login in</Dropdown.Item>
          <Dropdown.Item>Orders</Dropdown.Item>
          <Dropdown.Item>Help</Dropdown.Item>
        </Dropdown.Menu>
      </Overlay>
    </>
  );
}

export default SettingMenu;
