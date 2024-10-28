import {by, device, waitFor, element} from 'detox';

describe('Login Process', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Login')).tap();
    await element(by.id('email')).typeText('sahajk3@gmail.com');
    await element(by.id('password')).typeText('1234567890');
    await device.pressBack();
  });

  it('should fill email and password', async () => {
    await expect(element(by.id('Login'))).toBeVisible();
    await element(by.id('Login')).tap();
    await expect(element(by.text('Testing Complete'))).toBeVisible();
  });
});
