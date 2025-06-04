const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayorEdad = ages.filter(age => age > 18);

console.log(mayorEdad);

// 4.2
const agePar = ages.filter(par => par % 2 === 0);

console.log(agePar);

// 4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LoL = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log(LoL);

// 4.4
const withUInName = streamers.filter(streamer => streamer.name.includes('u'));

console.log(withUInName);

// 4.5

const legendsStreamers = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    // Clonamos el objeto para no mutar el original
    const cloned = { ...streamer };

    if (cloned.age > 35) {
      cloned.gameMorePlayed = cloned.gameMorePlayed.toUpperCase();
    }
    return cloned;
  });

console.log(legendsStreamers);