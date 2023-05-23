const browser = require('desired-capabilities/src/browser');
const { log } = require('wd/lib/commands');
const { remote } = require('webdriverio');

async function runTest() {
  const driver = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android', // Change to 'iOS' for iOS testing
      deviceName: 'Nokia C21 Plus', // Replace with your device name
      app: 'C:\\Users\\ameay\\OneDrive\\Desktop\\MobiHive\\EasyCreditPOS\\app\\Credithive_pos.apk',
      automationName: 'UiAutomator2', // For Android

    },
  });
  
  //Functions 
  //Random Mob.No
  function generateRandomMobileNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return "9" + randomNumber.toString().substring(1, 11);
  }

  //Random Email add
  function generateRandomEmail() {
    const emailCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomEmail = '';
    for (let i = 0; i < 10; i++) {
      randomEmail += emailCharacters.charAt(Math.floor(Math.random() * emailCharacters.length));
    }
    randomEmail += '@example.com'; 
    return randomEmail;
  }
  //Get Element By Text
  function getElementByText(text) {
    let ele = driver.$('*').find((element) => element.getText().includes(text));
    return ele;
    //return driver.$(`//*[contains(text(), "${text}")]`);
  }
  //Wait for value
  async function waitForOtpAndClick(clickElement, otpInputSelector) {
    await driver.waitUntil(async () => {
      const otpInput = await driver.$(otpInputSelector);
      const otpValue = await otpInput.getValue();
      return otpValue.length > 0;
    }, {
      timeout: 30000, // Maximum timeout in milliseconds
      timeoutMsg: 'Timed out waiting for OTP input',
      interval: 500 // Interval between condition checks in milliseconds
    });
  
    await clickElement.click();
  }
  //wait for click
  async function waitForButtonAndClick(buttonElement, timeout) {
    await buttonElement.waitForClickable({ timeout });
    await buttonElement.click();
  }
  

  //LoginPage
let el3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_agent_id");
await el3.setValue("A41");

let el4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_password");
await el4.setValue("Test@123");

let el5 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_login");
await el5.click();

await driver.pause(6000);

let el6 = await driver.$("~Open navigation drawer");
await el6.click();

let el8 = await driver.$('[text="All Leads"]');
await el8.click();

//Create Lead

let el9 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_createLead");
await el9.click();

let el10 = await driver.$("id=com.easysmartphonecredit.pos:id/id_text_full_name");
await el10.click();

let el11 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_first_name");
await el11.setValue("Ameay");
await driver.pause(500);

let el12 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_middle_name");
await el12.setValue("M");

let el13 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_last_name");
await el13.setValue("Pande");

let el14 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_submit");
await el14.click();

let el15 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_gender");
await el15.click();

let el16 = await driver.$('[text="Male"]');
await el16.click();

let el17 = await driver.$("id=com.easysmartphonecredit.pos:id/id_text_birthDate");
await el17.click();

let el18 = await driver.$("~Switch to text input mode");
await el18.click();

let el19 = await driver.$("android.widget.EditText");
await el19.setValue("29/06/2000");

let el20 = await driver.$("id=com.easysmartphonecredit.pos:id/confirm_button");
await el20.click();

let el21 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_marital_status");
await el21.click();

let el22 = await driver.$('[text="Single / Never Married"]');
await el22.click();

let el23 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_education");
await el23.click();

let el24 = await driver.$('[text="Primary"]');
await el24.click();

let el25 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_mobile");
await el25.setValue(generateRandomMobileNumber());

let el26 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_email");
await el26.setValue(generateRandomEmail());
await driver.touchAction([
  {action: 'press', x: 345, y: 1478},
  {action: 'moveTo', x: 361, y: 47},
  'release'
]);

let el27 = await driver.$("id=com.easysmartphonecredit.pos:id/id_text_employee_since");
await el27.click();

let el28 = await driver.$("~Switch to text input mode");
await el28.click();

let el29 = await driver.$("android.widget.EditText");
await el29.setValue("01/05/2023");

let el30 = await driver.$("id=com.easysmartphonecredit.pos:id/confirm_button");
await el30.click();

let el31 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_employee_type");
await el31.click();

let el32 = await driver.$('[text="Full Time"]');
await el32.click();

let el33 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_monthly_income");
await el33.setValue("5000");

let el34 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_monthly_saving");
await el34.setValue("2500");

let el35 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_existing_loan");
await el35.setValue("0");

let el36 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_dependency");
await el36.setValue("2");

let el37 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_city");
await el37.click();

let el38 = await driver.$('[text="Karoi"]');
await el38.click();

let el39 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_customer_locality");
await el39.setValue("Pune");

let el40 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_customer_address");
await el40.setValue("Pune");
let el41 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_create_update_lead");
await el41.click();

let el42 = await driver.$("id=android:id/button1");
await el42.click();

let el47 = await driver.$('id=com.easysmartphonecredit.pos:id/id_input_otp');
el47.click();

await driver.pause(20000);
let el43 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_verify");
await el43.click();
//await waitForButtonAndClick(e144,30000);

let el44 = await driver.$("id=android:id/button1");
await el44.click();
//await driver.waitUntil(e145.click(),{timeout: 30000 , timeoutMsg : "Please Wait"});


el47.click();
await driver.pause(20000);
let el45 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_verify");
//.waitForClickable({timeout : 20000})
await el45.click();

let el46 = await driver.$("id=android:id/button1");
await el46.click();











}
runTest()

