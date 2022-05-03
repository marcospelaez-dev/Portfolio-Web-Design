//Função para abrir e fechar menu mobile
function menutoggle(){
    let menubt = document.getElementById('menu-mobile');
    let items = document.getElementById('items-menu');
    if( items.classList.contains('menu-items')){
        items.classList.remove('menu-items');
        items.classList.add('menu-aberto');
    }else{
        items.classList.remove('menu-aberto');
        items.classList.add('menu-items');
    }

}