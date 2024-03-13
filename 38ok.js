/*
Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. 
Also, take N as an input from the user.

Test Case 1:
Input:
5
2 4 2 6 3
Output:
2

Test Case 2:
Input:
6
2 4 6 3 3 2
Output:
3 2
*/
const input=require("readline-sync")
let L=input.questionInt("Enter the size of array:")
let i=0;
let s=1;
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
    j=i+1;
    while(j<L)
    {
        if(array[i]==array[j])
        {
            s+=1;
            k=j;
            while(k<L-1)
            {
                array[k]=array[k+1];
                k+=1;
            }
            L=L-1;
        }
        j+=1;
    }
    if(s>1)
    {
        console.log(array[i]);
    }
    i++;
    s=1;
}