const puppeteer = require("puppeteer");
const https = require("https");

require("events").EventEmitter.defaultMaxListeners = 100;

async function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function frPdf(pathh) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`https://api.martinezbaratlafore.com/${pathh}/#fr`, {
    waitUntil: "networkidle2",
  });
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });
  await timeout(9000);

  await page.pdf({
    path: `static/docs/fr_${pathh}.pdf`,
    format: "A4",
  });

  await browser.close();
}

let url =
  "https://api.martinezbaratlafore.com/wp-json/wp/v2/posts?_embed&per_page=100";

https
  .get(url, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
    });

    res.on("end", () => {
      try {
        let json = JSON.parse(body);
        json.forEach(function (item) {
          frPdf(item.slug);
        });
      } catch (error) {
        console.error(error.message);
      }
    });
  })
  .on("error", (error) => {
    console.error(error.message);
  });
