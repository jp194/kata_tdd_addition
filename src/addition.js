function add(str){
    if(str === ""){
        return 0;
    }

    const nums = str.split(/[,\n]+/); // split by comma or semicolon
    
    return nums.reduce((res, num) => {return res + Number(num)}, 0);
}

module.exports = {add};