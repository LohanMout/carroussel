(function(){
    let carroussel = document.querySelector('.carroussel');
    let btn = document.querySelector('.btn__ouvrir');
    let carroussel__x = document.querySelector('.carroussel__x');
    let galerie = document.querySelector('.galerie');
    let carrousselFigure = document.querySelector('.carroussel__figure')
    let carrousselImg = document.createElement('img');
    let galerieImg = galerie.querySelectorAll('img')
    carrousselImg.classList.add('carroussel__img');
    //carrousselImg.src = galerieImg.src;
    //carrousselFigure.appendChild(carrousselImg)

    for(const elm of galerieImg){
        console.log(elm.src);
    }

    btn.addEventListener('mousedown', ouvrirGallerie);
    carroussel__x.addEventListener('mousedown', fermerGalerie);


    function ouvrirGallerie(){
        carroussel.classList.add("carroussel--ouvrir");
        console.log("ouvrir");
    }

    function fermerGalerie(){
        carroussel.classList.remove("carroussel--ouvrir");
        console.log("fermer");
    }
})()