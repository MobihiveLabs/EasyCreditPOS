const { log } = require('wd/lib/commands');
const { remote } = require('webdriverio');


async function runTest() {
  const driver = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      deviceName: 'Nokia C21 Plus',
      //app: 'C:\\Users\\ameay\\OneDrive\\Desktop\\MobiHive\\EasyCreditPOS\\app\\Credithive_pos.apk',
      automationName: 'UiAutomator2',

    },
  })


  //Functions 

  //Refresh Page
  async function refreshPage() {
    await driver.touchAction([
      { action: 'press', x: 345, y: 756 },
      { action: 'moveTo', x: 342, y: 1322 },
      'release'
    ]);
  }
  //Random Mob.No
  function generateRandomNumber() {
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

  //LoginPage
  async function login(){

    let el3 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_agent_id");
    await el3.setValue("A41");
    
    let el4 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_password");
    await el4.setValue("Test@123");
    
    let el5 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_login");
    await el5.click();
    
    await driver.pause(5000);
  }

  await login();

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
  await el11.setValue("Test");
  await driver.pause(500);

  let el12 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_middle_name");
  await el12.setValue("Test");

  let el13 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_last_name");
  await el13.setValue("Test");

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
  await el25.setValue(generateRandomNumber());

  let el26 = await driver.$("id=com.easysmartphonecredit.pos:id/id_edit_email");
  await el26.setValue(generateRandomEmail());
  await driver.touchAction([
    { action: 'press', x: 345, y: 1478 },
    { action: 'moveTo', x: 361, y: 47 },
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

  await driver.pause(1000);

  let el44 = await driver.$("id=android:id/button1");
  await el44.waitForDisplayed({timeout : 10000});
  await el44.click();
 

  el47.click();
  await driver.pause(20000);
  let el45 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_verify");
  await el45.click();

  let el46 = await driver.$("id=android:id/button1");
  await el46.click();

  await driver.pause(4000);
  await refreshPage();


  //KYC 

  let e1 = await driver.$('android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_details_container").index(1)');
  await e1.waitForDisplayed(4000);
  e1.click();

  let e2 = await driver.$(`android=new UiSelector().resourceId("com.easysmartphonecredit.pos:id/id_image_add").index(2)`);
  e2.click();

  let e01 = await driver.$('id=com.easysmartphonecredit.pos:id/id_image_frontSide');
  e01.click();

  // let e02 = await driver.$("id=com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  // await e02.click();

  let e03 = await driver.$("~Tap shutter to take picture");
  await e03.waitForDisplayed({timeout : 10000});
  await e03.click();

  await driver.pause(4000);

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
  await e3.waitForDisplayed({ timeout: 30000 });
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
  await e14.waitForDisplayed({ timeout: 30000 });
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

  await driver.pause(2000);
  await refreshPage();
  await driver.pause(2000);



  // Order Place
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
  await e26.waitForDisplayed({timeout : 10000});
  await e26.click();

  let e027 = await driver.$('[text="Make Upfront"]');
  await e027.waitForDisplayed({timeout : 10000});
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
  await e30.waitForDisplayed({ timeout: 20000 });
  await e30.setValue(generateRandomNumber());

  let e31 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_submit");
  await e31.click();

  // Enroll Device
  let e32 = await driver.$("id=com.easysmartphonecredit.pos:id/id_spinner_model_name");
  await e32.waitForDisplayed({timeout : 10000});
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

  // let e38 = await driver.$("id=com.easysmartphonecredit.pos:id/snackbar_action");
  // await e38.click();

  let e39 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_checkLock");
  await e39.waitForDisplayed({timeout : 10000});
  await e39.click();
  
  let e40 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_lock");
  await e40.waitForDisplayed();
  await e40.click();
  
  let e41 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_unlock");
  await e41.waitForDisplayed();
  await e41.click();
  
  let e42 = await driver.$("id=com.easysmartphonecredit.pos:id/snackbar_action");
  await e42.waitForDisplayed();
  await e42.click();

  let e43 = await driver.$('[text="Active Phone"]');
  await e43.waitForDisplayed();
  await e43.click();
  
  let e44 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_1");
  await e44.waitForDisplayed();
  await e44.click();
  
  let e45 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_2");
  await e45.click();
  
  let e46 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_3");
  await e46.click();
  
  let e47 = await driver.$("id=com.easysmartphonecredit.pos:id/id_tick_4");
  await e47.click();
  
  let e48 = await driver.$("id=com.easysmartphonecredit.pos:id/id_button_done_all");
  await e48.waitForDisplayed();
  await e48.click();
  
  await e42.click();
  
  await refreshPage();














}
runTest()

