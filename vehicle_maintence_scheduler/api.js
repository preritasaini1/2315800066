const axios = require("axios");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmVyaXRhLnNhaW5pX2NzLmgyM0BnbGEuYWMuaW4iLCJleHAiOjE3ODEwNzY5OTMsImlhdCI6MTc4MTA3NjA5MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijg1ZDBhMDk1LWE4YWQtNGJlYS04NDFjLTY3MDMzYmFiM2ZlZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InByZXJpdGEgc2FpbmkiLCJzdWIiOiIxOTJmOWE5ZC00Y2FhLTRiNDAtYWQyZi1jY2QyOTRjMGI0ZGMifSwiZW1haWwiOiJwcmVyaXRhLnNhaW5pX2NzLmgyM0BnbGEuYWMuaW4iLCJuYW1lIjoicHJlcml0YSBzYWluaSIsInJvbGxObyI6IjIzMTU4MDAwNjYiLCJhY2Nlc3NDb2RlIjoiUlBzZ1l0IiwiY2xpZW50SUQiOiIxOTJmOWE5ZC00Y2FhLTRiNDAtYWQyZi1jY2QyOTRjMGI0ZGMiLCJjbGllbnRTZWNyZXQiOiJ0YnBCV2hLdHFkZXVYUWp4In0.5zbn8wpVcNY6IqJbm4EhOhVlkb8RHWylJs4DWJ4AETo";

async function getDepots() {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
}

async function getVehicles() {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/vehicles",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
}

module.exports = {
    getDepots,
    getVehicles
};