/*
Write a program to take size of array, array and target as input from the user 
and check whether the target exists in this array or not.

Test Case1:
Input:
7
1 2 3 4 5 6 7
3
Output:
Yes

Test Case2:
Input:
8
Output:
No
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the size of array:")
let k=input.questionInt("Enter the target number:")
let i=0;
let c=0;
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
    if(array[i]==k)
    {
        c+=1;
    }
    i++;
}
if(c==1)
{
    console.log("Yes");
}
else
{
    console.log("No");
}