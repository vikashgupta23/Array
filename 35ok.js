/*
Write a program to reverse the array and print the reversed array.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
90
71
33
46
25
32
45
23
*/
const input=require("readline-sync")
let L=input.questionInt("Enter the size of array:")
let i=0;
let array=[]
while(i<L)
{
    let b=input.questionInt("Enter the value:")
    array[i]=b;
    i++;
}
i=L-1;
while(i>=0)
{
    console.log(array[i]);
    i--;;
}