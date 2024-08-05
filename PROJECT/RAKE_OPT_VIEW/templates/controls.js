

function showCommTable(){
    document.querySelector(".table-div").classList.toggle("table-show");
    document.querySelector(".table-div").classList.toggle("table-hide");
    document.querySelector(".table-div")
}
function addRow(){
   var tableHtml= document;
    // document.getElementById("tb-body").innerHTML;
   
var comm = document.getElementById("commodity-select");
var commValue = comm.options[comm.selectedIndex].value;
var commText = comm.options[comm.selectedIndex].text;

var subComm = document.getElementById("sub-commodity-select");
var subCommValue = subComm.options[subComm.selectedIndex].value;
var subCommText = subComm.options[subComm.selectedIndex].text;

var commDate = document.getElementById("comm-date");
var commDateValue=commDate.value;
var commDateText = commDate.text;
console.log(commValue);
console.log(subCommValue);
console.log(commDateValue);
console.log(document.getElementById("tb-body").innerText);
console.log(tableHtml);
tableHtml += '<tr> <td>'+ commValue +'</td> <td>' +subCommValue +'</td> <td>'+ commDateValue+ '</td> </tr>' ; 


}
