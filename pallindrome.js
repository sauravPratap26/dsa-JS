const pallindrome= (num)=>{
    if(num<0){
        return false;
    }
    const stringNum = String(num)
    return stringNum===stringNum.split("").reverse().join("")
}

console.log(pallindrome(1012))