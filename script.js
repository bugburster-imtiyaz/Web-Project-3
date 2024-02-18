function submitForm() {
  var form = document.getElementById("myForm");
  var display = document.getElementById("display");
  var formData = new FormData(form);
  var displayHTML = "<h2>Form Data:</h2>";
  for (var pair of formData.entries()) {
    displayHTML += "<p><strong>" + pair[0] + ":</strong> " + pair[1] + "</p>";
  }
  display.innerHTML = displayHTML;
}