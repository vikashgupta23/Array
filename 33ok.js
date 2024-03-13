/*
Write a program to print all the numbers from the given array using a loop. 
L = {23, 45, 32, 25, 46,33, 71, 90}

Output:
23
45
32
25
46
33
71
90
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
i=0;
while(i<L)
{
    console.log(array[i]);
    i++;
}