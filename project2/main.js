      
      $(document).ready(function(){
        $('.slide').bxSlider({
          moveSlides:1,
          pager: false,
          maxSlides:4,
          slideMargin:20,
          slideWidth:300,
          touchEnabled : false,
          captions:true,
        });
        
        $('summary').hover(function(){
          $(this).addClass('reverse');
        }, function(){
          $(this).removeClass('reverse');
        });
      });
      function toggle(obj){
        switch(obj.name){
          case 'seoul':
            document.getElementById('seoul1').click();
            break;
          case 'incheon':
            document.getElementById('incheon1').click();
            break;
          case 'gangwon':
            document.getElementById('gangwon1').click();
            break;
          case 'busan':
            document.getElementById('busan1').click();
            break;
          case 'daegu':
            document.getElementById('daegu1').click();
            break;
          case 'gwangju':
            document.getElementById('gwangju1').click();
            break;
          case 'daejeon':
            document.getElementById('daejeon1').click();
            break;  
          case 'ulsan':
            document.getElementById('ulsan1').click();
            break;  
        }
      }
      function myclick(obj){
        var first = obj.childNodes;
        console.log(first[1].click());
      }