function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 1. shift value to next position a number of times,loop through shifting  till the loop is over. value of a[0] will be a[1] and a[1] will be in a[2]. 

    for(let i= 0; i < K;i++)
    {
        A.unshift(A.pop());  
    }
    return A  
}