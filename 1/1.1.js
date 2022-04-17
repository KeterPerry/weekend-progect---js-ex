

function yesOrNo (boolean) {         ///checked

    if (boolean===true)
    return 'yes';

    else
    return 'No';
    
}

function lowestSum (arr){

 
 
function lowestSum (arr){              ////checked

    let min1=arr[0];
    let min2=arr[0];

    for(let i=1; i<arr.length; i++){
       if (arr[i]<min1)
        min1=arr[i]; 
    }  
    

    for(let j=1; j<arr.length; j++){
       if (arr[j]>min1 && arr[j]<min2)
             min2=arr[j]; 
    }

    return min1+min2;
}

 

///////////////////////////////



    function convertToInt(arr){     ///checked

        let binary = arr.join('');
    
        binary = parseInt(binary, 2);
        
        return binary;
    }

///////////////////////////////




function findNextSquare(n)   {                 //checked

    if (isInteger(Math.sqrt(n))===false)
        return -1;     

    
    else
   { 
    let result = Math.sqrt(n); 
    return Math.pow(result+1,2);
   
    }

}

function isInteger(n){
    //assuming n positive 

    while (n>0){
        n=n-1;
    }
        if (n===0)
            return true;
        
            else 
            return false;
}




    
// /////////////////////////////

function unique ( arr)     ///checked assuming there is a unique num

{
     for (let i=0; i<arr.length; i++){
         if (arr[i]!== arr[i+1])
                { 
                    if ( arr[i]=== arr[i+2])
                           return arr[i+1];

                    if (arr[i+1] ===arr[i+2])
                         return arr[i];     

                }
                   
     }  
}




//////////////////////////////////////////////



function summation (n){    ////////////////////checked
    let summation=0;

    for (let i=0; i<=n; i++){

          summation+= i;     
    }

    console.log(summation);
}


/////////////////////////////////////////////

function centuryFromYear(year){    ////checked

let year= year/100;
console.log(Math.ceil(num));

    
}


////////////////////////////////////


function basicOp (operator, x, y) {   ////////////////////checked

    if (operator=== '+')
         return x+y;

    else if (operator=== '-')
         return x-y;
    else if (operator=== '*')
         return x*y;
    else (operator=== '/' )
         return x/y;

}


///////////////////////////////////////////////////
function nb_year(p0, percentage, aug, p) {    //assuming aug is positive or negative(in case of a leave)//checked
    let num_year=0;
    let new_percentage = percentage/100;
    let py=p0;

    while ( py <p){

       py =py +(py* new_percentage) + aug;
        num_year++;
    }


return num_year;

}

////////////////////////////////////////////////////

function NumOfPeople (array){          //checked

    let sumOFPeople = 0;
    let result =0;
    // console.log (sumOFPeople);
    
    
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array[i].length-1; j++)
       
        {    
           
             result= (array[i][j] - array[i][j+1]);
          
             
        }
      
       
        sumOFPeople = sumOFPeople +(result);
       
    }
      return sumOFPeople;
    
    }
             


///////////////////////////////////////

function Fibbonatci (n) {                    /////supposed to work

    if (n===0 || n===1)
    return 1;

    else 
    
    return Fibbonatci(n-1) + Fibbonatci(n-2);   
   

}

//////////////////////////////////////////

function Tribbonatci (n) {

    if (n<=2)
    return 1;

    else 
    return Fibbonatci(n-1) + Fibbonatci(n-2) + Fibbonatci(n-3); /////check   /////check
}
///////////////////////////////////////////////////////////////////////////
function trimmingStr (str) {          ///checked

    let arr = str.split("");
    var trimmedStr = arr.slice(1, -1).join("");
    return trimmedStr;

}



/////////////////////////////////////////////////////////////

function repeatStr(n, str){  ///checked

    let repeatStr=" ";
    let count=0;

    while ( count <n )
    { 

        repeatStr+=str;
        count++;

    }
    return repeatStr;

} 
////////////////////////////////////////////////////////////////////////

function toCamelCase(str){                  //checked

    let newstr = " ";
  
  for (let i=0; i<str.length; i++)
      {
        
        if (str[i]!== "-" && str[i]!== "_")
        {
          newstr += str[i];
        }

         else if (str[i]=== "-" || str[i]=== "_" )
         {
          newstr += str[i+1].toUpperCase();
          i++;

         }
  
      }
  
       return newstr;
  
  }

/////////////////////////////////////////////


function toWeirdCase( str ){     //checked
    let newstr=" ";
    
    for (let i=0; i<str.length; i++)
    {
     if (i%2===0)
      newstr +=str[i].toUpperCase();

    else 
     newstr +=str[i].toLowerCase();
       
     }

     return newstr; 
 

 /////////////////////////////////////////////


 function abbreviations (str ){     /////checked
    let arr= str.toUpperCase().split(" ")
    let j=0;
    console.log(arr);

   
   for (let i=0; i<arr.length-1; i++)
   

   {
       console.log (arr[i][j] + "." + arr[i+1][j]);

   }
       

}

//////////////////////////////////////////////



function maskify(str){                          /////checked


    const copy= str.split("");
    
    
    for (let i=0 ; i<copy.length-4; i++){
          
        copy[i]='#';

    
    }

    let str1= copy.join("");
    
    console.log(str1);

    
}

////////////////////////////////

function shortestWord ( str){                          ///checked
    let arr=str.split(" ");

    let mincount= arr[0].length;

    for(let i=0; i<arr.length; i++){
        

        if (arr[i].length< mincount)
          
           mincount=arr[i].length;
    }

    for(let j=0; j<arr.length; j++){
         if (mincount ===arr[j].length)
         console.log (arr[j]);
}

}
////////////////////////////////
 
function accum(str)              ////checked
{
    let newStr="";
    let j=0;

    for (let i=0 ; i<str.length; i++)
    {
        newStr += str[i].toUpperCase();
        
         
        if (i!==0){

                while(j<i)
                      {
                        newStr +=str[i];
                        j++;

                      }
                 
                    }

                    if (i!==str.length-1) 
                     {newStr+= "-";}
                    j=0;
                    
    }

    console.log(newStr);
}

//////////////////////////////////////////

function duplicatesCount (str) {    ////////////assuming there are no spaces inbetween  /checked

    let newstr= str.toLowerCase();
    const obj={};
    let flag=true;

         for (let i=0; i<newstr.length; i++) 
         {
              if  (obj[newstr[i]])
              obj[newstr[i]]+=1;

               else
                obj[newstr[i]]=1;  
               
        
         }
         


         let arr= Object.values(obj);
         for (let j=0; j<arr.length; j++){
             if (arr[j]>1)
             flag=false;
         }

         if (flag===false)
         return obj;

         else 
         return "Threre are no duplicates found";

        }


////////////////////////////////////////


function longest(str1, str2){             ///checked

    let newstr= str1.concat('', str2).toLowerCase();
    
    let orginaized="";

   for(let i=97; i<122; i++){

    for(let j=0; j<newstr.length; j++){

    

    if( String.fromCharCode(i)=== newstr[j])
    {
        orginaized+= newstr[j];
        break;

    }


   }

}
return orginaized;
}



///////////////////////////////////////
function isogram(str)                ///checked
{
let flag=false;


   for (let i = 0; i < str.length; i++){
       for (let j = i+1; j < str.length; j++){

        if( str[i]===str[j]){
            flag=true;
            break;
        }

       }
      
   }
   return flag;
}





