let strr="madam";
let bag="";
for (let i=strr.length-1; i>=0; i--)
{
    bag+=strr[i];
}

if (bag==strr)
{
    console.log("This is a Palindrome.");
}
else
{
    console.log("This is not a Palindrome.")
}