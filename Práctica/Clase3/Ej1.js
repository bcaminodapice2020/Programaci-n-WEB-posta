function mayor (a,b,c){
    if (a>b && a>c){
        return a
    }else{
        if (b>a && b>c){
            return b
        }else{
            return c
        }
    }    
}

console.log(mayor(24,12,25))
