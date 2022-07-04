const AddOne = require('./Questions/Add');

const StringCalculator = () => {
  console.log('------Question 1------');
  AddOne('');
  AddOne('1,2,5');
  console.log('------Question 2------');
  AddOne('1\n,2,3');
  AddOne('1,\n2,4');
  console.log('------Question 3------');
  AddOne('//;\n1;3;4');
  AddOne('//$\n1$2$3');
  AddOne('//@\n2@3@8');
  // console.log('------Question 4------');
  // AddOne('1,\n2,-4');
  console.log('------Bonus 1------');
  AddOne('2,1001');
  console.log('------Bonus 2------');
  AddOne('//***\n1***2***3');
  console.log('------Bonus 3------');
  AddOne('//$,@\n1$2@3');
  console.log('------Bonus 4------');
  AddOne('//$,@,***\n1$1***7@3');
};

StringCalculator();
