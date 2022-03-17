const main = (input) => {
  const args = input.split(/\r\n|\n/);
  const first = args[0].split(" ");
  const a = args[1].split(" ");
  const b = args[2].split(" ");
  let 

  for(let i = 0; i < first[1]; i ++) {
      for(let j = 0; j < first[0]; j ++){
          if ( b[i] === a[j]) {
              
            return
          }
      }
  }
};
