const siblings = [
	{
		name: "Godspower Itedjere",
		gender: "Male",
		age: 33,
	},
	{
		name: "Rachel Itedjere",
		gender: "Female",
		age: 31,
	},
	{
		name: "Rhoda Itedjere",
		gender: "Female",
		age: 31,
	},
	{
		name: "Andrew Itedjere",
		gender: "Male",
		age: 29,
	},
	{
		name: "Daniel Itedjere",
		gender: "Male",
		age: 23,
	},
];

let text = "";

function getSibling(sibling) {
	return `<li
							class="list-group-item d-flex justify-content-between align-items-start"
						>
							<div class="ms-2 me-auto">
								<div class="fw-bold">${sibling.name}</div>
								${sibling.gender}
							</div>
							<span class="badge bg-primary rounded-pill"
								>${sibling.age}</span
							>
						</li>`;
}

for (let sibling of siblings) {
	text += getSibling(sibling);
}

document.getElementById("siblingsList").innerHTML = text;
