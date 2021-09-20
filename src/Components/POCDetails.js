import React from 'react';
import pic from '../Assets/DP.png';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export default function POCDetails() {
    return (
        <div style={{}}>
            <h1>POC Details</h1>

            <div className="profile_card">
                <Card
                    style={{
                        width: 600,
                        backgroundColor: "white",
                    }}
                >
                    <CardContent>
                        <div className="picture">
                            <img src={pic} alt="POC_Image" />
                        </div>

                        <Typography variant="h5">
                            Contact Details
                        </Typography>
                        <div className="divider2">
                        </div>
                        <Typography
                            style={{
                                fontSize: 16,
                                marginTop: 16,
                            }}
                        >
                            Name: Steve Robinson
                        </Typography>
                        <Typography
                            style={{
                                fontSize: 16,
                                marginTop: 5,
                            }}
                        >
                            Mobile: +91 98765 45678
                        </Typography>
                        <Typography
                            style={{
                                fontSize: 16,
                                marginTop: 5,
                            }}
                        >
                            Mail: steve@tatapower.com
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick="window.history.back()">Back</Button>
                    </CardActions>
                </Card>
            </div>
        </div >
    );
}