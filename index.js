const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    proxy: {
      server: 'http://proxy.toolip.io:31112',
      username: '8c5906b99fbd1c0bcd0f916d545c565a769645b4d4da19b6f5d9ca51cb944b6124d9b13aba0a38fe73f510657cdee05cac36c45e9f9bd0a466095c9dbc6a91e8',
      password: 'm8ya8557f8g1',
    },
    args: ['--no-sandbox']
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("✅ فتح الموقع...");
  await page.goto('https://evg.ae/_layouts/EVG/Login.aspx?language=ar', { waitUntil: 'load' });

  console.log("✅ اختيار المؤسسات...");
  await page.check('#ctl00_cphScrollMenu_rbtnCompany');

  console.log("✅ إدخال البيانات...");
  await page.fill('#ctl00_cphScrollMenu_txtCompnayTCF', '1140163127');
  await page.fill('#ctl00_cphScrollMenu_txtLogin', '1070093478');
  await page.fill('#ctl00_cphScrollMenu_txtPassword', 'Yzaa3vip@');

  console.log("✅ تسجيل الدخول...");
  await page.click('#ctl00_cphScrollMenu_btnLogin');

  await page.waitForTimeout(5000);

  console.log("📸 أخذ لقطة شاشة...");
  await page.screenshot({ path: 'loggedin.png', fullPage: true });

  console.log("✅ تم! الصورة محفوظة في loggedin.png");

  await browser.close();
})();
