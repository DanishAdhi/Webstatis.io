// JS Layanan
function toggleLayanan(event, id) {
    // event.preventDefault();
    const layananText = document.getElementById("layananText");
    const layanan_tur = document.getElementById("layanan_tur");


if (id === "layanan") {
    if (
    layananText.style.display === "none" ||
    layananText.style.display === ""
    )  {

        layananText.style.display = "block";
        layanan_tur.style.display = "block";
    } else {
        layananText.style.display = "none";
        layanan_tur.style.display = "none";

    }
   
    }
}
