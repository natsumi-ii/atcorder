const main = (input) => {
  const args = input.toString().split("");
  const a = args[0];
  const b = args[1];
  const c = args[2];
  console.log(Number(a + b + c) + Number(b + c + a) + Number(c + a + b));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
