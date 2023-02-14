function computeSum(arr){
    if(arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + computeSum(arr);
    }
}
computeSum[7, 8, 9 , 4];