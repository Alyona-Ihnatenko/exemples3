const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  const keys = ['descr','rating','price'];
  const values = ['Просторная квартира в центре',4,2153];
  // Пиши код ниже этой строки
  for(const keys in apartment){
    console.log(keys);
    console.log(apartment[keys]);
  }
  