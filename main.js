var nameInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteUrl")
var siteList = [];

function addSite() {
    var site = {
        name: nameInput.value, 
        url: urlInput.value
    }

siteList.push(site)
displayData ()
// showData()
}





function displayData() {
    var temp = "";
    for (var i = 0; i< siteList.length; i++) {
        temp += `<tr>
        <td> ` + i + `</td>
        <td>` + siteList[i].name + `</td>
        <td>
        <a href="${siteList[i].url}" target="_blank""  class="btn btn-warning">vist</a>
    </td>
    <td>
        <button onclick = "deleteSite( ${i})" class="btn btn-danger">Delete</button>
    </td> 
    </tr>
        `
    }
    document.getElementById("myTable").innerHTML = temp
}



function updateData(){
    console.log("update...")
}



function deleteSite(index) {
console.log(index)
siteList.splice( index , 1 )
displayData()
}