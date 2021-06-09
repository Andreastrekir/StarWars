

let x = new XMLHttpRequest();

//Seleccionando elementos del DOM
let button     = document.querySelector('#button')
let names      = document.querySelector('#name')
let height     = document.querySelector('#height')
let gender     = document.querySelector('#gender')
let birthYear  = document.querySelector('#birth-year')
let homeWorld  = document.querySelector('#home-world')

//Tomando la informacion de API
function getInfo(){
  //llamar al loading data
  updateWithLoading();

	let randomAll = Math.floor((Math.random() * 88) +1); //Para que sea aleatoria se usa math.random
  let apiURL = 'https://swapi.dev/api/people/' + randomAll + '/';

//AJAX
//Puse la url ahi arriba para no volver a colocarla.
x.open('GET', apiURL);
x.responseType = 'json';
x.send();
x.onload = function(){
  if (x.status != 200) { 
    //console.log(`Error ${x.status}`); 
    //updateInfoWithError();
    console.log('There was an error');
  } else { 
    updateInfo(x.response); 
  }
}

x.onerror = function(){
  updateInfoWithError();
  console.log('there was an error');
};
}

//Mostrar informacion en la pantalla
function updateInfo(resp){

    let url = new URL(resp.homeworld);
    url.protocol = 'https:'
    x.open('GET', url.href);
    
    x.responseType = 'json';
    x.send();

  x.onload = function(){
  if (x.status != 200) { 
   // console.log(`Error ${x.status}`); 
   // updateInfoWithError();
    console.log('There was an errorII');
  }
   else{
    updateInfo2(x.response)
  }
}
  x.onerror = function(){
    console.log('Another error');
  };

  console.log(resp.homeworld);
  console.log(resp.name);
  console.log(names);

  names.innerText = resp.name;
  height.innerText = `Height: ${resp.height}`;
  gender.innerText = `Gender: ${resp.gender}`;
  birthYear.innerText = `Birth Year: ${resp.birth_year}`;
}


//updateInfo()

//Mostrar la Home World.
function updateInfo2(re){
  homeWorld.innerText = `Home World: ${re.name}`;
  //console.log(updateInformation);
}

// Mostrar error 
  function updateInfowithError(){
    names.innerText = "That person isnt available";
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
  }

//display when updatingg info
function updateWithLoading(){
	names.innerHTML = ''
	height.innerHTML = ''
	//gender.innerHTML = ''
}

button.addEventListener('click', getInfo);











