const { log } = require('wd/lib/commands');
const { remote } = require('webdriverio');
const assert = require('assert')


describe("POS", () => {
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
    let client = await remote(opts);
  }
  
  it("Login" , async ()=>{
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_agent_id').setValue("A41");
    
    await client.$('id=com.easysmartphonecredit.pos:id/id_edit_password').setValue("Test@123");
    
    await client.$('id=com.easysmartphonecredit.pos:id/id_button_login').click();
    
    await client.pause(7000);
  

  })




})







