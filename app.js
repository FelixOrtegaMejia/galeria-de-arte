let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let categories = this.getAttribute('category');
        for( let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.add('hide');
            itemBox[k].classList.remove('active');

            if(itemBox[k].getAttribute('data-item') == categories ||
            categories == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}