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