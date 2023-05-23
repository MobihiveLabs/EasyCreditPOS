function random(){
    let rnd = Math.round(Math.random()*10000000000);
    //parseInt(rnd);
    // console.log(rnd.length);
    // console.log(rnd);
}
random();
function generateRandomMobileNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return "9" + randomNumber.toString().substring(1, 11);
  }
  
  // Usage
  const randomMobileNumber = generateRandomMobileNumber();
  console.log(randomMobileNumber);