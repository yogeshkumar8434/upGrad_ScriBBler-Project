function addcmt(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('commentBox');
    document.getElementById('comments-wrapper').innerHTML += '<p>'+addEventName+'</p>';          
    a.value=a.defaultValue;
}


var counter = 0;
function LikeButton(){
    document.getElementById('liked').innerHTML="Liked!";
    counter++;
    document.getElementById('likeText').innerHTML = counter+" people have like this!"
}