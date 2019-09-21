function denissosetpisos(){
    let b = 1;
    return function(fuck){

        console.log(b++);
        if (fuck===0) {
            b=1;
        }
    }
};

const vagina= denissosetpisos();

vagina();
vagina();
vagina(0);

vagina();
vagina();