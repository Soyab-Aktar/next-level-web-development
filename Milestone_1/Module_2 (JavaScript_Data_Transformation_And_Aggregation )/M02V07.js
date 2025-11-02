const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// Grouping and aggregation of data
    // 1 => Initiate Empty Object
    // 2 => Check if the responce is exist or not
    // 3 => if it exist then inc the count, if not then init with 1

const count = surveyResponses.reduce((table,responce) => {
    if(table[responce]){
        table[responce] += 1;
    }
    else{
        table[responce] = 1;
    }

    return table;
}, {})

console.log(count);