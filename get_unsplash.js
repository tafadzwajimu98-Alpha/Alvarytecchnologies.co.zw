const https = require('https');
https.get('https://unsplash.com/s/photos/african-portrait', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g);
    console.log([...new Set(matches)].slice(0, 10));
  });
});
