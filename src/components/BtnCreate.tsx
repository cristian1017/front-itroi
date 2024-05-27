import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Popup } from "./Popup";

export const BtnCreate = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const handleOpen = () => {
    setIsOpenPopup(true);
  };
  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>
        Create User
      </Button>
      {isOpenPopup && <Popup open={isOpenPopup} handleClose={setIsOpenPopup} />}
    </div>
  );
};
