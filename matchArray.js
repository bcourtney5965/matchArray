var friendsAges = {
	Brian: 24, 
	Jamie: 25, 
	Andre: 26
}
var myFriends = ["Brian", "Jamie", "Andre"];

function doesDataMatch(object, array) {
	var objectArray = [];
	var objectArraySorted = [];
	var arraySorted = [];
	// filtering out INCORRECT input 
	if (object instanceof Function || object instanceof Array || typeof(object) === "string" || typeof(object) === "number" || typeof(object) === null ||  typeof(object) === undefined ) {
		return "please make sure the object you enter is an object"
	} else if (array instanceof Function || typeof(array) === "string" || typeof(array) === "number" || typeof(array) === null || typeof(array) === undefined ) {
		return "please make sure the array you enter is an array"
	// filtering for CORRECT input
	} else if ( typeof object === "object" && array instanceof Array) {
		// Pushing friendsAges key's into an array
		for (var event in object) {
			objectArray.push(event);
		}
		/* sorting each array so their content is in the same order.
		   Instructions were interpreted to be asking if the object's
		   keys contained the same names as the array, thereforerder was 
		   not interpreted to be a factor worthy of a valse return value */
		objectArraySorted = objectArray.sort();
		arraySorted = array.sort();
	}
	function vettingTheArrays(array1, array2) {
		// if either array is a falsy value returns false
		if (!array1 && !array2) {
			return false;
		} 
		// comparing lengths
		if (array1.length !== array2.length) {
			return false;
		}
		for (var i = 0; i < array1.length; i++) {
			// Checking for nested arrays
			if (array1[i] instanceof Array && array2[i] instanceof Array) {
				// entering nested arrays
				if (array1[i] !== array2[i]) {
					return false;
				}
			// comparing contents of each array for equality	
			// using nonstrict equality check since different
			// object keys will never be equal
			} else if (array1[i] != array2[i]) {
				return false;
			}
		}
		return true;
	}
	return vettingTheArrays(arraySorted, objectArraySorted);
}	
doesDataMatch(friendsAges, myFriends);