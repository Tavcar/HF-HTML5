var quotes = ["I hope life isn't a joke, beacause I don't get it.",
             "There is a light at the end of a tunnel... just pray it's not a train!",
             "Do you believe in love at first sight or should I walk by again?"];
var index = Math.floor(Math.random() * quotes.length);
postMessage(quotes[index]);