let condition = "one";

if (condition === "onee") {
  console.log(`Condition ${condition} is true.`);
} else {
  console.log(`Condition ${condition} is false.`);
}

let frutiType = "Bananas";

switch (frutiType) {
  case "Orange":
    console.log("Orange are only $0.59 a pound");
    break;
  case "Apples":
    console.log("Apple are only $0.32 a pound");
    break;
  case "Bananas":
    console.log("Bananas are only $0.48 a pound");
    break;
  case "Cherries":
    console.log("Cherries are only $3.00 a pound");
    break;
  default:
    console.log(`Sorry, we are out of ${frutiType}`);
}
console.log("Is there anything else you'd like?");

function getMonthName(mo) {
  mo--;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if(months[mo]){
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo");
  }
}
console.log(getMonthName(11)) 
try {
    monthName = getMonthName(myMonth);
} catch(e){
    monthName = "Unknown";
    // logMyErrors(e);
}

function f() {
    try {
      console.log(0);
      throw "bogus";
    } catch (e) {
      console.log(1);
      // This return statement is suspended
      // until finally block has completed
      return true;
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false; // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5); // not reachable
  }
  console.log(f()); // 0, 1, 3, false
  
  function f() {
    try {
      throw "bogus";
    } catch (e) {
      console.log('caught inner "bogus"');
      // This throw statement is suspended until
      // finally block has completed
      throw e;
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  }
  
  try {
    console.log(f());
  } catch (e) {
    // this is never reached!
    // while f() executes, the `finally` block returns false,
    // which overwrites the `throw` inside the above `catch`
    console.log('caught outer "bogus"');
  }
  