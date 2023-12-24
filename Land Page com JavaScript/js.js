let iconMenu = document.querySelectorAll('#qqw');
    iconMenu[0].addEventListener('click', ()=>{
        let qwe = document.getElementById('qwe');
        if(qwe.classList.contains('hide')){
        qwe.classList.add('show');
        qwe.classList.remove('hide');
        }else{
        qwe.classList.add('hide');
        qwe.classList.remove('show');
        }
    });
