const { remote } = require('webdriverio');


async function runTest() {
  const driver = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      deviceName: 'Nokia C21 Plus',
      app: 'C:\\Users\\ameay\\OneDrive\\Desktop\\MobiHive\\EasyCreditPOS\\app\\Credithive_pos2.apk',
      automationName: 'UiAutomator2',

    },
  })
  function generateRandomMobileNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return "0" + randomNumber.toString().substring(1, 11);
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

  let el7 = await driver.$('[text="All Leads"]');
  await el7.click();
  await driver.pause(4000);

  //KYC tab
  let e1 = await driver.$('android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_details_container").index(1)');
  e1.click();

  let e2 = await driver.$(`android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_image_add").index(2)`);
  e2.click();

  //Upload File Needs to be done 

  //NationalId
  let e01 = await driver.$('id=com.easysmartphonecredit.pos:id/id_image_frontSide');
  e01.click();

  let e02 = await driver.$("id=com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  await e02.click();

  let e03 = await driver.$("~Tap shutter to take picture");
  await e03.click();

  let e04 = await driver.$('[text=OK]');
  await e04.click();
  // e3.setValue(remoteFilePath);

  // let e4 = await driver.$('id=com.easysmartphonecredit.pos:id/id_image_backside');
  // e4.setValue(remoteFilePath);

  let e3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_serialNo");
  await e3.setValue("jgg");

  let e4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_issueBy");
  await e4.setValue("jgg");

  await driver.touchAction([
    { action: 'press', x: 345, y: 1478 },
    { action: 'moveTo', x: 361, y: 47 },
    'release'
  ]);
  driver.pause(2000);

  let e5 = await driver.$("id=com.easysmartphonecredit.pos:id/id_text_issueDate");
  await e5.click();

  let e6 = await driver.$("~Switch to text input mode");
  await e6.click();
  await e6.setValue("21/06/1999");

  let e8 = await driver.$("id=com.easysmartphonecredit.pos:id/confirm_button");
  await e8.click();

  let e9 = await driver.$("com.easysmartphonecredit.pos:id/id_button_submit");
  await e9.click();


  await driver.longPressKeyCode(4, undefined, undefined);

  //Passport
  let e12 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/androidx.appcompat.widget.LinearLayoutCompat/android.widget.LinearLayout[1]/androidx.recyclerview.widget.RecyclerView/androidx.cardview.widget.CardView[2]/android.view.ViewGroup/android.widget.ImageView[2]");
  await e12.click();

  //Upload File Needs to be done 

  let e13 = await driver.$("id=com.easysmartphonecredit.pos:id/id_image_frontSide");
  await e13.click();

  //
  let el2 = await driver.$("~Tap shutter to take picture");
  await el2.click();

  let e14 = await driver.$("com.easysmartphonecredit.pos:id/id_image_backside");
  await e14.click();

  let e15 = await driver.$("com.easysmartphonecredit.pos:id/id_edit_serialNo");
  await e15.setValue(generateRandomMobileNumber);

  let e16 = await driver.$("com.easysmartphonecredit.pos:id/id_text_issueDate");
  await e16.click();

  let e17 = await driver.$("~Switch to text input mode");
  await e18.click();

  let e18 = await driver.$("android.widget.EditText");
  await e19.setValue("21/07/1999");

  let el20 = await driver.$("com.easysmartphonecredit.pos:id/confirm_button");
  await el20.click();

  let e21 = await driver.$("com.easysmartphonecredit.pos:id/id_button_submit");
  await e21.click();




}
runTest();
