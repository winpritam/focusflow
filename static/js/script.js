let add_course_btn = document.getElementById("add-courses");
let upload_div = document.getElementById("upload-file-div");
let cut_button = document.getElementById("cut-div");
add_course_btn.addEventListener("click", khulja);
cut_button.addEventListener("click", bandhoja);
function khulja() {
    upload_div.style.display = "flex";
}
function bandhoja() {
    upload_div.style.display = "none";
}