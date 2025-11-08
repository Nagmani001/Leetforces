import 'dotenv/config'
import OpenAI from "openai";
import puppeteer from "puppeteer";
import { uploadToS3 } from './uploadToS3';


export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

  await page.goto('https://api.scraperapi.com/?api_key=c8d107bb9b82598ddf261ad1363bc994&url=https%3A%2F%2Fcodeforces.com%2Fgroup%2FMWSDmqGsZm%2Fcontest%2F219856%2Fproblem%2FM', { timeout: 0 });

  const randomName = Math.random().toString();
  await page.screenshot({ path: `/home/nagmani/root/${randomName}.png`, fullPage: true });
  uploadToS3(randomName)
})();
