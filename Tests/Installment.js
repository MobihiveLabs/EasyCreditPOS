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
  async function swipeUp() {
    await driver.touchAction([
      { action: 'press', x: 285, y: 1402 },
      { action: 'moveTo', x: 350, y: 189 },
      'release'
    ]);

  }

  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return randomNumber.toString().substring(1, 11);
  }

  async function paymentReceipt() {
    let el12 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_make_payment");
    await el12.waitForDisplayed();
    el12.click();

    let el15 = await driver.$("id=com.easysmartphonecredit.pos:id/id_image_receipt");
    await el15.click();

    let el16 = await driver.$("~Tap shutter to take picture");
    await el16.waitForDisplayed();
    await el16.click();

    await driver.pause(4000);
    await driver.touchAction([
      { action: 'press', x: 548, y: 1358 },
      'release'
    ]);

    let el17 = await driver.$("id=com.easysmartphonecredit.pos:id/crop_image_menu_crop");
    await el17.waitForDisplayed();
    await el17.click();



    let el18 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_transactionId");
    await el18.waitForDisplayed({ timeout: 20000 });
    await el18.setValue(generateRandomNumber());
    await swipeUp();
    let el19 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_submit");
    await el19.waitForDisplayed({ timeout: 7000 });
    await el19.click();

  }

  let el3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_agent_id");
  await el3.setValue("A41");

  let el4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_password");
  await el4.setValue("Test@123");

  let el5 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_login");
  await el5.click();

  await driver.pause(10000);

  let el6 = await driver.$("~Open navigation drawer");
  await el6.click();

  let el8 = await driver.$('[text="All Leads"]');
  await el8.click();

  let el9 = await driver.$('android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_details_container").index(1)');
  await el9.waitForDisplayed();
  el9.click();

  await refreshPage();

  let el10 = await driver.$("id=com.easysmartphonecredit.pos:id/id_menu_fragment_doc_order");
  await el10.click();

  let el11 = await driver.$('[text ="ACTIVE"]');
  await el11.waitForDisplayed();
  el11.click();


  await paymentReceipt();
  await paymentReceipt();
  await paymentReceipt();

  let el12 = await driver.$("com.easysmartphonecredit.pos:id/id_textViewPaymentHistory");
  await el12.waitForDisplayed();
  await el12.click();












}
runTest();
