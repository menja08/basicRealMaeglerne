// tests for postnummer by vej sagsnummer

exports.isPostNumber = function (postNumber) {

    // regex test
    var myRegex = (/^[0-9][0-9][0-9][0-9]$/).test(postNumber);
    console.log("myRegex = " + myRegex);

    // convert to int
    var postNumber = Number.parseInt(postNumber);

    // isInteger
    var isNumber = Number.isInteger(postNumber);
    console.log("isNumber = " + isNumber);

    if (isNumber) {
	console.log("one");
	if (1000 <= postNumber && postNumber <= 9999) {
	    console.log("postNumber is " + postNumber);
	    return true;
	} else {
	    console.log("PostNumber = " + false);
	    return false;
	}
    } else {
	return false;
    }
}



