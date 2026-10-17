//DESARROLLA AQUI TUS SOLUCIONES
/*
async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}*/
//1.Declara una función getRandomPokemon que retorne un pokemon aleatorio.

 async function getRandomPokemon(){
    const random =Math.floor(Math.random() * 151) + 1;
let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
let data = await res.json()
return data;
};
getRandomPokemon().then(data => {
    console.log(data);
});

//2.Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName(pokemon =1) {
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await resp.json();
     let name = data.name;
     let img = data.sprites.front_default;
     return {
        img , name
    }
}
getImageAndName().then(data =>{
    console.log(data);
    
}) 
//3.Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
async function printImageAndName(){
    let data =await getImageAndName();  //recoge los datos 
    let contenido = `<section>   
    <img src=${data.img} alt=${data.name}>
    <h1>${data.name}</h1>
</section>`
document.body.innerHTML += contenido;
return contenido;
}
//4.Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio
async function getRandomDogImage() {
    let resp = await fetch(`https://dog.ceo/api/breeds/image/random`)
    let data = await resp.json();
    return data.message;
}
getRandomDogImage().then(data =>{
    console.log(data);
    }) 

    function numRandom(){
            const random =Math.floor(Math.random() * 151) + 1;
            return random;
    }
//5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.
async function getRandomPokemonImage() {
    const random =Math.floor(Math.random() * 151) + 1;
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let data = await resp.json();
    return data.sprites.front_default;
}
getRandomPokemonImage().then(data =>{
    console.log(data);
});
//6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
 async function printPugVsPikachu(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/Pikachu`)
    let data = await res.json();
    const imgPicachu = data.sprites.front_default;
    
    const res2 = await getRandomDogImage();
     let contenido = `<section>   
    <img src=${res2} alt=>
    <h1>VS</h1>
    <img src=${imgPicachu} alt=>
</section>`
document.body.innerHTML += contenido;
return contenido;
 }
 printPugVsPikachu();

//Ejercicios con Rick and Morty
//7.- una función getRandomCharacter que retorne un personaje aleatorio.
async function getRandomCharacter() {
    const random =Math.floor(Math.random() * 826) + 1;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    const data= await res.json();
    return data;
};
getRandomCharacter().then(data => {
    console.log(data);
});
//8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
async function getRandomCharacterInfo() {
    const random =Math.floor(Math.random() * 826) + 1;
    // 1. Pedimos el personaje
    const res = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    // 2. Convertimos a JSON
    const data= await res.json()
    // 3. Sacamos los datos del personaje
    let img = data.image;
    let name = data.name;
    let episodes = data.episode;
    // 4. Cogemos la URL del primer episodio
    let firstEpisode = data.episode[0];
     // 5. Pedimos ese episodio
    const resEpisode = await fetch(firstEpisode);
     // 6. Convertimos el episodio a JSON
    const dataEpisode = await resEpisode.json();
    // 7. Sacamos la fecha
    let dateEpisode = dataEpisode.air_date;
    
    return {img, name, episodes,firstEpisode,
        dateEpisode};
}
getRandomCharacterInfo().then(data => {
    console.log(data);
});