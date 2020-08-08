let colors = ['#C0392B','#884EA0','#7D3C98','#2471A3 ','#17A589 ',
'#D4AC0D','#BA4A00'];
let i=0;
const button = document.querySelector("button");
const cambiarColor = () => {
    if(i<colors.length){
        i++;
    }else{
        i=0;
    }
    const body = document.querySelector("body");
    body.style.background = colors[i];
}
button.addEventListener('click', cambiarColor );