Node.js Server for Olivecell Mobile Application

**Purpose:**
1. Endpoint for uploading videos from the Olivecell Mobile App
2. Connects to the Analytics Endpoint.
3. Required for Testing and Demos.


**```
npm install       // to install all dependencies
npm run start     // to start server
```**

**NGROK - for Testing**
ngrok to host a endpoint on the web for the mobile app to connect to and send the video.

Once server is deployed NGROK will not be required.

Syntax to host server is
```
./ngrok http 3000
```

**How to Upload a File**
1. Download a API testing client **postman**
2. Download the olivecell_demo_server
3. Use this route for test1:
  ```
    http://localhost:3000/uploads/1
  ```
4. Send the route the following form-data:
  ```
    file: $ATTACHED FILE
  ```
Make sure the form-data key is file and the key-value is an attached file.
