let grade = prompt("Your grade :");

if (grade === null || grade.trim() === '' || grade === '' || isNaN(grade)){
    alert("Please recheck youe grade")
}else{
    if( grade >= 80){
        alert("grade A")
    }else if( grade >=70 && grade <= 79){
        alert("grade B")
    }
    else if( grade >=60 && grade <= 69){
        alert("grade C")
    }
    else if( grade >=50 && grade <= 59){
        alert("grade D")
    }
    else{
        alert("grade F")
    }
}