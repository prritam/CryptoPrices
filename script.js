const pricesContainer = document.getElementById('prices');
const coins = Object.keys(prices);

coins.forEach(coin => {
  const price = prices[coin].usd;
  const div = document.createElement('div');
  div.className = 'crypto';
  div.innerHTML = `<strong>${coin.toUpperCase()}</strong> <span>$${price.toLocaleString()}</span>`;
  pricesContainer.appendChild(div);
});

const cryptos = ['bitcoin', 'ethereum', 'dogecoin'];
 const now = new Date();
 document.getElementById("lastUpdated").textContent = "Last updated: " + now.toLocaleString();

async function fetchPrices() {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(',')}&vs_currencies=usd`
    );
    const data = await response.json();
    pricesContainer.innerHTML = '';
    cryptos.forEach(coin => {
      const price = data[coin].usd;
      const div = document.createElement('div');
      div.className = 'crypto';
      div.innerHTML = `<strong>${coin.toUpperCase()}</strong> <span>$${price.toLocaleString()}</span>`;
      pricesContainer.appendChild(div);
    });
  } catch (error) {
    pricesContainer.innerHTML = '<p style="color:red;">Failed to fetch prices.</p>';
    console.error(error);
  }
}

fetchPrices();
