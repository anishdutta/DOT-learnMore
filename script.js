var x =0;
$(window).scroll( function(){
        if(x>30){
        $(".dash-img").hide( "fold", {horizFirst: true }, 3500 );
        }
        else{
                x+=1;
        }
        
    }) ;
   