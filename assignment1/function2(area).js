function area(){
    const a =3, b=4, c =5;
    p = (a+b+c)/2;
    S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return S;
}

console.log(area())