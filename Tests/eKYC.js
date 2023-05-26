const { refresh } = require('wd/lib/commands');
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
  
  async function refreshPage(){
    await driver.touchAction([
      { action: 'press', x: 345, y: 756 },
      { action: 'moveTo', x: 342, y: 1322 },
      'release'
    ]);
  }
  
  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return "0" + randomNumber.toString().substring(1, 11);
  }
  try {

    // let el3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_agent_id");
    // await el3.setValue("A41");

    // let el4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_password");
    // await el4.setValue("Test@123");

    // let el5 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_login");
    // await el5.click();
    //await driver.pause(6000);

    // let el6 = await driver.$("~Open navigation drawer");
    // await el6.waitForDisplayed(2000);
    // el6.click();


    // let el7 = await driver.$('[text="All Leads"]');
    // await el7.waitForDisplayed(3000);
    // await el7.click();
    // //await driver.pause(4000);

    //KYC tab
    let e1 = await driver.$('android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_details_container").index(1)');
    await e1.waitForDisplayed(4000);
    e1.click();

    let e2 = await driver.$(`android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_image_add").index(2)`);
    e2.click();

    //Upload File Needs to be done 

    //NationalId
    let e01 = await driver.$('id=com.easysmartphonecredit.pos:id/id_image_frontSide');
    e01.click();

    // let e02 = await driver.$("id=com.android.permissioncontroller:id/permission_allow_foreground_only_button");
    // await e02.click();

    let e03 = await driver.$("~Tap shutter to take picture");
    await e03.waitForDisplayed(5000);
    await e03.click();

    await driver.pause(4000);
    // await driver.touchAction({ actions: 'press', x: 541, y: 1352 })
    // await driver.touchAction({ actions: 'press', x: 544, y: 1349 })

    await driver.touchAction([
      { action: 'press', x: 548, y: 1358 },
      'release'
    ]);


    let e04 = await driver.$("id=com.easysmartphonecredit.pos:id/crop_image_menu_crop");
    await e04.waitForDisplayed(4000);
    e04.click()

    let e05 = await driver.$('id=com.easysmartphonecredit.pos:id/id_image_backside');
    await e05.waitForDisplayed({ timeout: 20000 });
    e05.click();

    let e06 = await driver.$("~Tap shutter to take picture");
    await e06.click();

    await driver.pause(4000);
    await driver.touchAction([
      { action: 'press', x: 548, y: 1358 },
      'release'
    ]);

    let e07 = await driver.$("id=com.easysmartphonecredit.pos:id/crop_image_menu_crop");
    await e07.waitForDisplayed(4000);
    e07.click();


    let e3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_serialNo");
    await e3.waitForDisplayed({ timeout: 20000 });
    await e3.setValue(generateRandomNumber());

    let e4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_issueBy");
    await e4.setValue("CreditHive");

    await driver.touchAction([
      { action: 'press', x: 345, y: 1478 },
      { action: 'moveTo', x: 361, y: 47 },
      'release'
    ]);

    let e5 = await driver.$("id=com.easysmartphonecredit.pos:id/id_text_issueDate");
    await e5.waitForDisplayed();
    await e5.click();

    let e6 = await driver.$("~Switch to text input mode");
    await e6.click();

    let e007 = await driver.$("android.widget.EditText");
    await e007.setValue("21/06/1999");

    let e8 = await driver.$("id=com.easysmartphonecredit.pos:id/confirm_button");
    await e8.click();

    let e9 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_submit");
    await e9.click();


    //await driver.longPressKeyCode(4, undefined, undefined);

    //Affidavit

    let e10 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/androidx.appcompat.widget.LinearLayoutCompat/android.widget.LinearLayout[2]/androidx.recyclerview.widget.RecyclerView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.ImageView[2]");
    await e10.click();
    
    let e11 = await driver.$("id=com.easysmartphonecredit.pos:id/id_image_frontSide");
    await e11.click();
    let e12 = await driver.$("~Tap shutter to take picture");
    await e12.click();

    await driver.pause(4000);
    await driver.touchAction([
      { action: 'press', x: 548, y: 1358 },
      'release'
    ]);
    
    let e13 = await driver.$("id=com.easysmartphonecredit.pos:id/crop_image_menu_crop");
    await e13.waitForDisplayed();
    e13.click();
    
    let e14 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_issueBy");
    await e14.waitForDisplayed({timeout : 20000});
    await e14.setValue("CreditHive");
    
    let e15 = await driver.$("id=com.easysmartphonecredit.pos:id/id_text_issueDate");
    await e15.click();
    
    let e16 = await driver.$("~Switch to text input mode");
    await e16.click();
    
    let e17 = await driver.$("android.widget.EditText");
    await e17.setValue("21/07/1999");
    
    let e18 = await driver.$("id=com.easysmartphonecredit.pos:id/confirm_button");
    await e18.click();
    
    let e19 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_submit");
    await e19.click();
    
    refreshPage();
    






  } catch (err) {
    console.log("Error is " + err);
  }



}
runTest();
