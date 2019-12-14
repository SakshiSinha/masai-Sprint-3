$('div').css('textShadow','#6374AB 5px -5px 5px');
function viewRecepie(data1) {
//   alert(data1)
 window.localStorage.setItem('instdata', data1)
window.location.href = "details.html";
get()
}
function get(){

    var datainst=localStorage.getItem('instdata')
    alert(datainst)
}
function search()
{
var item = document.getElementById('search').value;
console.log(item)
var xhr = new XMLHttpRequest();
var url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+item;
console.log(url);
xhr.open('GET', url);
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
        var data = JSON.parse(xhr.response);
        showdata(data);
    }
    else {
        console.log("Error Code is:" + xhr.status);
    }
}
}


function find()
{
    var char=document.getElementById('findchar').value;
    //alert("jvkvbnjxf")
    var xhr=new XMLHttpRequest();
    var url="https://www.themealdb.com/api/json/v1/1/search.php?f="+char;
    console.log(url);
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
    if (xhr.status == 200) {
        var data = JSON.parse(xhr.response);
        showdata(data);
    }
    else {
        console.log("Error Code is:" + xhr.status);
    }
}
}
    
function showdata(data) {
    var searchValue = document.getElementById("search").value;
    var  parra = document.createElement('h1');
    parra.style.textAlign ="center";
    parra.style.color = "red";
    parra.setAttribute("class",'col-12');
    parra.innerHTML ="Your selected item is " + searchValue;
    $("#output").append(parra);

    var carddiv = document.getElementById('output');
    carddiv.setAttribute('class', 'container-fluid row  m-1')
    

    for(var i = 0; i < data["meals"].length; i++){
        
        var cardAddCol = document.createElement('div');
       
        var cardAdd = document.createElement('div');
        cardAdd.style.backgroundColor="pink"
        var image = document.createElement('img');
        var cardDiv = document.createElement('div');
        var cardH5 = document.createElement('h5');
        var subdiv1 = document.createElement('div');
        var subdiv2 = document.createElement('div');
        var subdiv2 = document.createElement('div');
        var subdiv3 = document.createElement('BUTTON');
        
        var linkYouTube = document.createElement('a');
        
        cardAddCol.setAttribute('class',"col-4");
      
        

        cardAdd.setAttribute('class','card');
        cardAdd.setAttribute("class","borderblack")
        cardAdd.setAttribute('class',"mt-5");

        image.setAttribute("src", data["meals"][i]["strMealThumb"]);
        image.setAttribute("class",'card-img-top');
        
        cardDiv.setAttribute('class',"card-body");
        cardDiv.setAttribute('class',"text-center");
        
        cardH5.setAttribute('class',"card-title");
        cardH5.innerHTML=data["meals"][i]["strMeal"];
       // cardH5.css('box-shadow', '10px 10px 5px #888');

        subdiv1.setAttribute('class',"card-text-center");
        subdiv1.innerHTML = "Catogery -" + data["meals"][i]["strCategory"];

        subdiv2.setAttribute('class',"card-text-center");
        subdiv2.innerHTML = "From area -" + data["meals"][i]["strArea"];

        subdiv3.setAttribute('class'," d-flex margin1");
        subdiv3.innerHTML = "Instruction"
        // subdiv3.setAttribute('class',"accordian")
        // subdiv3.setAttribute('class',"toggle")
       // subdiv3.innerHTML = data["meals"][i]["strInstructions"];
       data1=data["meals"][i]["strInstructions"]
       subdiv3.setAttribute('onclick'," viewRecepie(data1)")
        
       
        
        linkYouTube.setAttribute("href", data["meals"][i]["strYoutube"]);
        linkYouTube.setAttribute('target', "_blank")
        linkYouTube.setAttribute("class", "");
       
        linkYouTube.innerHTML= "Click for Youtube Video"
        
        cardAdd.appendChild(image);
        cardAdd.appendChild(cardDiv);
        cardDiv.appendChild(cardH5);
        cardDiv.appendChild(subdiv1);
        cardDiv.appendChild(subdiv2);
        cardDiv.appendChild(subdiv3);
        cardDiv.appendChild(linkYouTube);
        
        cardAddCol.appendChild(cardAdd);
        $("#output").append(cardAddCol);
    }
}
