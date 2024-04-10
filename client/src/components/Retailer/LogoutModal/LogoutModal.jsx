import React, { useContext } from "react";
import classes from "./LogoutModal.module.css";
import { sellerAuthContext } from "../../../Contexts";

import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import Modal from "../../UI/Modal/Modal.jsx";

const LogoutModal = (props) => {
  const { logoutSeller } = useContext(sellerAuthContext);

  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.text}>Are you sure you want to logout?</h1>
      <div className={classes.btns}>
        <CustomButton label="Logout" onClick={logoutSeller} />
        <CustomButton label="Cancel" filled onClick={props.onClose} />
      </div>
    </Modal>
  );
};

export default LogoutModal;
