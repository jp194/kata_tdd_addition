function add(str){
    if(str === ""){
        return 0;
    }

    var delimiter = ","
    var new_str = str;

// check for custom delimiter

     if (str.startsWith('//')) {
    const line_change = str.indexOf('\n');
    if (line_change === -1) {
      throw new Error('Please provide valid input - no newline found after custom delimiter declaration');
    }


    delimiter = str.substring(2, line_change);
    new_str = str.substring(line_change + 1);
}


    
    console.log(delimiter);

    const nums = new_str.split(new RegExp(`${escapeRegExp(delimiter)}|\\r?\\n`)); // split by comma or semicolon

    console.log(nums);
    
    return nums.reduce((res, num) => {return res + Number(num)}, 0);
}


function escapeRegExp(str) {
 return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {add};