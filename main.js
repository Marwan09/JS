const div_pas=document.getElementById('div_pas')
const input_id = document.getElementById('input_id')
// input_id.style.backgroundColor="red";
const hide_show=document.getElementById('hide_show');
hide_show.onclick=function(){
    if(input_id.type==="password"){
        input_id.type="text"
    }else input_id.type="password"
    
}

  ///////////////////////////////checkBox
const div_pas1=document.getElementById('div_pas1')
const input_id1 = document.getElementById('input_id1')
const hide_show1=document.getElementById('hide_show1');


hide_show1.onclick=function(){
  
  if( hide_show1.checked===true){
    document.body.style.backgroundColor="red"
    input_id1.type='text'
   }else  {document.body.style.backgroundColor="green";
   input_id1.type='PASSWORD'

}


