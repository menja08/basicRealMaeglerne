// tests for postnummer by vej sagsnummer

exports.isPostNumber = function (postNumber) {

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



