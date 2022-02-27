const main = (input) => {
  let ans;
  input >= Math.pow(-2, 31) && input < 2 ** 31 ? (ans = "Yes") : (ans = "No");

  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
