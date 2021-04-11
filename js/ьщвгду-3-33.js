// Пиши код ниже этой строки
function findMatches(array,...args) {
    const matches = []; // Не изменяй эту строку
  for(let arg of args){
   
     if( array.includes(arg)){
      matches.push(arg);}
  
  }
    // Пиши код выше этой строки
    return matches;
  }
  