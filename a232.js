const main = (input) => {
  const args = input.split("");
  console.log(Number(args[0]) * Number(args[2]));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
