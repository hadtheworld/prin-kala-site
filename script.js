$('#myDIV').hide();

$('#sgnup').click(function(){
  $('#myDIV').show();
  $('#myDIV2').hide();
  return false;
})
$('#sgnin').click(function(){
  $('#myDIV').hide();
  $('#myDIV2').show();
  return false;
})
class flight{
  func(params) {
    console.log(params)
  }
}
f=new flight();
f.func();

var cart=false;
$('#add').click(function(){
  if(cart){
    cart=false;
  }
  else{
    cart=true;
  }
  if(cart){

    $('#text').fadeIn();
    $('#text').empty();
    $('#text').append("Added To the cart!!");
    setTimeout(function(){
      $('#text').fadeOut();
    },'2000');
  }
  else {
    $('#text').fadeIn();
    $('#text').empty();
    $('#text').append("Removed from the Cart");
    setTimeout(function(){
      $('#text').fadeOut();
    },'2000');
  }
})