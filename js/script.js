    let cancelBtn = document.getElementById("cancel");
    let menuBtn = document.getElementById("ham");
    let menulist = document.querySelector("ul");


    function showMenu() {
        menulist.style.top = "0px";
    }
    function hideMenu() {
        menulist.style.top = "-1400px";
    }

    ScrollReveal({ reset: true });

    const sr = ScrollReveal(
        {
            distance: "40px",
            duration: 1500,
            reset: true
        }
    )

    ScrollReveal().reveal('.heading', { delay: 0, origin: 'right' });
    ScrollReveal().reveal('.container', { origin: 'left' });
    ScrollReveal().reveal('hr', { origin: 'left' });



    // // homesection============================
    // ScrollReveal().reveal('.avtar ', { origin: 'bottom' });
    // ScrollReveal().reveal('.h4,.h3', { delay: 300, origin: 'right' });
    // ScrollReveal().reveal('.h1,.btn', { delay: 300, origin: 'left' });

    // About-section============================

    ScrollReveal().reveal('.img-container', { delay: 100, origin: 'bottom' });
    ScrollReveal().reveal('.p1,.h3,.cv', { delay: 300, origin: 'right', interval: 200 });
    ScrollReveal().reveal('.theme-list', { delay: 350, origin: 'left' });

    // skill-section============================
    ScrollReveal().reveal('.column-2', { delay: 100, origin: 'bottom' });
    ScrollReveal().reveal('.column-1', { delay: 100, origin: 'top' });


    // Education-section============================
    ScrollReveal().reveal('.top', { delay: 300, origin: 'right', });
    ScrollReveal().reveal('.text,.top-heading', { delay: 350, origin: 'left' });

    // contact-section============================
    ScrollReveal().reveal('.detail', { delay: 350, origin: 'left', interval: 200 });
    ScrollReveal().reveal('.element', { delay: 300, origin: 'right', interval: 200 });

    // footer-section============================
    const srv = ScrollReveal(
        {
            // origin: "top",
            distance: "50px",
            duration: 2000,
            // delay:00,
            reset: true
        }
    )

    srv.reveal('.fa-brands', { delay: 200, origin: 'bottom', interval: 200 });
    srv.reveal('.list-item-2 ', { delay: 400, origin: 'bottom', interval: 200 });
    srv.reveal('.copyright', { delay: 750, origin: 'left' });
