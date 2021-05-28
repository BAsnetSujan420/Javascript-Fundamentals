let type = 'Quartz';
let color = 'Rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: () => {
      let worth;
   carat == 24 ?
   worth = console.log(`${color} ${type} worths $30,000.`)
   : 
   worth = console.log(`${color} ${type} worths $8,000.`);
    return worth;  
}
};

gemstone.calculateWorth();