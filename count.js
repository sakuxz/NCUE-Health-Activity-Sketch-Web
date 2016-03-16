var target = '31.6.74.52.4.573.6.73.53.6.82.6.772.6.76.7.81.2.76.731.2.6.73.6.73.611.3.73.6.71.2.71.2.6.81.7.82.651.2.71.2.3.61.3.81.812.3.6.73.6.72.5.71.2.3.6.73.6.71.3.82.6.71.2.3.72.3.61.6.73';
var result = [];
for (var i = 0; i < target.length; i++) {
  if (target[i] === '.') continue;
  if (result[target[i]] == undefined) result[target[i]] = 1;
  else result[target[i]]++;
}
console.log(result);