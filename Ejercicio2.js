const pointsList = [32, 54, 21, 64, 75, 43];

// Copia usando spread operator
const pointsListCopy = [...pointsList];

console.log(pointsListCopy); 

// 2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};

console.log(toyCopy);

// 2.3
const pointList = [32, 54, 21, 64, 75, 43];
const pointLis2 = [54,87,99,65,32];

const pointList1y2 = [...pointList , ...pointLis2];
console.log(pointList1y2);


// 2.4
const juguete = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const juegueteUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const jugueteComplete = {...juguete , ...juegueteUpdate};

console.log(jugueteComplete);

// 2.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colornoyellow = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colornoyellow);
