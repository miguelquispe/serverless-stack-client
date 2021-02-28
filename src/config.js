const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "mq-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://d6boqs5sdf.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_3hQk1VEsp",
    APP_CLIENT_ID: "43cfdk9hiob3dssbrvepr4iv6q",
    IDENTITY_POOL_ID: "us-east-1:3ada86ab-28e6-4fbc-ac4b-568ccc7784a0",
  },
};

export default config;