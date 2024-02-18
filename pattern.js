let num = 1;

for (let i = 1; i <= 5; i++) {
  let row = [];
  for (let j = 1; j <= 9; j++) {
    if (j > 5 - i && j < 5 + i || i == 5) {
      row.push(num,"_"); 
      num++
    } else {
      row.push("  ")
    }
  }
  console.log(row.join(''));
}