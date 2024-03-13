/*
Write a program to print the sum of all the odd numbers and even numbers in the given array.
Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
197
168
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the size of array:")
let i=0;
let even=0;
let odd=0;
let array=[]
while(i<n)
{
    let b=input.questionInt("Enter the value:")
    array[i]=b;
    i++;
}
i=0;
while(i<n)
{
    if(array[i]%2==0)
    {
        even+=array[i];
    }
    else
    {
        odd+=array[i];
    }
    i++;
}
console.log("Sum of even number:",even);
console.log("Sum of odd number",odd);