document.getElementById('next').onclick = function(){
    const widthItem=document.querySelector('.item').offsetWidth;
    document.getElementById('fromList').scrollLeft +=widthItem;
}
document.getElementById('prev').onclick=function(){
    const widthItem=document.querySelector('.item').offsetWidth;
    document.getElementById('fromList').scrollLeft -=widthItem;
}


