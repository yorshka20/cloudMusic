import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Input, Button } from "antd";

import "./style.less";
import { useSelector } from "react-redux";

function LoginModal() {
  const showModal = useSelector((state: any) => state.app.showModal);

  useEffect(() => {
    console.log("showmodal", showModal);
  }, [showModal]);

  const handleConfirm = () => {
    console.log("confirm in login modal");
  };

  const handleCancel = () => {
    console.log("handle cancel");
  };

  const handleInputAccount = (e: any) => {
    console.log("handleInout", e);
  };

  const handleInputPassword = (e: any) => {
    console.log("handlePassowrd", e);
  };

  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="login-modal">
      <div className="form-block">
        <Input type="text" onChange={handleInputAccount} width={120} />
        <Input type="password" onChange={handleInputPassword} width={120} />
      </div>

      <Button onClick={handleConfirm} type="primary">
        login
      </Button>
      <Button onClick={handleCancel}>cancel</Button>
    </div>,
    document.createElement("div")
  );
}

export default React.memo(LoginModal);
