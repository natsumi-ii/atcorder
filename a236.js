const main = (input) => {
  const args = input.split(/\r\n|\n/);
  let word = args[0].split("");
  const numbers = args[1].split(" ");
  numbers[0] = numbers[0] - 1;
  numbers[1] = numbers[1] - 1;
  const a = word[numbers[0]];
  const b = word[numbers[1]];
  word[numbers[0]] = b;
  word[numbers[1]] = a;
  console.log(word.join(""));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
