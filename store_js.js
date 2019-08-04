function createTable(){
    $.ajax({
        url: "store_php.php",
        success: function(data){
            let $json = $.parseJSON( data );
            for(let $i = 0; $i < $json['store_url'].length; $i++){
                let $productElem = $('<div>',{
                    class: 'product'
                });
                $productElem.appendTo('#store');
                let $divImg = $('<div>',{
                    class: 'img'
                });
                $divImg.appendTo($productElem);
                let $divText = $('<div>',{
                    class: 'text',
                    text: $json['store_name'][$i]
                });
                $divText.appendTo($productElem);
                let $divPriceAndLikes = $('<div>',{
                    class: 'price_and_likes'
                });
                $divPriceAndLikes.appendTo($productElem);
                let $img = $('<img>',{
                    src: $json['store_url'][$i]
                });
                $img.appendTo($divImg);
                let $price = $('<div>',{
                    class: 'price',
                    text: $json['store_price'][$i]
                });
                $price.appendTo($divPriceAndLikes);
                let $likes = $('<div>',{
                    class: 'likes',
                    text: $json['store_quantity_likes'][$i]
                });
                $likes.appendTo($divPriceAndLikes);
                let $buttonForLncLikes = $('<input>',{
                    class: "inc_button",
                    value: 'Like it',
                    type: 'submit',
                    name: 'comp_' + ( $i + 1 )
                });
                $buttonForLncLikes.appendTo($divPriceAndLikes);
                $buttonForLncLikes.on('click',returnNumber);
            }
        }
    })
};
createTable();
function returnNumber(){
    $('.inc_button').each(function(ind){
        if(event.target == $('.inc_button')[ind]){
            incLikes(ind,event.target.name);
        }
    });
};
function incHTMLLikes(ind,name,date){
    if(!(date == 'Вы уже лайкали!')){
        let $num = $('.likes:eq(' + ind + ')').text()
        $('.likes:eq(' + ind + ')').text(eval($num) + 1);
    } else {
        alert(date);
    }
};
function incLikes(ind,name){
    $.ajax({
        url: 'store_inc_likes.php',
        type: 'POST',
        data: {'id':ind,'name':name},
        success: function(data) {
            incHTMLLikes(ind,name,data);
        }
    })
};