const preview = document.getElementById("cursor-css-preview"),
styles = document.getElementById("styles"),
options = document.getElementsByName("cursor"),
copyButton = document.getElementById("copystyles");


// Add event listeners to eac range input
options.forEach((slider)=>{
    slider.addEventListener("input", generateStyles);
});



// Function to generate and update styles
function generateStyles(){
    // Create the box shadow CSS property Value
    var cursor = ``

    for (i = 0; i < options.length; i++) {
        if (options[i].checked)
            cursor = options[i].value;
    }

    
    // Upate the preview element styles 
    preview.style.cursor = cursor;

    // Update textarea with generated styles
    styles.textContent = `cursor: ${cursor};`
}



// Functon to copy the generated styles
function copyStyles(){
    styles.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy Styles";
    }, 500)
}

// Function to find current link and select
var menuLinks = document.getElementsByClassName("menu-link");
function selectCurrentMenuLink(){
    for (var i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].href === window.location.href){
            menuLinks[i].className += " menu-link-active";
        }
    }
}

selectCurrentMenuLink();
generateStyles();