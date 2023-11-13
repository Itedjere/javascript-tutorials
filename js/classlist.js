let h1ClassNames = document.getElementById("heading").classList;

// Check if a class name is inside the classList
// let isPresent = h1ClassNames.contains("two");

// Add A Class To The classList
// h1ClassNames.add("Rhoda");

// Remove A Class From A classList
// h1ClassNames.remove("one");

// h1ClassNames.add("Rachel", "Mudia");

// h1ClassNames.remove("two", "three", "four", "Rhoda", "Rachel", "Mudia");

// Add a class name of rhoda to the h1 element if it has a class of two, otherwise add a class name of rachel if it does not have a class name of two

if (h1ClassNames.contains("two")) {
	h1ClassNames.add("rhoda");
} else {
	h1ClassNames.add("rachel");
}
