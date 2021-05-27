function letter(str){
    var length=0;
    while(str[length]!==undefined){
        if(str[length].match(/[AEIOU]/))
        {
            str[length]="$";
        }
        length++;
    }
    console.log(str);
}
letter("SHOULD I SMASH THE SHELLS");