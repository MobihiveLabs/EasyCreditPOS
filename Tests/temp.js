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

  async function refreshPage() {
    await driver.touchAction([
      { action: 'press', x: 345, y: 756 },
      { action: 'moveTo', x: 342, y: 1322 },
      'release'
    ]);
  }

  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return randomNumber.toString().substring(1, 11);
  }

  async function paymentReceipt() {
    let el15 = await driver.$("com.easysmartphonecredit.pos:id/id_image_receipt");
    await el15.click();
    
    let el16 = await driver.$("~Tap shutter to take picture");
    await el16.click();
    await driver.touchAction({ actions: 'tap', x: 544, y: 1352 })
    
    let el17 = await driver.$("com.easysmartphonecredit.pos:id/crop_image_menu_crop");
    await el17.click();
    
    let el18 = await driver.$("com.easysmartphonecredit.pos:id/id_edit_transactionId");
    await el18.setValue(generateRandomNumber());
    
    let el19 = await driver.$("com.easysmartphonecredit.pos:id/id_button_submit");
    await el19.click(); 

  }

  let el1 = await driver.$("id=com.easysmartphonecredit.pos:id/snackbar_action");
  await el1.click();

  let el2 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_checkLock");
  await el2.click();
  let el3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_lock");
  await el3.click();
  let el4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_unlock");
  await el4.click();
  let e015 = await driver.$("id=com.easysmartphonecredit.pos:id/snackbar_action");
  await e015.click();

  let el5 = await driver.$('[text="Active Phone"]');
  await el5.click();
  let el6 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_1");
  await el6.click();
  let el7 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_2");
  await el7.click();
  let el8 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_3");
  await el8.click();
  let el9 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_4");
  await el9.click();
  let el10 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_done_all");
  await el10.click();
  await e015.click();
  await refreshPage();

  let el11 = await driver.$("id=com.easysmartphonecredit.pos:id/id_image_back_press");
  await el11.click();





  await e015.click();
  let el13 = await driver.$("~Payment");
  await el13.click();
  let el14 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_make_payment");
  await el14.click();

  await paymentReceipt();














}
runTest();
