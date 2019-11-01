 function displayModal(image) {
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");

    var img = new Image()
    img.src=image;
    imgWidth = img.width
    console.log(imgWidth)
    modalContent.style.width = imgWidth + "px"

    // Get the <span> element that closes the modal
    
    modalContent.insertAdjacentHTML("beforeend", "<span class='close'>&times;</span>")
    var span = document.getElementsByClassName("close")[0];
    modalContent.insertAdjacentHTML("beforeend", "<img class='photo' src='" + image + "'>")
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modalContent.innerHTML = ""
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
         modal.style.display = "none";
        }
    }
 }