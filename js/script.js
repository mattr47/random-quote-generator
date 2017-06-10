function getRandomNumber() {
	return Math.floor(Math.random() * (327 - 0 + 1)) + 0;
};

window.onload = function() {
	createQuote();
};

function myFunction() {
	document.getElementById("tweet").innerHTML = "";
  createQuote();
}

function createQuote() {
	randomNum = getRandomNumber();
  document.getElementById("quote").innerHTML = quote[randomNum];
  document.getElementById("author").innerHTML = "- " + author[randomNum];
	twttr.widgets.createShareButton(
  '/',
  document.getElementById("tweet"),
  {
		size: 'large',
    text: '"' + quote[randomNum] + '" '  + author[randomNum]
  });
};
