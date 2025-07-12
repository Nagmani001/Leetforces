import puppeteer from "puppeteer";


let TurndownService = require('turndown');
var turndownService = new TurndownService();
let HTML;



(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "/usr/bin/google-chrome-stable"
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  );

  await page.setViewport({
    width: Math.floor(1024 + Math.random() * 100),
    height: Math.floor(768 + Math.random() * 100),
  });

  // Navigate the page to a URL
  await page.goto('https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K', { timeout: 0 });

  /*
  const completeProblemStatement = await page.$eval(".problem-statement", (el) => el.innerHTML);

  HTML = completeProblemStatement;
  console.log("HTML: ", completeProblemStatement);

  let markdown = turndownService.turndown(HTML);
  console.log("MARKDOWN: ", markdown);



  const title = await page.$eval(".title", (el) => el.innerHTML);
  const actualTitle = title.split(". ")[1];

  const timeLimit = await page.$eval(".time-limit", (el) => el.innerHTML);
  const actualTimeLimit = timeLimit.split("more than ")[1]?.split(".")[0];

  const memoryLimit = await page.$eval(".memory-limit", (el) => el.innerHTML);
  const actualMemoryLimit = memoryLimit.split("</div>")[1];

  console.log("Title: ", actualTitle);
  console.log("Time limit: ", actualTimeLimit);
  console.log("Memory Limit: ", actualMemoryLimit);
  */
})();


