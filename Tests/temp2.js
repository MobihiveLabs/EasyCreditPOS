const browser = require('desired-capabilities/src/browser');
const { log } = require('wd/lib/commands');
const { remote } = require('webdriverio');

async function runTest() {
  const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android', // Change to 'iOS' for iOS testing
      deviceName: 'Nokia C21 Plus', // Replace with your device name
      app: 'C:\\Users\\ameay\\OneDrive\\Desktop\\MobiHive\\EasyCreditPOS\\app\\Credithive_pos.apk',
      automationName: 'UiAutomator2', // For Android

    },
  };

 const client = await remote(opts);

  try {
    // Write your test code here

    // To Login Page
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_agent_id').setValue("A41");

    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_password').setValue("Test@123");

    await client.$('id=com.easysmartphonecredit.pos:id/id_button_login').click();

    await client.pause(10000);

    //Toward All lead
    await client.$('//android.widget.ImageButton[@content-desc="Open navigation drawer"]').click();
    //All lead
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/androidx.appcompat.widget.LinearLayoutCompat[2]/android.widget.CheckedTextView').click();
    await client.$('id=com.easysmartphonecredit.pos:id/id_button_createLead').click();

    //NEw Lead Form
    await client.$('id=com.easysmartphonecredit.pos:id/id_text_full_name').click();
    //First Name
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_first_name').setValue("Amey");
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_middle_name').setValue("M");
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_last_name').setValue("Pande");
    await client.$('id=com.easysmartphonecredit.pos:id/id_button_submit').click();

    //Gender
    (await client.$('id=com.easysmartphonecredit.pos:id/id_spinner_gender')).click();
    (await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]')).click();


    

    //Date of birth
    await client.$('id=com.easysmartphonecredit.pos:id/id_text_birthDate').click();
    await client.$('id=com.easysmartphonecredit.pos:id/mtrl_picker_header_toggle').click();
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue("29/06/2000");
    await client.pause(2000);
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[2]').click();
    
    //Marital Status
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/androidx.appcompat.widget.LinearLayoutCompat/androidx.cardview.widget.CardView[1]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[3]/android.widget.TextView[1]').click();
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]').click();

    //Education
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/androidx.appcompat.widget.LinearLayoutCompat/androidx.cardview.widget.CardView[1]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[3]/android.widget.TextView[2]').click();
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]').click();


    //Mobile no
    (await client.$('id=com.easysmartphonecredit.pos:id/id_edit_mobile')).setValue(9786543210);
    (await client.$('id=com.easysmartphonecredit.pos:id/id_edit_email')).setValue("amp@credhive.com");

    // const scrollOptions = {
    //   direction : 'down',
    //   percentage : 0.6,
    // };
    // await client.execute('mobile-scroll',scrollOptions);

    //**Employee Details**
    const windowSize = await driver.getWindowSize();
    const startX = Math.round(windowSize.width / 2);
    const startY = Math.round(windowSize.height * 0.8);
    const endY = Math.round(windowSize.height * 0.2);
    
    // Perform the swipe down action
    await driver.touchPerform([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 500 },
      { action: 'moveTo', x: startX, y: endY },
      { action: 'release' }
    ]);





    
    //Employee Since
    await client.$('id=com.easysmartphonecredit.pos:id/id_text_employee_since').click();
    // empsince.scrollIntoView();
    await client.$('id=com.easysmartphonecredit.pos:id/mtrl_picker_header_toggle').click();
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue("01/05/23");
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[2]').click()
    
    //Employee
    await client.$('id=com.easysmartphonecredit.pos:id/id_spinner_employee_type').click();
    await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]').click();
    
    //Monthly Savings
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_monthly_income').setValue(5000);

  


    // await client.$('')
    // await client.$('')
    // await client.$('')




    





    // Example: Assert that an element exists
    const isDisplayed = await element.isDisplayed();
    console.log('Is element displayed?', isDisplayed);

    // Example: Perform other actions or assertions

    // Quit the session
    //await client.deleteSession();
  } catch (error) {
    console.error('Test failed:', error);
    //await client.deleteSession();
  }
}


runTest();
