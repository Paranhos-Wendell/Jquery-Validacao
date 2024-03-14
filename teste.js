$(function(){
    
    abrijanela();
    fecharjanela();
    
    function abrijanela(){
        $('.btn').click(function(e){
            
            e.stopPropagation();
            $('.bg').fadeIn();
            $('.form').css("background-color", "#d2d2d2" );
        })
    }

    function fecharjanela(){
        var el = $('.close')

        el.click(function(){
            $('.bg').fadeOut();
            
        })
    }

    $('.form').click(function(e){
        e.stopPropagation();
        
    })

    $('form#form').submit(function(e){
        
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();
        
        if(vereficarnome(nome) == false){
            aplicarnome($('input[name=nome]'))
            return false;
        }else if(vereificartel(telefone) == false){
            aplicartel($('input[name=telefone]'))
            return false;
        }else if(vericarEmail(email) == false){
            aplicarEma($('input[name=email]'))
            return false;
        }


        else{
            alert("form deu bom")
        }

    })

    function vereficarnome(nome){
        if(nome == ""){
            return false;
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');

        if(amount >= 2){
            for(var i = 0; i < amount ; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                }else{
                    return false;
                }
            }
        }else{
            return false;
            
        }

    }

    function vereificartel (telefone) {
        if(telefone == ''){
            return false;
        }

        if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
            return false;
        }
    }

    function vericarEmail(email){
        if(email == '')
           return false;

        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.0-9]{1,})$/) == null){
            return false;
        }
    }

    
      


    //funcão de estilo

    function aplicarnome(el){
        el.css('border','2px solid red');
        el.val('Nome Invalido!');
        // el.data('Invalido' , 'true');
        el.css('color', '#fff')
        el.css('background' , 'red')
        el.css('border-radius', '12px')
        el.css('font-size' , '28px')
    }

    function aplicarEma(el) {
        el.css('border' , '2px solid red');
        el.val('E-Mail Invalido!!')
        el.css('color', '#fff')
        el.css('background' , 'red')
        el.css('border-radius', '12px')
        el.css('font-size' , '28px')
      }

    function aplicartel(el){
        el.css('border' , '2px solid red');
        el.val('Telefone Invalido!!')
        el.css('color', '#fff')
        el.css('background' , 'red')
        el.css('border-radius', '12px')
        el.css('font-size' , '28px')
    }

    function resetarcampo(el){
        el.css('border','1px solid black');
        el.val('');
        // el.data('Invalido' , 'true');
        el.css('color','#000')
        el.css('background' , '#fff')
        el.css('border-radius' , '0')
        el.css('font-size' , '14px')
    }

    $('input[type=text]').focus(function(){
        resetarcampo($(this))
    })
})



