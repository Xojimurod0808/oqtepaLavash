const elList = document.querySelector("#list");
let elModal = document.querySelector(".modal");
let modalBtn = document.querySelector(".modal__btn");
let modalPrace = document.querySelector(".modal-prace");
const elKorzinka = document.querySelector('.cards__button');
const elKorzinkaModal = document.querySelector('.modal-2');
const elYopuv = document.querySelector('.modal-x');
const elPriceKorzinka = document.querySelector('.modal-prace')
const elTotalPrice = document.querySelector('#total-prace')
const elRegistratsiyaBtn = document.querySelector('.nav__btn')
const elRegistratsiyaModal = document.querySelector('.registratsiya-modal')
const elRegistratsiyaX = document.querySelector('.registratsiya-btn')
const modalwrad = document.querySelector('#modal-wrodded');

function render(oqtepa, element) {
    
    element.innerHTML = null
    oqtepa.forEach(fast => {
        
        // ----------------- createElement ----------------------
        let elListItem = document.createElement("li");
        let elImg = document.createElement("img");
        let elTitle = document.createElement("h2");
        let elOverview = document.createElement("p");
        let elPrice = document.createElement("h4");
        let elBtn = document.createElement("button");
        
        // ---------------------- class---------------------------
        elListItem.className = "list-item";
        elImg.className = "list-img";
        elTitle.className = "list-title";
        elOverview.className = "list-overview";
        elPrice.className = "list-price";
        elBtn.className = "list-btn"
        
        
        
        elImg.setAttribute('src', fast.poster);
        elImg.setAttribute("width",  "90%");
        elImg.setAttribute("height", "65%");
        elTitle.textContent = fast.title;
        elOverview.textContent = fast.overview;
        elPrice.textContent = `${fast.price}  сум`;
        elBtn.textContent = "Выбрать";
        elBtn.dataset.uuid = fast.id;
        
        //-----------------------appendChild-----------------------------
        elListItem.appendChild(elImg)
        elListItem.appendChild(elTitle)
        elListItem.appendChild(elOverview)
        elListItem.appendChild(elPrice)
        elListItem.appendChild(elBtn)
        elList.appendChild(elListItem);
        
        elBtn.addEventListener("click", (evn) =>{
            
            let filmID = evn.target.dataset.uuid
            let x = oqtepa.find((e) => filmID == e.id)
            let elText = document.querySelector(".text")
            let modalTitle = document.querySelector(".modal-title")
            let modalImg = document.querySelector(".modal__img")
            let modalBtn2 = document.querySelector(".modal__btn2")
            let totalPrase = document.querySelector("#total__price")
            let totalItem = document.querySelector("#total__item")


            modalPrace.textContent = `${x.price}  сум`
   
            modalImg.setAttribute("src",  x.poster)
            modalTitle.textContent = x.title;
            elText.textContent = x.overview;
            add.addEventListener("click", () =>{
                count.textContent++
                let fasId = evn.target.dataset.uuid
                let x = oqtepa.find((e) => fasId == e.id)
                let c = modalPrace.textContent = `${Number(x.price) * Number(count.textContent)}  сум`
                modalBtn2.addEventListener("click", () => {
                    totalPrase.textContent = c
                    totalItem.textContent = count.textContent + " " +"шт"
                })
            })
            let count = document.querySelector("#span")
            remove.addEventListener("click", () =>{
                if(count.textContent > 1){
                    count.textContent --
                    let fasId = evn.target.dataset.uuid
                    let x = oqtepa.find((e) => fasId == e.id)
                    modalPrace.textContent = `${Number(x.price) * Number(count.textContent)}  сум`
                }
            })
            elModal.classList.add("modal--active")
        })
        modalBtn.addEventListener("click", () =>{
            elModal.classList.remove("modal--active")
        })
    });
}
elKorzinka.addEventListener('click', function() {

    if(elKorzinka) {
        elKorzinkaModal.style.display = 'flex';
        elKorzinkaModal.classList.add('transition')
        modalwrad.classList.add("actives")
    }
})
elYopuv.addEventListener('click', function() {

    if(elYopuv) {
        elKorzinkaModal.style.display = 'none';
    }
})
elRegistratsiyaBtn.addEventListener('click', function() {

    if(elRegistratsiyaBtn) {
        elRegistratsiyaModal.style.display = 'flex';
    }
})
elRegistratsiyaX.addEventListener('click', function() {

    if(elRegistratsiyaBtn) {
        elRegistratsiyaModal.style.display = 'none';
    }
})

render(oqTepaLAvash, elList)
