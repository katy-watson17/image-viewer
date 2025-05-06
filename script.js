const searchField = document.getElementById("search-field");
const imageContainer = document.getElementById("image-container");
const image = document.getElementById("img");
const imageLink = document.getElementById("imglink");
const offlineInput = document.getElementById("offline");

function findImage() {
	const url = searchField.value;
	image.src = url;
	imageLink.href = url;
	imageContainer.style.display = "block";
}

offlineInput.addEventListener("change", function (event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			image.src = e.target.result;
			imageLink.href = e.target.result;
			imageContainer.style.display = "block";
		};
		reader.readAsDataURL(file);
	}
});