/*
Write a program to take value N from the user and print the following pattern based on the user input.
array = [2, 3, 5, 2, 1]
>>                        
>>>                
>>>>>
>>                        
>                
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the size of array:")
let i=0;
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
    console.log(">".repeat(array[i]));
    i++;
}