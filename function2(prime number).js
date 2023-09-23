function test_prime(n){
    for(var k=2; k<n;k++){
        if(n%k==0){
            return false;
        }
    }
    return true;
}

function all_prime(a,b){
    var arr=[];
    var a=100, b=200;
    for(var i = a;i<b+1;i++){
        if(test_prime(i)){
            arr.push(i)
        }
    }
    return arr;
}
console.log(all_prime())