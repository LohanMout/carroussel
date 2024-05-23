(function(){
    let carroussel = document.querySelector('.carroussel');
    let btn = document.querySelector('.btn__ouvrir');
    let carroussel__x = document.querySelector('.carroussel__x');
    let galerie = document.querySelector('.galerie');
    let carrousselFigure = document.querySelector('.carroussel__figure')
    let galerieImg = galerie.querySelectorAll('img')
    let carrousselForm = document.querySelector('.carroussel__form')
    let index = 0;
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    //carrousselImg.src = galerieImg.src;
    //carrousselFigure.appendChild(carrousselImg)

    for(const elm of galerieImg){
        console.log(elm.src);
        creerCarrousselImg(index,elm);
        creerRadioImg(index);
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
        carrousselRadio.name = 'radio';
        carrousselRadio.dataset.index = index;
        carrousselRadio.classList.add('carroussel__radio');
        carrousselForm.appendChild(carrousselRadio);
        carrousselRadio.addEventListener('mousedown', function(e){
            document.querySelectorAll('.carroussel__img').forEach(el =>
                {
                el.style.opacity = 0;
                })
            carrousselFigure.children[e.target.dataset.index].style.opacity = 1;
            });
    }

    btn.addEventListener('mousedown', ouvrirGallerie);
    carroussel__x.addEventListener('mousedown', fermerGalerie);

    function ouvrirGallerie(){
        carroussel.classList.add("carroussel--ouvrir");
        disableScroll();
        document.body.style.overflow = 'hidden';
        console.log("ouvrir");
    }

    function fermerGalerie(){
        carroussel.classList.remove("carroussel--ouvrir");
        console.log("fermer");
        document.body.style.overflow = 'scroll';
        enableScroll();
    }

    // call this to Disable
    function disableScroll() {
     window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
     window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
     window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
     window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
})()