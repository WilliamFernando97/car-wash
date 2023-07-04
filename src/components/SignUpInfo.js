import React from "react";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
    });

function SignUpInfo() {
    return <div></div>;
}

export default SignUpInfo;