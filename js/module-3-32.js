function addOverNum(firsNumber,...args) {
    let total = 0;
   let firstNumber=0;
    for (const arg of args) {
      if(arg>firsNumber){
      total += arg;
     
    }
    }
    return total;
    // Пиши код выше этой строки
  }
  