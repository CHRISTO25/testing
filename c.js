let string = ''
for ( var i = 1; i <= 4; i++) {
    for(var  j=1;j<=7;j++)
    {
        if (i==j || j==8-i  || j==6-i && j>=i || j==4-i && j>=i) {
            
                string +="*"   
        } else {
           string +=" "
        }
    }
    string +="\n"
}

console.log(string);