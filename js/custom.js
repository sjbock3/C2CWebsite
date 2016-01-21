$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos < 400) {
                    $("#mainpagenavbar").css('height', '75px');
                } else {
                    $("#mainpagenavbar").css('height', '75px');
                }
            });
        });