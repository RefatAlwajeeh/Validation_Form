

un=document.getElementById('userName');
fn=document.getElementById('fullName');
em=document.getElementById('email');
cEm=document.getElementById('CEmail');
pass=document.getElementById('password');
Cpass=document.getElementById('cPassword');
sub=document.getElementById('submit');

mUn=document.getElementById('mUserName');
mfn=document.getElementById('mfullName');
mem=document.getElementById('memail');
mcEm=document.getElementById('mCEmail');
mpass=document.getElementById('mpassword');
mCpass=document.getElementById('mcPassword');
passWeak=document.getElementById('passwordWeak');

var numWord=0;

function add_bacground() {
    this.style.cssText="background-color: rgba(78, 92, 38, 0.04)";

}
function remove_bacground() {
    this.style.cssText="background-color:rgba(136, 126, 126, 0.04)";
    if(this.value!="")
    {
        this.nextElementSibling.nextElementSibling.innerText="";
        this.nextElementSibling.style.cssText="display:none";


    }

}

un.addEventListener("focus", add_bacground);
em.addEventListener("focus", add_bacground);
fn.addEventListener("focus", add_bacground);
pass.addEventListener("focus", add_bacground);
Cpass.addEventListener("focus", add_bacground);
cEm.addEventListener("focus", add_bacground);

un.addEventListener("blur", remove_bacground);
un.addEventListener("blur", function (e) {
    if(this.value.length<=20)
        mUn.innerText="";

});


em.addEventListener("blur", remove_bacground);
fn.addEventListener("blur", remove_bacground);
pass.addEventListener("blur", remove_bacground);
Cpass.addEventListener("blur", remove_bacground);
cEm.addEventListener("blur", remove_bacground);


function deleteMessage(inp) {
    inp.innerText="";

}

function readURL(input, imageId) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            imageId.setAttribute('src', e.target.result);

        }

        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById('image_btn').addEventListener('change', function () {

    readURL(this, document.getElementById('image'));


});




un.addEventListener("keydown", function(e){

    if(this.value.length>20)
        mUn.innerText="user name should be <= 20 letters ";
    else
        mUn.innerText="";
    if (e.which == 32)
    {
        mUn.innerText="user name should not contain any space ";
    }

    var t=un.value;
    un.value=t.trim(' ');
});


pass.addEventListener("keydown", function(e){

    if(this.value.length>0 & this.value.length<10 )
        passWeak.innerText="password weak";
    else  if(this.value.length>=10 & this.value.length<14 )
        passWeak.innerText="password mideum";
    else if(this.value.length>=14  )
        passWeak.innerText="password strong";
    else
        passWeak.innerText=" ";


});



fn.addEventListener("keydown", function(e){
    var x=this.value.split(" ").length ;
    if(x>5)
        mfn.innerText="full name should be less than 6  words ";
    else
        mfn.innerText="";
});


var inputs=document.getElementsByClassName('fild');
sub.addEventListener("click", function(e){
    e.preventDefault();

    if( em.value!=cEm.value)
        mcEm.innerText="email not matched";
    else
        mcEm.innerText="";

    if(pass.value.length<8)
        mpass.innerText="password should be more than 8 character";
    else if(pass.value.length>15)
        mpass.innerText="password should be  less than 15 character";
    else
        mpass.innerText='';

    if(pass.value!=Cpass.value)
        mCpass.innerText="password not matched";
    else
        mCpass.innerText = "";




    for (var i=0 ; i<inputs.length;i++)
    {
        if(inputs[i].value==""){
            var tt=inputs[i].nextElementSibling;
            tt.style.cssText="display:inline";
            tt.nextElementSibling.innerText="this filed is required";
        }
    }



});







/**************************/

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);







