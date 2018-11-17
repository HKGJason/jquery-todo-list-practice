$(document)
    .ready(function () {
        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
       $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append("<li><input type='checkbox'" +  " class='todo-item-done'"+ 
                         " value='" + toAdd + "' /> " +  toAdd + "</li>");
            });
       
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
$(document).on('dblclick', 'li', function () {
            $(this)
                .children('span')
                .attr('contentEditable', 'true')
                .focus()
   });
     

      $('ol').sortable();  
      $(document).on('click', ".todo-item-done", completeTodoItem);
       function completeTodoItem() {  
         $(this).parent().toggleClass("strike");
      }
      
    }
      

);

