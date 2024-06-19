let students = [];
let studentForm = document.querySelector("#stuForm");
let studentTable = document.querySelector("#stuTable");

studentForm.addEventListener("submit", function (event) {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let major = document.querySelector("#major").value;

    let student = { name, age, major };
    students.push(student);
    updateTable();
    event.preventDefault();

    document.querySelector("#stuForm").reset();
})

function updateTable() {
    let bodyTable = document.querySelector("tbody");
    bodyTable.innerHTML = "";
    for (let student of students) {
        bodyTable.innerHTML += `
        <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.major}</td>
        </tr>
        `
    }
}