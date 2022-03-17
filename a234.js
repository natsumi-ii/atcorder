const a = (input) => {
  const x = input;
  return x ** 2 + 2 * x + 3;
};

const main = (input) => {
  const x = input;
  console.log(a(a(a(x) + x) + a(a(x))));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));