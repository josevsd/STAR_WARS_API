// let baseUrl = `https://swapi.dev/api/people/${numero}/`
let person = document.getElementById('app')
let nome = document.getElementById('nome')
let altura = document.getElementById('altura')
let sexo = document.getElementById('sexo')
let corCbl = document.getElementById('corCbl')
let massa = document.getElementById('massa')
let clima = document.getElementById('clima')

function buscar(){
    var numero = document.getElementById("numero").value;

//pessoas
    fetch(`https://swapi.dev/api/people/${numero}/`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        nome.innerHTML= `<p>nome: ${json.name}</p>`
        altura.innerHTML= `<p>altura: ${json.height}</p>`
        sexo.innerHTML=`<p>sexo: ${json.gender}</p>`
        corCbl.innerHTML = `<p>cor do cabelo: ${json.hair_color}</p>`
        massa.innerHTML = `<p>massa: ${json.mass}</p>`

    })

// //planetas
//     fetch(`https://swapi.dev/api/planets/${numero}/`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         clima.innerHTML=`<p>clima: ${json.climate}</p>`
        
//     })
}