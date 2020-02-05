/*
|---------------------------------------|
Universidad del Valle de Guatemala
Seccion 10	Sistemas y web
Ing. Samuel Chavez
Mario Perdomo
Carné 18029
game_Othello.js
|---------------------------------------|
*/
const root = document.getElementById('root');

const render = (root, state) => {
	const header = document.createElement('div');
	header.style.backgroundColor='black';
	header.style.minWidth = '330px';
	header.style.height = '175px';
	header.style.display = 'flex';
	header.style.flexDirection = 'column'
	header.style.justifyContent = 'center';
	header.style.alignItems = 'center';
	header.style.overflow = 'auto';

	const header_tittle = document.createElement('h1');
	const tittle_textNode = document.createTextNode('OTHELLO')
	header_tittle.appendChild(tittle_textNode)
	header_tittle.style.backgroundColor = 'black'
	header_tittle.style.color = 'white'
	header_tittle.style.fontSize = '45px';
	header.appendChild(header_tittle)

	const author = document.createElement('h1');
	const author_textNode = document.createTextNode('Mario Perdomo')
	author.appendChild(author_textNode)
	author.style.backgroundColor = 'black'
	author.style.color = 'white'
	author.style.fontSize = '10px';
	author.style.marginBottom = '15px';
	header.appendChild(author)

	const body = document.createElement('div');
	body.style.backgroundColor = 'black'
	body.style.minWidth = '330px';
	body.style.height = '450px'
	body.style.display = 'flex';
	header.style.flexDirection = 'column'
	body.style.justifyContent = 'center';

	const board = document.createElement('div');
	board.style.backgroundColor = 'green'
	board.style.width = '295px';
	board.style.height = '312px';
	board.style.marginTop = '91px';
	board.style.overflow = 'auto'

}
const map_state = {
	player_Turn: false,
	mapboard:[
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,1,-1,0,0,0],
	[0,0,0,-1,1,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
	]
};

const render = (root, state) =>{
	const header = document.createElement('div');
	header.style{
		
	}
}
const player1_Points = 0;
const player2_Points = 0;
const player_Turn = false;

// player_Turn


/*
|---------Javascript-------------|
  boton.onclick = () => {
        state.turnedOnIndex = (state.turnedOnIndex + 1) % 3;
        root.innerHTML = '';
        render(root, state);
    };


const APP_STATE = {
    turnedOnIndex: 1,
};

|---------HTML-------------|

    mount.appendChild(semaforo);
    mount.appendChild(boton);
*/