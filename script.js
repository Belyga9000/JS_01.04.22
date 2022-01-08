const randomText = "Lorem ipsum ' ' dsasdasdasd asdasdsad ' aren't, sdsdasdas";
const regex1 = /'/g;
const changedText = randomText.replace(regex1, "\"").replace(/n"t/, "n't");
console.log(changedText);