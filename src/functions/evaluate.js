
export const evaluate = (line)=>{
 //used for indexing in below variable, md = mult/div, as = add/sub
  let iMD = 0, iAS=0;
  //format of [[val,multOrDevOp, val...], addOrSubOpp, [val,multOrDevOp, val...], ...]
  let extractByOperator = [[""]];
  //error checking, doubledot or double op or start with operator or ends with operator
  let checkErr = /\.{2}|[-+*/]{2}|^[-+*/]|[-+*/]$|\.$|\.[-+*/]/;
  if(checkErr.test(line)){
    return "error";
  }

  //if input was just a number
  if(!/[-+*/]/.test(line)){
    return parseFloat(line);
  }

  //otherwise go character by charcter to form extractByOperator
  line = line.split("");
  for(let i=0; i<line.length; i++){
    if(line[i]==="*"||line[i]==="/"){
      extractByOperator[iAS][iMD+1]=line[i];
      iMD+=2; //move over 2 [val,op,val(here)]
      extractByOperator[iAS][iMD]="";
    }else if(line[i]==="+"||line[i]==="-"){
      extractByOperator[iAS+1]=line[i];
      iAS+=2;//move over 2
      iMD=0;//reset for new inner array
      extractByOperator[iAS]=[""];
    }else{
      extractByOperator[iAS][iMD]+=line[i];
    }
  }
  //calculates left to right
  for(let i = 0; i<extractByOperator.length; i+=2){//add or sub
    extractByOperator[i]=calculateArray(extractByOperator[i]);
  }
  return calculateArray(extractByOperator);
};//end evalulate

//received array in format [val, op, val, op, val...] and returns single number
const calculateArray = (arr)=>{
  let lhs, rhs, operator;
  do{//mult or div calculations
    if(arr.length === 1){//if no mult of divide
      arr=arr[0];
      break;
    }else if(arr.length === 3){
      lhs = parseFloat(arr.shift());
      operator = arr.shift();
      rhs = parseFloat(arr.shift());
      arr = applyOperator(lhs,operator,rhs);
      break;
    }else{//length>3 (at least 5)
      lhs = parseFloat(arr.shift());
      operator = arr.shift();
      rhs = parseFloat(arr[0]);
      arr[0] = applyOperator(lhs,operator,rhs);//this will be a number now, but OK
    }
  }while(arr.length>1)
  return arr;
};

//calculates the result of lhs and rhs using given operator
//called by calculateWholeArray
const applyOperator = (lhs, operator, rhs)=>{
  if(operator==="+"){
    return lhs+rhs;
  }else if(operator==="-"){
    return lhs-rhs;
  }else if(operator==="*"){
    return lhs*rhs;
  }else if(operator==="/"){
    return lhs/rhs;
  }
};
