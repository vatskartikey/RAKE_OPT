

function showCommTable(){
    

    document.querySelector(".table-div").classList.toggle("table-show");
    document.querySelector(".table-div").classList.toggle("table-hide");
    document.querySelector(".table-div")
}
 document.getElementById("add-button").addEventListener("click",function (){
   
   
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

if(commValue=="" || subCommValue =="" || commDateValue==""){
    alert("all inputs required");
    return;
}
showTable();
//     const tableHtml= document.querySelector("#comm-table tbody");
//     const newRow = document.createElement('tr');
//     const commodity= document.createElement('td');
//     const subcommodity = document.createElement('td');
//     const date = document.createElement('td');
//     commodity.textContent= commValue;
//     subcommodity.textContent = subCommValue;
//     date.textContent= commDateValue;
//     newRow.appendChild(commodity);
//     newRow.appendChild(subcommodity);
//     newRow.appendChild(date);
//     tableHtml.appendChild(newRow);

//     // creating the form type table 
//     var row= document.querySelector("#comm-table tbody").innerHTML;
    
// row+="<div class=row'> <div class='col-2' >coal" + "<input type='date' class='form-control' value='456' >" +"</div></div>" ;
var comtable= document.querySelector("#table-comm");
var flexdiv=document.querySelector("#flex-div");
// const row_class=document.createAttribute("class");
// row_class.value="row";
// const col_class=document.createAttribute("class");
// col_class.value="col-2";

const rowdiv=document.createElement("div");
rowdiv.setAttribute("class","row table-row");
rowdiv.setAttribute("max-width","fit-content");
rowdiv.style.paddingTop="2%";
// serialNo div
// const serialNoDiv=document.createElement("div");
// serialNoDiv.setAttribute("class","col-1");
// const serialDivInput = document.createElement("input");
// serialDivInput.setAttribute("class","form-control");
// serialDivInput.setAttribute("id","disabledTextInput");
// serialDivInput.setAttribute("disabled","disabled");
// serialDivInput.setAttribute("value",count);
// count++;
// serialNoDiv.appendChild(serialDivInput);
// rowdiv.appendChild(serialNoDiv);
// commodity div

const commColDiv=document.createElement("div");
commColDiv.setAttribute("class","col-3");

const commInput= document.createElement("input");
commInput.setAttribute("class","form-control");
commInput.setAttribute("id","disabledTextInput");
commInput.setAttribute("disabled","disabled");
commInput.setAttribute("value",commValue);
commColDiv.appendChild(commInput);
rowdiv.appendChild(commColDiv);

// sub commodity div
const subCommColDiv=document.createElement("div");
subCommColDiv.setAttribute("class","col-3");
const subCommInput= document.createElement("input");
subCommInput.setAttribute("class","form-control");
subCommInput.setAttribute("id","disabledTextInput");
subCommInput.setAttribute("disabled","disabled");
subCommInput.setAttribute("value",subCommValue);
subCommColDiv.appendChild(subCommInput);
rowdiv.appendChild(subCommColDiv);
// date div
const dateColDiv=document.createElement("div");
const dateinput=document.createElement("input");
dateinput.setAttribute("value",commDateValue);
dateinput.setAttribute("type","date");
dateinput.setAttribute("class","form-control");
dateColDiv.setAttribute("class","col-3");
dateinput.setAttribute("disabled","disabled");
dateColDiv.appendChild(dateinput);
rowdiv.appendChild(dateColDiv);
// button div
const deleteButtonColDiv=document.createElement("div");
deleteButtonColDiv.setAttribute("class","col-2");
const deleteButton = document.createElement("button");
deleteButton.setAttribute("type","button");
deleteButton.setAttribute("class","btn btn-danger");
deleteButton.innerHTML="<i class='fa-solid fa-trash-can'></i>";
deleteButton.setAttribute("onclick","deleteRow(this)");
deleteButtonColDiv.appendChild(deleteButton);
const br=document.createElement("br");
rowdiv.appendChild(deleteButtonColDiv);

// flex div 
var flex_div=document.createElement('div');
flex_div.style.display="flex";
flex_div.style.justifyContent="flex-start"
flex_div.style.gap="20px";
// flex_div.appendChild(rowdiv);
// appeding row div into table
// comtable.appendChild(flex_div);
flexdiv.appendChild(rowdiv);

commRowCount();



 });

 function deleteRow(button){
    var row_Div = button.parentNode.parentNode;

    row_Div.parentNode.removeChild(row_Div);
    commRowCount();
}

function showTable(){
    document.getElementById("table-comm").classList.remove("table-hide");
    
}

function commRowCount(){
    // total count of rows entered
    
    var crowcount=document.querySelectorAll("#table-comm .table-row").length;
    document.getElementById("commCountInput").setAttribute("value",crowcount);
    if(crowcount===0){
        document.getElementById("table-comm").classList.add("table-hide");
    }

}
function submitdata(){
    var headway = document.querySelector("#headway").value;
    
    var emptyrun = document.querySelector("#emptyrun").value;
    var reskilo = document.querySelector("#reskilo").value;
    var explor= document.querySelector("#explor").value;
    var altpaths = document.querySelector("#altpaths").value;
    var bpckm = document.querySelector("#bpckm").value;
    var ldudtime = document.querySelector("#ldudtime").value;
    var dmndcutoff=document.querySelector("#dmndcutoff").value;
    console.log(emptyrun,reskilo,explor,altpaths,bpckm, ldudtime,dmndcutoff)
    console.log(head_way);
    var data={
        headway:headway,
        emptyrun:emptyrun,
        reskilo:reskilo,
        explor:explor,
        altpaths:altpaths,
        bpckm:bpckm,
        ldudtime:ldudtime,
        dmndcutoff:dmndcutoff

                };
                $.ajax({
                    type:'POST',
                    url:"{ }",
                    dataType:'json',
                    data:data,
                    success:function(response){

                    }
                })
    }



