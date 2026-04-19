
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close-btn");
    const allImages = document.querySelectorAll(".city-card img");

   
    allImages.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex"; 
            modalImg.src = this.src;    
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

   
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});