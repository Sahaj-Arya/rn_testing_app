import {by, device, waitFor, element} from 'detox';

describe('Register Process', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Sign up')).tap();
    await element(by.id('firstName')).typeText('sahaj');
    await element(by.id('lastName')).typeText('arya');
    await element(by.id('email')).typeText('sahajk3@gmail.com');
    await element(by.id('password')).typeText('1234567890');
    await device.pressBack();
  });

  it('should fill email and password name , lastname', async () => {
    await expect(element(by.id('register'))).toBeVisible();
    await element(by.id('register')).tap();
    await expect(element(by.text('Testing Complete'))).toBeVisible();
  });
});
