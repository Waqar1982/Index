
selecthead1();
selectBody1();
selectLegs1();



function selecthead1() {
    document.getElementById('headPart').innerHTML =/*HTML*/`
<button onclick="selecthead4()">
◀
</button>
<div>
<img src="img/head1.png"/>
</div>
<button onclick="selecthead2()">
▶
</div>
`;
}
function selecthead2() {
    document.getElementById('headPart').innerHTML =/*HTML*/`
<button onclick="selecthead1()">
◀
</button>
<div>
<img src="img/head2.png"/>
</div>
<button onclick="selecthead3()">
▶
</div>
`;
}
function selecthead3() {
    document.getElementById('headPart').innerHTML =/*HTML*/`
<button onclick="selecthead2()">
◀
</button>
<div style=>
<img src="img/head3.png"/>
</div>
<button onclick="selecthead4()">
▶
</div>
`;
}
function selecthead4() {
    document.getElementById('headPart').innerHTML =/*HTML*/`
<button onclick="selecthead3()">
◀
</button>
<div style=>
<img src="img/head4.png"/>
</div>
<button onclick="selecthead1()">
▶
</div>
`;
}


function selectBody1() {
    document.getElementById('bodyPart').innerHTML =/*HTML*/`
<button onclick="selectBody4()">
◀
</button>
<div>
<img src="img/body1.png"/>
</div>
<button onclick="selectBody2()">
▶
</div>
`;
}

function selectBody2() {
    document.getElementById('bodyPart').innerHTML =/*HTML*/`
<button onclick="selectBody1()">
◀
</button>
<div>
<img src="img/body2.png"/>
</div>
<button onclick="selectBody3()">
▶
</div>
`;
}
function selectBody3() {
    document.getElementById('bodyPart').innerHTML =/*HTML*/`
<button onclick="selectBody2()">
◀
</button>
<div style=>
<img src="img/body3.png"/>
</div>
<button onclick="selectBody4()">
▶
</div>
`;
}
function selectBody4() {
    document.getElementById('bodyPart').innerHTML =/*HTML*/`
<button onclick="selectBody3()">
◀
</button>
<div style=>
<img src="img/body4.png"/>
</div>
<button onclick="selectBody1()">
▶
</div>
`;
}


function selectLegs1() {
    document.getElementById('legsPart').innerHTML =/*HTML*/`
<button onclick="selectLegs4()">
◀
</button>
<div style=>
<img src="img/legs1.png"/>
</div>
<button onclick="selectLegs2()">
▶
</div>
`; }


function selectLegs2() {
    document.getElementById('legsPart').innerHTML =/*HTML*/`
<button onclick="selectLegs1()">
◀
</button>
<div style=>
<img src="img/legs2.png"/>
</div>
<button onclick="selectLegs3()">
▶
</div>
`; }

function selectLegs3() {
    document.getElementById('legsPart').innerHTML =/*HTML*/`
<button onclick="selectLegs2()">
◀
</button>
<div style=>
<img src="img/legs3.png"/>
</div>
<button onclick="selectLegs4()">
▶
</div>
`; }

function selectLegs4() {
    document.getElementById('legsPart').innerHTML =/*HTML*/`
<button onclick="selectLegs3()">
◀
</button>
<div style=>
<img src="img/legs4.png"/>
</div>
<button onclick="selectLegs1()">
▶
</div>
`; }

function removelayout(){
    console.log("kjøre removeLayout")
    document.getElementById('cards').classList.remove('girdLayout');
    document.getElementById('cards').classList.remove('vertikal');
    document.getElementById('cards').classList.remove('horisontal');
}


function gridLayout(){


    document.getElementById('cards').classList.remove('vertikal');
    document.getElementById('cards').classList.remove('horisontal');
    document.getElementById('cards').classList.add('gridLayout');
}


function vertikal(){
    
    document.getElementById('cards').classList.remove('girdLayout');
    document.getElementById('cards').classList.remove('horisontal');
    document.getElementById('cards').classList.add('vertikal');
    }

function horisontal(){
    
    document.getElementById('cards').classList.remove('girdLayout');
    document.getElementById('cards').classList.remove('vertikal');
    document.getElementById('cards').classList.add('horisontal');
}
function open(element){
document.getElementById(element).classList.toggle('hidden')


}