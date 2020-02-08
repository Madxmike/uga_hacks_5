let map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var marker = L.marker([51.5, -0.09]).addTo(map);
search.onsubmit = async (e) => {
    e.preventDefault();
    console.log("test")
    let form = new FormData(search);
    form.append("bounds", map.getBounds().toBBoxString());
    for (let entry of form.entries()) {
        console.log(entry)
    }
    let response = await fetch(window.location.origin + '/api/search', {
      method: 'POST',
      body: form
    });

    let result = await response.json();

     alert(result.message);
  };

document.getElementsByClassName("currency").onblur =function (){

    //number-format the user input
    this.value = parseFloat(this.value.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //set the numeric value to a number input
    document.getElementById("number").value = this.value.replace(/,/g, "")

}