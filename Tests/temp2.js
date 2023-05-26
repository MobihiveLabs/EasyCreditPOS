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










}
runTest();
