const main = (input) => {
  console.log(input / 100);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
