fun => {
  fun();
}

var fnExp = () => {
  console.log("i m in fnExp");
};

callFun(fnExp);
