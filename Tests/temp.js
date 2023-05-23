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

  try {
    // Write your test code here

    // To Login Page
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_agent_id').setValue("A41");

    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_password').setValue("Test@123");

    await driver.$('id=com.easysmartphonecredit.pos:id/id_button_login').click();

    await driver.pause(10000);

    //Toward All lead
    await driver.$('//android.widget.ImageButton[@content-desc="Open navigation drawer"]').click();
    //All lead
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/androidx.appcompat.widget.LinearLayoutCompat[2]/android.widget.CheckedTextView').click();
    await driver.$('id=com.easysmartphonecredit.pos:id/id_button_createLead').click();

    //NEw Lead Form
    await driver.$('id=com.easysmartphonecredit.pos:id/id_text_full_name').click();
    //First Name
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_first_name').setValue("Amey");
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_middle_name').setValue("M");
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_last_name').setValue("Pande");
    await driver.$('id=com.easysmartphonecredit.pos:id/id_button_submit').click();

    //Gender
    (await driver.$('id=com.easysmartphonecredit.pos:id/id_spinner_gender')).click();
    (await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]')).click();


    

    //Date of birth
    await driver.$('id=com.easysmartphonecredit.pos:id/id_text_birthDate').click();
    await driver.$('id=com.easysmartphonecredit.pos:id/mtrl_picker_header_toggle').click();
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue("29/06/2000");
    await driver.pause(2000);
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[2]').click();
    
    //Marital Status
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/androidx.appcompat.widget.LinearLayoutCompat/androidx.cardview.widget.CardView[1]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[3]/android.widget.TextView[1]').click();
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]').click();

    //Education
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/androidx.appcompat.widget.LinearLayoutCompat/androidx.cardview.widget.CardView[1]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[3]/android.widget.TextView[2]').click();
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]').click();


    //Mobile no
    (await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_mobile')).setValue(9786543210);
    (await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_email')).setValue("amp@credhive.com");

    // const scrollOptions = {
    //   direction : 'down',
    //   percentage : 0.6,
    // };
    // await driver.execute('mobile-scroll',scrollOptions);

    //**Employee Details**
    //await browser.swipeDown('id=com.easysmartphonecredit.pos:id/id_text_employee_since',100);  

    //Employee Since
    await driver.$('id=com.easysmartphonecredit.pos:id/id_text_employee_since').click();
    // empsince.scrollIntoView();
    await driver.$('id=com.easysmartphonecredit.pos:id/mtrl_picker_header_toggle').click();
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue("01/05/23");
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[2]').click()
    
    //Employee
    await driver.$('id=com.easysmartphonecredit.pos:id/id_spinner_employee_type').click();
    await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]').click();
    
    //Monthly income
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_monthly_income').setValue(5000);
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_monthly_saving').setValue(2000);
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_existing_loan').setValue(0);
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_existing_loan').setValue(0);
    await driver.$('id=com.easysmartphonecredit.pos:id/id_edit_dependency').setValue(2);
    
    //Address
    (await driver.$('id=com.easysmartphonecredit.pos:id/id_spinner_city')).click();
    
    

  


    // await driver.$('')
    // await driver.$('')
    // await driver.$('')




    





    // Example: Assert that an element exists
    const isDisplayed = await element.isDisplayed();
    console.log('Is element displayed?', isDisplayed);

    // Example: Perform other actions or assertions

    // Quit the session
    //await driver.deleteSession();
  } catch (error) {
    console.error('Test failed:', error);
    //await driver.deleteSession();
  }
}


runTest();

