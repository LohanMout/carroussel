(function(){
    let carroussel = document.querySelector('.carroussel');
    let btn = document.querySelector('.btn__ouvrir');
    let carroussel__x = document.querySelector('.carroussel__x');
    let galerie = document.querySelector('.galerie');
    let carrousselFigure = document.querySelector('.carroussel__figure')
    let galerieImg = galerie.querySelectorAll('img')
    let index = 0;

    //carrousselImg.src = galerieImg.src;
    //carrousselFigure.appendChild(carrousselImg)

    for(const elm of galerieImg){
        console.log(elm.src);
        creerCarrousselImg(index,elm);
        index = index + 1;
    }

    /**
     * @param {*} index
     * @param elm
     */

    function creerCarrousselImg(index,elm){
        let carrousselImg = document.createElement('img');
        carrousselImg.classList.add('carroussel__img');
        carrousselImg.src = elm.src;
        carrousselImg.dataset.index = index;
        carrousselFigure.appendChild(carrousselImg);
    }

    /** 
     * @param {*} index 
     */

    function creerRadioImg(index){
        let carrousselRadio = document.createElement('input');
        carrousselRadio.type = 'radio';
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