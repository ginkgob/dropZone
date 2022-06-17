document.querySelectorAll(".dropInput").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".dropZone");

    dropZoneElement.addEventListener("click", e => {
        inputElement.click();
    });

    inputElement.addEventListener("change", e => {
        if(inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0])
        }
    });

    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("dropOver")
    });

    ["dragleave", "dragend"].forEach(type=> {
        dropZoneElement.addEventListener(type, e=> {
            dropZoneElement.classList.remove("dropOver")
        });
    });

    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("dropOver");

    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".dropThumbnail");

    if (dropZoneElement.querySelector(".dropPrompt")) {
        dropZoneElement.querySelector(".dropPrompt").remove();
    } 
    
    if(!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("dropThumbnail");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    //show thumbnail for image files

    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }

}
