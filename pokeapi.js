
// const getData = async (id) => {
    
//     let pokeArray = [];    

//     for (let i = 1; i <= id ; i++) {
//         const promise = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
//         const data = await promise.json();
//         //console.log(data)
//         pokeArray.push(data)

        
//     }
//   //  console.log(pokeArray);
// }

// getData(151);


// const getImage = async (id) => {
    
//    let pokeArrayimg= [];    

//    for (let i = 1; i <= id ; i++) {
//        const promise = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
//         const data = await promise.json();
//      // console.log(data.sprites.front_default)
//         pokeArrayimg.push(data.name + ' '+ data.sprites.front_default);

//    }
//         console.log(pokeArrayimg);
//    return pokeArrayimg;
// }

//  getImage(input.value);
//  document.querySelector('.lista').innerHTML = `<li>${data.name} 
//  <img src="${data.sprites.front_default}">    </li> `;



const input = document.querySelector('#input');
const lista = document.querySelector('.lista');

 const getImage = (nombre, imagen) =>{
     lista.innerHTML = `<li>${nombre} <img src="${imagen}">
                         </li> `;
 }


 input.addEventListener('keyup', async (e) =>{
     e.preventDefault();
    
     let id = input.value;
     const promise = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
     const data = await promise.json();
    
     let nombre = data.name;
    let imagen = data.sprites.front_default;

      getImage(nombre, imagen);
 });


