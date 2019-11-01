 function displayModal(image) {
    // Get the modal
    var modalContent = document.getElementById("modal-content");
    var modal = document.getElementById("modal");

    //Get width of image passed in as a paratmeter
    var img = new Image();
    img.src=image;
    imgWidth = img.width;
    console.log(imgWidth);

    //Set modal width to width of image
    modalContent.style.width = imgWidth + "px";
    modalContent.style.maxWidth = "90%";

    // Build modal content and display
    modalContent.insertAdjacentHTML("beforeend", "<span id='closeBtn' class='close'>&times;</span>") //Add close button
    var closeBtn = document.getElementById("closeBtn"); 
    modalContent.insertAdjacentHTML("beforeend", `<img class='photo' intrensicsize='${img.width} x ${img.height}' src='${image}'>`)
    modalContent.style.display = "block";
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = () => {
        modalContent.innerHTML = ""
        modalContent.style.display = "none"
        modal.style.display = "none";
    }
 }