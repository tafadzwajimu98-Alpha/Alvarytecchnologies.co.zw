const https = require('https');
https.get('https://unsplash.com/s/photos/black-man-portrait', { headers: {'User-Agent': 'Mozilla/5.0'} }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/images\.unsplash\.com\/photo-[\w\-]+/g);
    console.log([...new Set(matches)].slice(0, 10));
  });
});
