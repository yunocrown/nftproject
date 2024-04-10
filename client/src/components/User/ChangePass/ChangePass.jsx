import React from "react";
import classes from "./ChangePass.module.css";

import Card from "../../UI/Card/Card.jsx";
import InputField from "../../UI/InputField/InputField.jsx";
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";

const ChangePass = () => {
  return (
    <>
      <div className={classes.pass_container}>
        <Card width="800px" height="320px">
          <div className={classes.outer_container}>
            <div className={classes.inputs}>
              <InputField
                // reference={nameRef}
                type="password"
                // value={name}
                label="Enter New Password"
                name="password"
                placeholder="Password"
                required
              />
              <InputField
                // reference={nameRef}
                type="password"
                // value={name}
                label="Confirm New Password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <CustomButton filled label="Change Password" />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChangePass;
