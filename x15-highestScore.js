function highestScore (students) {
    // Code disini
    var arrayTemp = [];
    var objectOutput = {};

    for (var i = 0; i < students.length; i ++) {
        objectOutput[students[i].class] = [];
    }

    //console.log(objectOutput)

    for (key in objectOutput) {
        var tertinggi = 0;
        for (var j = 0; j < students.length; j ++) {
          if (key === students[j].class && tertinggi < students[j].score) {

              objectOutput[key].name = students[j].name;
              objectOutput[key].score = students[j].score;
              tertinggi = students[j].score;
          }
        }
    }
    return objectOutput;


}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}