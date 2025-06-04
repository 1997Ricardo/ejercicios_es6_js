const videogames = [
    { name: 'Final Fantasy VII',                   genders: ['RPG'],                    score: 9.5 },
    { name: 'Assasins Creed Valhala',               genders: ['Aventura', 'RPG'],         score: 4.5 },
    { name: 'The last of Us 2',                     genders: ['Acción', 'Aventura'],      score: 9.8 },
    { name: 'Super Mario Bros',                     genders: ['Plataforma'],              score: 8.5 },
    { name: 'Genshin Impact',                       genders: ['RPG', 'Aventura'],         score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild',  genders: ['RPG'],                    score: 10   },
  ];
  
  
  const rpgGamesB = videogames.filter(game =>
    game.genders.includes('RPG')
  );
  
  const rpgGames = rpgGamesB;
  
  const totalScore = rpgGames.reduce((accumulator, game) => {
    return accumulator + game.score;
  }, 0);
  
  const averageScore = totalScore / rpgGames.length;
  
  console.log('Juegos RPG:');
  rpgGames.forEach(game => console.log(`- ${game.name} (Score: ${game.score})`));
  console.log(`\nMedia de score para RPG: ${averageScore.toFixed(2)}`);
  