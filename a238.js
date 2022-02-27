const main = (input) => {
  const a = 2 ** input;
  const b = input ** 2;

  if (a > b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
