import api from './api.js';

async function main() {
  const data = await api.fetchTest();
  console.log('response data', data);

  document.getElementById('id').innerHTML = data[0]['id'];
  document.getElementById('url').innerHTML = data[0]['url'];

  var html = '<img src="' + data[0]['url'] + '">';
  document.getElementById('image').innerHTML = html;
}

main();
