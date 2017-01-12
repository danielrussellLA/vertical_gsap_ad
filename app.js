document.addEventListener("DOMContentLoaded", function(event) {
    function load(){
        TweenMax.staggerFrom('.kw', 2, {scale: .85,  ease:Elastic.easeOut}, 0.05);
        TweenMax.staggerFrom('.kw', .2, {opacity: 0}, .05);
        // TweenMax.from('kw', 2, {opacity: 0});
        TweenMax.from('h1', .05, {opacity: 0});
        TweenMax.from('p', .05, {opacity: 0});
    }
    load()

    var kw1 = document.getElementById('kw1');
    kw1.addEventListener('mouseover', function(){
        TweenMax.to('#kw1', .2, {scale: 1.1, ease:Back.easeOut});

        TweenMax.to('#kw2', .2, {opacity: .2});
        TweenMax.to('#kw3', .2, {opacity: .2});
        TweenMax.to('#kw4', .2, {opacity: .2});

    });
    kw1.addEventListener('mouseout', function(){
        TweenMax.to('#kw1', .2, {scale: 1, ease:Back.easeOut});

        TweenMax.to('#kw2', .2, {opacity: 1});
        TweenMax.to('#kw3', .2, {opacity: 1});
        TweenMax.to('#kw4', .2, {opacity: 1});
    });

    var kw2 = document.getElementById('kw2');
    kw2.addEventListener('mouseover', function(){
        TweenMax.to('#kw2', .2, {scale: 1.1, ease:Back.easeOut});

        TweenMax.to('#kw1', .2, {opacity: .2});
        TweenMax.to('#kw3', .2, {opacity: .2});
        TweenMax.to('#kw4', .2, {opacity: .2});
    });
    kw2.addEventListener('mouseout', function(){
        TweenMax.to('#kw2', .2, {scale: 1, ease:Back.easeOut});

        TweenMax.to('#kw1', .2, {opacity: 1});
        TweenMax.to('#kw3', .2, {opacity: 1});
        TweenMax.to('#kw4', .2, {opacity: 1});
    });

    var kw3 = document.getElementById('kw3');
    kw3.addEventListener('mouseover', function(){
        TweenMax.to('#kw3', .2, {scale: 1.1, ease:Back.easeOut});

        TweenMax.to('#kw1', .2, {opacity: .2});
        TweenMax.to('#kw2', .2, {opacity: .2});
        TweenMax.to('#kw4', .2, {opacity: .2});
    });
    kw3.addEventListener('mouseout', function(){
        TweenMax.to('#kw3', .2, {scale: 1, ease:Back.easeOut});

        TweenMax.to('#kw1', .2, {opacity: 1});
        TweenMax.to('#kw2', .2, {opacity: 1});
        TweenMax.to('#kw4', .2, {opacity: 1});
    });

    var kw4 = document.getElementById('kw4');
    kw4.addEventListener('mouseover', function(){
        TweenMax.to('#kw4', .2, {scale: 1.1, ease:Back.easeOut});

        TweenMax.to('#kw1', .2, {opacity: .2});
        TweenMax.to('#kw2', .2, {opacity: .2});
        TweenMax.to('#kw3', .2, {opacity: .2});
    });
    kw4.addEventListener('mouseout', function(){
        TweenMax.to('#kw4', .2, {scale: 1, ease:Back.easeOut});

        TweenMax.to('#kw1', .2, {opacity: 1});
        TweenMax.to('#kw2', .2, {opacity: 1});
        TweenMax.to('#kw3', .2, {opacity: 1});
    });

    // kw1.addEventListener('click', function(){
    //     TweenMax.to('#kw1', 1, {height: 50, width: 50, borderRadius: 50, backgroundPosition: 'left'})
    //     TweenMax.to('h1', 1, {opacity: 0})
    //     TweenMax.to('p', 1, {opacity: 0})
    //     setTimeout(function(){
    //         load();
    //     }, 1000)
    // })
});
