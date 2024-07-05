import React from "react";
import { Button } from "@mui/material";


const PrimaryButton = ({ text }) => {

    return (
        <Button variant="contained" color="primary">
        {text}
      </Button>
    )
}

export default PrimaryButton;