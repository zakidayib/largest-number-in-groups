// Good Luck 💪🏾
 function findLargestNumbers(arr){
    let lagestArr = [];

    for(let i=0; i<arr.length; i++){
        
            lagestArr.push(Math.max(...arr[i]))
        
    }

    return (lagestArr)
}










console.log(findLargestNumbers([[22, 55, 12], [45, 66, 95], [22, 5, 11]]));