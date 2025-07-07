let count = 0;

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function checkCountValue(){
    if(count===10){
        alert("your account gained 10 followers!  Congratulations");

    }else if (count === 20){
        alert("Your account gained 20 followers! Keep it up")
    }
}
function resetCount(){
    count=0;
    alert("Your follower count has benn reset");
    displayCount();
    
}

