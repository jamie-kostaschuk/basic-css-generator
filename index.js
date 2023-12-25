const preview = document.getElementById("preview"),
styles = document.getElementById("styles"),
ranges = document.querySelectorAll(".settings input"),
copyButton = document.getElementById("copystyles");

// Add event listeners to eac range input
ranges.forEach((slider)=>{
    slider.addEventListener("input", generateStyles);
});

// Function to generate and update styles
function generateStyles(){
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const borderRadius = document.getElementById("border-r").value; 
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const insetShadow = document.getElementById("inset-shadow").checked;
    const shadowColor = document.getElementById("shadow-color").value;

    // Create the box shadow CSS property Value
    const boxShadow = `${insetShadow ? "inset" : ""} ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`

    // Upate the preview element styles 
    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`

    // Update textarea with generated styles
    styles.textContent = `box-shadow: ${boxShadow}; \nborder-radius: ${borderRadius}px`
}

// Function to covert hex color and opacity to rgba format
function hexToRgba(shadowColor,shadowOpacity){
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
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
        console.log(menuLinks[i].href)
        if (menuLinks[i].href === window.location.href){
            menuLinks[i].className += " menu-link-active";
        }
    }
}

selectCurrentMenuLink();
generateStyles();