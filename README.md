# Resizable-Components-with-API

This document provides an overview of the functionality and usage of the Resizable Components with API written in Node.js, Express.js, React, MongoDB.

Frontend link: https://dataneuron-frontend-task.onrender.com
Backend link: https://dataneuron-task.onrender.com

**Backend APIs**

- Add Data (POST api/data/add): Add a new piece of text data. Request body should be JSON with a key "text" containing the data. **Execution time**: 0.14 seconds

- Update Data (PUT api/data/update): Update the existing data with new text data. Request body should be JSON with a key "text" containing the updated data. **Execution time**: 0.14 seconds
- Get Data Count (GET api/data/count): Retrieve the current count of data objects stored. **Execution time**: 0.12 seconds

**Example Request and Response**

**Data Format**

```
JSON: { "text": "data text" }
```

**Success Response**

```
JSON: { message: "Data added successfully",
        text: "data text" }
```

**Database Collection**

```
{
  text: String,
}
```

**Running the application**

**Prerequisites:**

- Node.js and npm installed on your system.

**Steps:**

- Clone or download the application codebase.

- Navigate to the project directory in your terminal.

- Install dependencies:

```
npm install
```

```
npm start
```

This will typically start the server on a port like localhost:3000 (check the code for the specific port).

**API Usage**

Once the server is running, you can use tools like Postman or make API requests directly from your code to interact with the endpoints. Refer to the codebase for specific API endpoint definitions and request/response structures.
