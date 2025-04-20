const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//const fetch = require('node-fetch');
const fs = require('fs');

const coins = ['bitcoin', 'ethereum', 'dogecoin'];

async function fetchPrices() {
  const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd`);
  const data = await res.json();

  const result = `const prices = ${JSON.stringify(data, null, 2)};`;

  fs.writeFileSync('prices.js', result);
  console.log("Updated prices.js with latest data");
}

fetchPrices();
