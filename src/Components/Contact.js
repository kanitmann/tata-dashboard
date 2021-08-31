import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Contact = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, timing, mail, number) {
    return { name, timing, mail, number };
}

const rows = [
    createData('Accounts Office', '8AM - 5PM', 'helpdesk.finance@tatapower.ac.in', '(+121)-789-456'),
    createData('Human Resource', '10AM - 5PM', 'helpdesk.hr@tatapower.ac.in', '(+121)-749-456'),
    createData('Software Development Cell', '8AM - 5PM', 'helpdesk.sdc@tatapower.ac.in', '(+121)-722-416'),
    createData('Purchase Office', '10AM - 3PM', 'po.help@tatapower.ac.in', '(+121)-789-456'),
    createData('Online Learning Institute ', '8AM - 5PM', 'info.oli@tatapower.ac.in', '(+121)-789-456'),
];

export default function BasicTable() {
    const classes = Contact();

    return (
        <div className="Contained">
            <div className="heading1">
                <h1>Contact Us</h1>
            </div>
            <br></br>
            <div className="subheading1">
                <h4>Important Contacts</h4>
            </div>
            <br></br>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Timing&nbsp;(Mon-Fri)</TableCell>
                            <TableCell align="center">Mail</TableCell>
                            <TableCell align="center">Toll Free</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.timing}</TableCell>
                                <TableCell align="center">{row.mail}</TableCell>
                                <TableCell align="center">{row.number}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}