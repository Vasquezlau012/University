const API_URL = "http://localhost:8000/students";

document.addEventListener('DOMContentLoaded', () => {
    
})

function saveStudents(){
    const id = document.getElementById("student-id").value;
    const name = document.getElementById("name").value;
    const age = parseInt (document.getElementById("age").value);
    const grade = parseFloat (document.getElementById("grade").value);

    const studentData = {name, age, grade}

    const method = id ? "PUT" : "POST";
    const url = id ? `${API_URL}/${id}` : API_URL;
    fetch(url, {  //es una promesa o sea que se puede cumplir
        method: method,
        headers: {
            'content-Type': 'application/json' //esto se llama MIME (cuando le explicas el tipo de dato en este caso json)
        },
        body: JSON.stringify(studentData)
    }).then(response =>{ //funcion flecha para evitar que escriba lo demas
        if (!response.ok) {
            return response.json().then(err => {throw new Error(err.detail || 'error en la operacion')})
        }
        return response.json()
    }).then (data =>{
        alert("Estudiante creado")
    })
}