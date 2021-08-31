import React, { useState } from 'react';
import clsx from 'clsx';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';

const Application = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    left: '80%',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function FormPropsTextFields() {
  const classes = Application();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div className="Heading1">
          <h1>
            Application
          </h1>
        </div>
        <br></br>
        <TextField disabled id="standard-disabled" label="First Name" defaultValue="Kanit" />
        <TextField disabled id="standard-disabled" label="Last Name" defaultValue="Mann" />
        <br></br>
        <TextField disabled id="standard-disabled" label="Current Position" defaultValue="Web Developer" />
        <br></br>
        <TextField disabled id="standard-disabled" label="Time Since Last Transfer" defaultValue="3 Years 7 Months" />
        <br></br>
        <Chip style={{ backgroundColor: '#12824C', color: '#FFFFFF' }} icon={<CheckCircleOutlineIcon style={{color: '#FFFFFF' }}/>} label="Eligible for Transfer" />

        <br></br>
        <br></br>
        <Divider />
        <br></br>
    </div>
    </form>
  );
}