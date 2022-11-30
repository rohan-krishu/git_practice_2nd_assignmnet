let strr="madam";
let temp="";
for (let i=strr.length; i>0; i--)
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