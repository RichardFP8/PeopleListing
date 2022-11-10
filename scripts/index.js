"use strict";
let people = [
    {
        id: 1,
        firstName: "Ezra",
        lastName: "Aiden",
        email: "e.aiden@basshall.com",
        ipAddress: "18.6.24.104"
    },
    {
        id: 2,
        firstName: "Ian",
        lastName: "Auston",
        email: "ian.auston@goldmansachs.com",
        ipAddress: "17.16.4.105"
    }
];

window.onload = () => {
    //trying new ways
    const getTableBody = document.querySelector("tbody");
    people.forEach(element => {

        //making use of that for...in loop, look at that
        let newRow = getTableBody.insertRow(-1);
        for (let property in element) {
            let cell = newRow.insertCell(-1);
            cell.innerHTML = element[property];
        }
    });
};