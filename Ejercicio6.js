const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acc, exam) => {
    return acc + exam.score;
}, 0);

console.log(totalScore);

//6.2

const totalPassedScore = exams.reduce((acc, exam) => {
    if (exam.score >= 5) {
      return acc + exam.score;
    }
    return acc;
  }, 0);
  
  console.log(totalPassedScore);

  // 6.3

  const { sum, count } = exams.reduce(
    (acc, exam) => {
      return {
        sum: acc.sum + exam.score,
        count: acc.count + 1
      };
    },
    { sum: 0, count: 0 }
  );
  
  const averageScore = sum / count;
  
  console.log(averageScore);

  