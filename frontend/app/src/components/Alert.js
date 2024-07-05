//Provided by Material UI
import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const SuccessAlert = ({text}) => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      {text}
    </Alert>
  );
}


export const WarningAlert = ({text}) => {
    return (
      <Alert sx={{ fontFamily: 'Mulish, sans-serif'}}icon={<ReportProblemIcon fontSize="inherit" />} severity="success">
        {text}
      </Alert>
    );
  }
  
