let arsene = "Hello world";
let j = 10;
let variable = "Tell them";

window.printOutput(j);

function method() {
  let a = 2;
  return a;
}

function method2(p, o) {
  let i = 0;
  while (i === 3) {
    window.printOutput("Hello world");
    i = i + 1;
    if (i === 0) {
      window.printOutput("Hello world");
    }
  }
}

function myWorkflow(parallel) {
  
  let workflowType = "parallel";
  
  function build() {
    let name = 5;
    let i = 0;
    while (i <= 5) {
      i = i + 1;
      let h = method();
    }
  }
  build();
}

myWorkflow();
