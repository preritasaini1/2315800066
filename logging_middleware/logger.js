const axios = require("axios");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmVyaXRhLnNhaW5pX2NzLmgyM0BnbGEuYWMuaW4iLCJleHAiOjE3ODEwNzQyOTYsImlhdCI6MTc4MTA3MzM5NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQxZGM0ZjgxLWFkODEtNGI2Mi04YmU3LTQ0YzQyMTVhY2JiOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InByZXJpdGEgc2FpbmkiLCJzdWIiOiIxOTJmOWE5ZC00Y2FhLTRiNDAtYWQyZi1jY2QyOTRjMGI0ZGMifSwiZW1haWwiOiJwcmVyaXRhLnNhaW5pX2NzLmgyM0BnbGEuYWMuaW4iLCJuYW1lIjoicHJlcml0YSBzYWluaSIsInJvbGxObyI6IjIzMTU4MDAwNjYiLCJhY2Nlc3NDb2RlIjoiUlBzZ1l0IiwiY2xpZW50SUQiOiIxOTJmOWE5ZC00Y2FhLTRiNDAtYWQyZi1jY2QyOTRjMGI0ZGMiLCJjbGllbnRTZWNyZXQiOiJ0YnBCV2hLdHFkZXVYUWp4In0.QItx3r4dGVQ01EMUKMRgwlqulsaBgitc8cg8cd306n0";

async function Log(stack, level, pkg, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log("Status:", error.response?.status);
        console.log("Response:", error.response?.data);
    }
}

module.exports = Log;