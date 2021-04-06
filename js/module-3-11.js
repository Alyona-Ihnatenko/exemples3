const keys = ['descr', 'rating', 'price'];
const values = ['Просторная квартира в центре', 4, 2153];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
if(apartment.hasOwnProperty(keys)){
  keys.push(key);
  values.push(apartment[key]);
  
}
  console.log(keys);
  console.log(values);
  // Пиши код выше этой строки
}
