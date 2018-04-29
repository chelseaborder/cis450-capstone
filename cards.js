$(document).ready(function() {

    var content = $('.content');
    var currentItem = content.filter('.active');
    var steps = $('.card').filter('.steps');
    var inactive1 = $('.inactive-1');
    var inactive2 = $('.inactive-2');
    var inactive3 = $('.inactive-3');

    $('.btn').click(function() {
        var nextItem = currentItem.next();
        var lastItem = content.last();
        var contentFirst = content.first();
        var contentItemPlace = content.siblings();

        var contentSecond =  contentItemPlace.eq(1);
        var contentThird = contentItemPlace.eq(2);
        var contentFourth = contentItemPlace.eq(3);
        var contentFifth = contentItemPlace.eq(4);
        var contentSixth = contentItemPlace.eq(5);
        var contentSeventh = contentItemPlace.eq(6);
        var contentEigth = contentItemPlace.eq(7);


        for (var i = 1; i < contentItemPlace.length-1; i++) {
          var itemList = [];
          var items = contentItemPlace.eq(i);

          itemList.push(items);
        }

        currentItem.removeClass('active');

        if (currentItem.is(lastItem)) {
            currentItem = contentFirst.addClass('active');
            currentItem.css({'right': '10%', 'opacity': '1'});
            $('.step').animate({width: '10%'});
            inactive1.animate({height: '8px', marginLeft:'30px', marginRight:'30px'}, 100);
            inactive2.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive3.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);


        } else if (currentItem.is(contentFirst)) {
            currentItem.animate({opacity: 0}, 2000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '20%'});
            inactive3.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else if (currentItem.is(contentSecond)) {
            currentItem.animate({opacity: 0}, 2000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '30%'});
            inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else if (currentItem.is(contentThird)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '40%'});
            inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else if (currentItem.is(contentFourth)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '50%'});

        } else if (currentItem.is(contentFifth)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '60%'});

        } else if (currentItem.is(contentSixth)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '70%'});

        } else if (currentItem.is(contentSeventh)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '80%'});

        } else if (currentItem.is(contentEigth)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '90%'});
        }

        else {
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '100%'});
        }
    });

});
