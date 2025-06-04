const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const namesArray = users.map(user => user.name);

console.log(namesArray);


// 3.2

const modifiedNames = users.map(user => {
    if (user.name.startsWith('A')){
        return 'Anacleto';
    }
    return user.name;
});

console.log(modifiedNames);

// 3.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const cityNamesVisited = cities.map(city => {
    return city.isVisited
    ? `${city.name} (Visitado)`: city.name;
});

console.log(cityNamesVisited);
