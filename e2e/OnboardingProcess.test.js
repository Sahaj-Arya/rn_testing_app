import {by, device, waitFor, element} from 'detox';

describe('Onboarding Process', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it('should display the first slide and navigate to next slide', async () => {
    await expect(
      element(by.text('Grab all events now only in your hands')),
    ).toBeVisible();
    await element(by.id('OnboardingScreen')).takeScreenshot();

    await element(by.text('Next')).tap();
    await expect(
      element(by.text('Easy payment & fast event ticket')),
    ).toBeVisible();
    await element(by.id('OnboardingScreen')).takeScreenshot();
  });

  it('should navigate on login screen on next', async () => {
    await element(by.text('Next')).tap();
    await element(by.id('OnboardingScreen')).takeScreenshot();
    await expect(
      element(by.text("Let's go to your favourite event now")),
    ).toBeVisible();
    await element(by.text('Login')).tap();
    await expect(element(by.id('LoginScreen'))).toBeVisible();
    await element(by.id('LoginScreen')).takeScreenshot();
  });
});
