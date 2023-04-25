
const anchorTags = document.getElementsByTagName('a');


const linksArray = [];

for (let i = 0; i < anchorTags.length; i++) {
  const link = anchorTags[i].href;
  linksArray.push(link);
}
console.log(linksArray);

console.log(linksArray[0]);