// put your JS functions here

function validate(event){
    if(document.getElementById('fname').value == ''){
        alert("First name should be filled out");
        event.preventDefault();
        document.getElementById('fname').focus();
    }
    else if(document.getElementById('lname').value == ''){
        alert("Last name should be filled out");
        event.preventDefault();
        document.getElementById('lname').focus();
    }
    else if(document.getElementById('pass').value == ''){
        alert("Password should be filled out");
        event.preventDefault();
        document.getElementById('pass').focus();
    }
    else if(document.getElementById('emil').value == ''){
        alert("Email should be filled out");
        event.preventDefault();
        document.getElementById('emil').focus();
    }
    else if(!(document.getElementById('emil').value.match(/\w(?=@)/g) != null && document.getElementById('emil').value.match(/@(?=\w)/g) != null && document.getElementById('emil').value.match(/(\w(?=[.](?=\w{2,3})))\b/g) != null)){
        alert("email formating wrong");
        event.preventDefault();
    }
    else if(!checkedBox()){
        alert("at least one hobby should be selected");
        event.preventDefault();
    }
    else if(document.getElementById('course').value != '' && !(document.getElementById('course').value.match(/EECS(?=\d)/g) != null && document.getElementById('course').value.match(/\d/g).length == 4 && document.getElementById('course').value.match(/\w/g).length == 8)){
        alert("Course code should be 'EECS1234'");
        event.preventDefault();
    }
}  // validate various form components{
	
var imgNum = 1;
var backCol = 1;

function changeLogo(){
    const element = document.getElementById('im');
    if(imgNum == 0) {
        element.src = 'images/logo/york.png';
        imgNum = 1;
    }
    else {
        element.src = 'images/logo/LAS.png';
        imgNum = 0;
    }
}   // change logo

function changeBackground(){
    if(backCol == 1){
        box.style.backgroundColor = "lightblue";
        backCol = 0;
    }
    else {
        box.style.backgroundColor = "rgb(220,220,220)";
        backCol = 1;
    }
}   // change background

function otherInput(){
    var sel = document.getElementsByName('program')[0].value;
    if(sel == 'OTHER') {
        other.style.display = "inline";
        other.focus();
    }
    else other.style.display = "none";
}
   

function checkedBox(){
    var checkboxs=document.getElementsByName("hobby[]");
    for(var i=0;i<checkboxs.length;i++)
    {
        if(checkboxs[i].checked)
        {
            return true;
        }
    }
    return false;
} // function to check if one box is clicked