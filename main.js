
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll () {
    showNavOnScroll();
    showBackToTopButtonOnScroll ();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);

}

function activateMenuAtCurrentSection (section) {
    const targetLine = scrollY + innerHeight / 2;

    // Verificar se a seção passou da linha
    // quais dados serão usados?

    //o top da seção
    const sectionTop = section.offsetTop;
    
    //a atura da seção 
    const sectionHeight = section.offsetHeight;

    //O topo da seção chegou ou ultrapssou a linha alvo
    const sectionTopReachOrTargetLine = targetLine >= sectionTop; 

    //Verificar se o final da seção está abaixo da linha algo;

    //Onde a seção termina?
    const sectionEndsAt = sectionTop + sectionHeight;

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // limites da seção
    const sectionBoundaries = sectionTopReachOrTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }else{
        menuElement.classList.remove('active');
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');

    }
}

function showBackToTopButtonOnScroll () {
    if (scrollY > 450) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');

    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .infos,
    #services header,
    #services .card,
    #about header,
    #about .content,
    #about img
    `);
