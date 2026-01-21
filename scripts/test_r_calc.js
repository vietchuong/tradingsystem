const puppeteer = require('puppeteer');

(async () => {
    console.log('🚀 Starting Automated Test for R-Calculator...');

    // Launch browser
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Set viewport to resemble a laptop
    await page.setViewport({ width: 1366, height: 768 });

    try {
        // Navigate to local dev server (Make sure npm run dev is running)
        await page.goto('http://localhost:3000');
        console.log('✅ Loaded Homepage');

        // Scroll to R-Calc section
        await page.evaluate(() => {
            document.querySelector('input[type="number"]')?.scrollIntoView({ behavior: 'smooth' });
        });
        await new Promise(r => setTimeout(r, 1000)); // Wait for scroll

        // Input Data
        const inputs = await page.$$('input[type="number"]');

        // 1. Capital = 10000
        await inputs[0].click({ clickCount: 3 });
        await inputs[0].type('10000');

        // 2. Risk % = 2
        await inputs[1].click({ clickCount: 3 });
        await inputs[1].type('2');

        // 3. Entry = 100
        await inputs[2].click({ clickCount: 3 });
        await inputs[2].type('100');

        // 4. Stoploss = 95
        await inputs[3].click({ clickCount: 3 });
        await inputs[3].type('95');

        console.log('✅ Input Data: Capital=10k, Risk=2%, Entry=100, SL=95');

        // Wait for React to update
        await new Promise(r => setTimeout(r, 1000));

        // Screenshot result
        await page.screenshot({ path: 'r-calc-result.png' });
        console.log('📸 Screenshot saved to r-calc-result.png');

        console.log('✅ Test Completed Successfully!');

    } catch (error) {
        console.error('❌ Test Failed:', error);
    } finally {
        await browser.close();
    }
})();
