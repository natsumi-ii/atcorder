const main = (input) => {
  const args = input.split(" ");
  let count = 0;
  for (let i = 0; Number(args[0]) + 10 * i < Number(args[1]); i++) {
    count++;
  }
  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
