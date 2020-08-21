function question(){
    $('#current_no').text('1-9');
    $('.hid').hide();
    method1();
}
var x = 0;
function setNumber(){
    x = x + 1;
    a=Math.floor(Math.random() * 50 + 1);
    b=Math.floor(Math.random() * 50 + 5);
    c=Math.floor(Math.random() * 50 + 14);
    d=Math.floor(Math.random() * 50 + 24);
    e=Math.floor(Math.random() * 50 + 35);
    f=Math.floor(Math.random() * 50 + 45);
    g=Math.floor(Math.random() * 50 + 55);
    h=Math.floor(Math.random() * 50 + 65);
    i=Math.floor(Math.random() * 50 + 75);
}
function sol(){
    $('.answers').hide();
    $('.hid').hide();
    $('.hint1').hide();
    $('.solution').click(function(){
        $('.hint1').show();
    });
    $('.ok').click(function(){
        $('.answers').show();
        if(x != 0)
            x = x - 1;
    });
}
function method1(){
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(f);
    $("#option7").text(a+d);
    $("#option8").text(b+e);
    $("#option9").text("?");
    $('.answers').text(c+f);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((c+f)==answer)
            {
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method2, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
}
function method2(){
    $('input').val('');
    $('#current_no').text('2-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a+b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(d+e);
    $("#option7").text(a+d);
    $("#option8").text(i);
    $("#option9").text("?");
    $('.answers').text(a+d+i);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((a+d+i)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method3, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
function method3(){
    $('#current_no').text('3-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a+b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(f);
    $("#option7").text(a+d);
    $("#option8").text("?");
    $("#option9").text(a+b+f);
    $('.answers').text(b+e);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((b+e)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method4, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
}
function method4(){
    $('#current_no').text('4-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a+b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text("?");
    $("#option7").text(a+d);
    $("#option8").text(i);
    $("#option9").text(a+d+i);
    $('.answers').text(d+e);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((d+e)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method5, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
function method5(){
    $('#current_no').text('5-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text("?");
    $("#option5").text(e);
    $("#option6").text(f);
    $("#option7").text(a+d);
    $("#option8").text(b+e);
    $("#option9").text(c+f);
    $('.answers').text(d);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((d)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method6, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
function method6(){
    $('#current_no').text('6-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text("?");
    $("#option3").text(a+b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(d+e);
    $("#option7").text(a+d);
    $("#option8").text(h);
    $("#option9").text(a+d+h);
    $('.answers').text(b);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((b)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method7, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
function method7(){
    $('#current_no').text('7-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text("?");
    $("#option7").text(a+d);
    $("#option8").text(b+e);
    $("#option9").text(c+f);
    $('.answers').text(f);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((f)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method8, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
function method8(){
    $('#current_no').text('8-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a+b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(d+e);
    $("#option7").text("?");
    $("#option8").text(h);
    $("#option9").text(a+d+h);
    $('.answers').text(a+d);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((a+d)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(method9, 1000);
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
function method9(){
    $('#current_no').text('9-9');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text(d);
    $("#option5").text("?");
    $("#option6").text(f);
    $("#option7").text(a+d);
    $("#option8").text(b+e);
    $("#option9").text(c+f);
    $('.answers').text(e);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if((e)==answer)
            {
                $('input').val('');
                $('.hid').hide();
                document.getElementById("pop_up").innerHTML = ("<h1>Level 1 up <br>Move to next level</h1>");
            }
        else
            {
                $('.hid').show();
            }
    });
    
}
/*function method10(){
    $('#current_no').text('10-10');
    document.getElementById("pop_up").innerHTML ='<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a+b);
    $("#option4").text(d);
    $("#option5").text("?");
    $("#option6").text(d+e);
    $("#option7").text(a+d);
    $("#option8").text(h);
    $("#option9").text(a+d+h);
    $('.answers').text(e);
    $("#submit").click(function(){
        var answer=$(".input-ans").val();
        if ((e) == answer)
            {
                $('.enter-ans').hide();
                $('.hint').hide();
                document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
                setTimeout(function(){
                    document.getElementById("pop_up").innerHTML = ("");//("<h1>" + x + "</h1>");
                }, 1000);
                document.getElementById("pop_up").innerHTML = ("<h1>" + x + "</h1>");
            }
        else
            {
                $('.hid').show();
            }
    });
    
}*/
