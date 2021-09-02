import React from 'react';
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
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    const [state, setState] = React.useState({
    location: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  }

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <div>
        <div className="Heading1">
          <h1>
            Application
          </h1>
        </div>
        <div className="subheading1">
            <h2>Current Details</h2>
        </div>
        <br></br>
        <TextField disabled id="standard-disabled" label="First Name" defaultValue="Kanit" />
        <TextField disabled id="standard-disabled" label="Last Name" defaultValue="Mann" />
        <br></br>
        <TextField disabled id="standard-disabled" label="Position" defaultValue="Web Developer" />
        <TextField disabled id="standard-disabled" label="Department" defaultValue="IT" />
        <TextField disabled id="standard-disabled" label="Location" defaultValue="NCR" />
        <br></br>
        <TextField disabled id="standard-disabled" label="Time Since Last Transfer" defaultValue="3 Years 7 Months" />
        <br></br>
        <Chip style={{ backgroundColor: '#12824C', color: '#FFFFFF' }} icon={<CheckCircleOutlineIcon style={{color: '#FFFFFF' }}/>} label="Eligible for Transfer" />

        <br></br>
        <br></br>
        <Divider />
        <br></br>
        <div className="subheading2">
            <h2>Transfer Details</h2>
        </div>
        <TextField required id="standard-required" label="Job Opening Code" />
        <TextField required id="standard-required" label="Position" />
        <TextField required id="standard-required" label="Department" />
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="location-native-simple">Location</InputLabel>
            <Select
              native
              value={state.location}
              onChange={handleChange}
              inputProps={{
                name: 'location',
                id: 'location-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={"NCR"}>NCR</option>
              <option value={"Banglore"}>Banglore</option>
              <option value={"Gujarat"}>Gujarat</option>
            </Select>
          </FormControl>
    </div>
    <br></br>
    <TextField
          id="outlined-multiline-static"
          label="Reason for Transfer"
          multiline
          helperText = "About 250 - 500 words"
          required
          style = {{width: '100ch'}}
          rows={6}
          variant="outlined"
        />
    <div className={classes.root}>
    <div className={classes.wrapper}>
      <Fab
        aria-label="save"
        color="primary"
        className={buttonClassname}
        onClick={handleButtonClick}
      >
        {success ? <CheckIcon /> : <SaveIcon />}
      </Fab>
      {loading && <CircularProgress size={68} className={classes.fabProgress} />}
    </div>
    <div className={classes.wrapper}>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>

    </div>
    </form>


  );
}