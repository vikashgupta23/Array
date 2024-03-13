/*
Write a program to create an array of natural numbers till 20 and print it.
*/
const input=require("readline-sync")
let L=input.questionInt("Enter the size of array:")
let i=0;
let array=[]
while(i<L)
{
    array[i]=i+1;
    i++;
}
i=0;
while(i<L)
{
    console.log(array[i]);
    i++;
}