let Kohminput=document.getElementById(' KΩ ');
let ohminput=document.getElementById('Ω');
let Mainput=document.getElementById('miliAmper');
let Ampinput=document.getElementById('Amper');
let Volpinput=document.getElementById('kvolt');
let Vainput=document.getElementById('volt');
let leginput = document.getElementById('Leg.Ohm');
function KConverter () {
    let valoareKohm = document.getElementById(' KΩ ').value ;
    document.getElementById('Ω').value=valoareKohm * 1e+3 ;
}
function OConverter () {
    let valoareohm = document.getElementById('Ω').value ;
    document.getElementById(' KΩ ').value=valoareohm * 1e-3 ;
    l
}
function AConverter () {
    let valoareAmp = document.getElementById('miliAmper').value ;
    document.getElementById('Amper').value=valoareAmp * 1e-3 ;

}
function AmConverter () {
    let valoareAm = document.getElementById('Amper').value ;
    document.getElementById('miliAmper').value=valoareAm * 1e+3 ;

}
function VConverter () {
    let valoareV = document.getElementById('kvolt').value ;
    document.getElementById('volt').value=valoareV * 1e+3 ;

}
function voConverter () {
    let valoarevo = document.getElementById('volt').value ;
    document.getElementById('kvolt').value=valoarevo * 1e-3 ;

}


Kohminput.addEventListener('keyup', KConverter);
ohminput.addEventListener('keyup', OConverter);
Mainput.addEventListener('keyup', AConverter);
Ampinput.addEventListener('keyup', AmConverter);
Volpinput.addEventListener('keyup', VConverter) ;
Vainput.addEventListener('keyup', voConverter);