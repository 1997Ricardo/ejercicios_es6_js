 // 1.1 – Destructuramos el objeto directamente
 const game = { 
     title: 'The last us 2', 
     gender: ['action', 'zombie', 'survival'], 
     year: 2020 
   };
  
   const { title, gender, year } = game;
  
   console.log(title);   // → 'The last us 2'
   console.log(gender);  // → ['action', 'zombie', 'survival']
   console.log(year);    // → 2020
  

   //1.2 – Destructuramos el array en variables independientes
   const fruits = ['Banana', 'Strawberry', 'Orange'];

   const [fruit1, fruit2, fruit3] = fruits;

   console.log("Esta es la " + fruit1);
   console.log("Esta es la " + fruit2);
   console.log("Esta es la " + fruit3);

   //1.3
   const animalFunction = () => {
     return {nm: 'Bengal Tiger', race: 'Tiger'}
 };

 const { nm, race} = animalFunction();

 console.log(nm);
 console.log(race);

//1.4

const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nombre , itv} = car;

console.log(name);
console.log(itv);

const [year1, year2, year3] = itv;
console.log(year2);
console.log(year2);
console.log(year3);



