
function mudarPagina(){
    let pagina = confirm("Quer sair dessa pagina ?");

    if(pagina){
        window.open("informacaoJogoGui.html","_blank");
    }else{
       
        alert("Obrigado pela sua resposta!");

}
}


let contSprite1=0;
let contSprite2=0;
let contSprite3=0;
//Sprite personagem
function mudarImagemsp1(){
    //mudar sprite 1

  

    
    if(contSprite1==0){
        
        document.getElementById("sp11").src = "ImagensGui/s2.png";
        contSprite1++;
    }else if(contSprite1==1){
        document.getElementById("sp11").src = "ImagensGui/s3.png";
        contSprite1++;
    }else if(contSprite1 ==2){
        document.getElementById("sp11").src = "ImagensGui/s4.png";
        contSprite1=0;

    }
}

function mudarImagemsp2(){
    //mudar sprite 2

   

    
    if(contSprite2==0){
        
        document.getElementById("sp22").src = "ImagensGui/sprite2_2.png";
        contSprite2++;
    }else if(contSprite2==1){
        document.getElementById("sp22").src = "ImagensGui/sprite2_3.png";
        contSprite2++;
    }else if(contSprite2 ==2){
        document.getElementById("sp22").src = "ImagensGui/sprite2_4.png";
        contSprite2=0;

    }
}

function mudarImagemsp3(){
    //mudar sprite 3

   

    
    if(contSprite3==0){
        
        document.getElementById("sp33").src = "ImagensGui/sprite3_2.png";
        contSprite3++;
    }else if(contSprite3==1){
        document.getElementById("sp33").src = "ImagensGui/sprite3_3.png";
        contSprite3++;
    }else if(contSprite3 ==2){
        document.getElementById("sp33").src = "ImagensGui/sprite3_4.png";
        contSprite3=0;

    }
}




