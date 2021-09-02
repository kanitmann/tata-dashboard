import React from 'react';  
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Transfer = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = Transfer();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <div className="Heading1">
                    <h1>
                        Transfer
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
                <Chip style={{ backgroundColor: '#12824C', color: '#FFFFFF' }} icon={<CheckCircleOutlineIcon style={{ color: '#FFFFFF' }} />} label="Eligible for Transfer" />

                <br></br>
                <br></br>
                <Divider />
                <br></br>
                <div className="subheading1">
                    <h4>Previous Transfers</h4>
                </div>
                <br></br>
                <TextField disabled id="standard-disabled" label="" defaultValue="No Transfers on Record" />
            </div>
        </form>
    );
}