//Page load compete
window.onload = function() {
    //Hide preloader on page load complete
    if(typeof delayedPreloader !== 'undefined') {
        var preloaderTimer = 2000;
    } else {
        var preloaderTimer = 300;
    }
    console.log(preloaderTimer);
    setTimeout(function () {
        $(".outer").hide();
    }, preloaderTimer);

    $("#hamburger").click(function() {
        $(".hamburger-menu").toggleClass("width-250px");
        $(".hamburger-menu ul li a").toggleClass("text-menu");
    });

    //Skip to content
    var header = document.getElementById("header");
    $("#skip").click(function() {
        header.scrollIntoView({ behavior: "smooth" });
    });

    //Page Font Size
    $("#A-").click(function() {
        $("html").css("font-size", "85%");
        $("*").removeClass('activeAAA');
        $(this).addClass('activeAAA');
    });
    $("#A").click(function() {
        $("html").css("font-size", "100%");
        $("*").removeClass('activeAAA');
        $(this).addClass('activeAAA');
    });
    $("#A+").click(function() {
        $("html").css("font-size", "115%");
        $("*").removeClass('activeAAA');
        $(this).addClass('activeAAA');
    });

    //Page colour scheme
    $(".webacc-view").click(function() {
        $("body").removeClass('themeA');
        $("body").addClass('themeB');
        $(".default-view").removeClass('active-view');
        $(this).addClass('active-view');
        $("svg g").css("fill", "rgb(255, 255, 255)");
    });
    $(".default-view").click(function() {
        $("body").removeClass('themeB');
        $("body").addClass('themeA');
        $(".webacc-view").removeClass('active-view');
        $(this).addClass('active-view');
        $("svg g").css("fill", "rgb(151, 20, 77)");
    });

    //Footer best view
    $("#prefooteraction2, #popup_0").click(function() {
        $(".best-view").toggleClass("hide");
    });

    //Button ripple
    var addRippleEffect = function(e) {
        var target = e.target;
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector('.ripple');
        if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.height = ripple.style.width = 200 + 'px';
            target.appendChild(ripple);
        }
        ripple.classList.remove('show');
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
        var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';
        ripple.classList.add('show');
        return false;
    };
    const buttons = document.getElementsByClassName("mat-primary");
    for (const button of buttons) {
        button.addEventListener("click", addRippleEffect);
    }
};