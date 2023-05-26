const { remote } = require('webdriverio');


async function runTest() {
  const driver = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      platformVersion: '11',
      deviceName: 'Nokia C21 Plus',
      //app: 'C:\\Users\\ameay\\OneDrive\\Desktop\\MobiHive\\EasyCreditPOS\\app\\Credithive_pos2.apk',
      automationName: 'UiAutomator2',

    },
  })

  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return randomNumber.toString().substring(1, 11);
  }
  let e20 = await driver.$("id=com.easysmartphonecredit.pos:id/id_menu_fragment_doc_order");
  await e20.click();

  let e21 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_select_device");
  await e21.click();

  let e23 = await driver.$('[text="Samsung Galaxy A12(4/64gb)"]');
  await e23.waitForDisplayed({ timeout: 10000 });
  await e23.click();
  //Pause because Bug "Order Placed sucessfully"
  await driver.pause(4000)

  let e24 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_proceed");
  await e24.click();
  await driver.pause(4000);
  // let e25= await driver.$("id=com.easysmartphonecredit.pos:id/id_button_next");
  // await e25.waitForDisplayed();
  // await e25.click();

  let e26 = await driver.$('[text="PROCEED NEXT"]');
  await e26.waitForDisplayed();
  await e26.click();

  let e027 = await driver.$('[text="Make Upfront"]');
  await e027.waitForDisplayed();
  await e027.click();

  let e27 = await driver.$("id=com.easysmartphonecredit.pos:id/id_image_receipt");
  await e27.waitForDisplayed();
  await e27.click();

  let e28 = await driver.$("~Tap shutter to take picture");
  await e28.click();

  await driver.pause(4000);
  await driver.touchAction([
    { action: 'press', x: 548, y: 1358 },
    'release'
  ]);

  let e29 = await driver.$("id=com.easysmartphonecredit.pos:id/crop_image_menu_crop");
  await e29.waitForDisplayed();
  e29.click();

  let e30 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_transactionId");
  await e30.waitForDisplayed({ timeout: 30000 });
  await e30.setValue("payment");

  let e31 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_submit");
  await e31.click();

  // Enroll Device
  let e32 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_model_name");
  await e32.waitForDisplayed();
  e32.click();

  let e33 = await driver.$('[text = "SM-A125U"]');
  await e33.waitForDisplayed();
  e33.click();

  let e34 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_serial_no");
  await e34.setValue(generateRandomNumber());

  let e35 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_imei1");
  await e35.setValue(generateRandomNumber());

  let e36 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_imei2");
  await e36.setValue(generateRandomNumber());

  let e37 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_enrolled");
  await e37.click();











}
runTest();
