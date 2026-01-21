const str = "_____йл___хаоп_оомх__шруоьпмод,тоежо_адчдепму_ерп";

const n = Math.ceil(Math.sqrt(str.length));

let table = Array(n);
for (let i = 0; i < n; i++) {
    table[i] = Array(n);
}

let k = 0; 

for (let col = 0; col < n; col++) {
  for (let row = 0; row < n; row++) {
    if (k < str.length) {
      table[row][col] = str[k];
      k++;
    }
  }
}

console.log(table.map(row => row.join(" ")).join("\n"));

let result1 = '';
let result2 = '';
let result3 = '';
let result4 = '';

// Расшифровка-1
let forward = 1;
for (let d = 0; d < 2 * n - 1; d++) {
    for (let i = 0; i < n; i++) {
        const j = d - i;
        if (j >= 0 && j < n) {
            if (forward % 2 == 0) {
                result1 += table[i][j];
            }
            else {
                result1 += table[j][i];
            }
        }
    }
    forward++;
}

// Расшифровка 3
orward = 1;
for (let d = 2 * n - 1; d >= 0; d--) {
    for (let i = n - 1; i >= 0; i--) {
        const j = d - i;
        if (j >= 0 && j < n) {
            if (forward % 2 == 0) {
                result3 += table[j][i];
            }
            else {
                result3 += table[i][j];
            }
        }
    }
    forward++;
}

// Расшифровка 2
forward = 0;
for (let d = 0; d < 2 * n - 1; d++) {
    
    if (forward % 2 == 0) {
        for (let i = 0; i < n; i++) {
            const j = n - 1 - d + i;
            if (j >= 0 && j < n) {
                result2 += table[i][j];
            }
        }
    } else {
        for (let i = n - 1; i >= 0; i--) {
            const j = n - 1 - d + i;
            if (j >= 0 && j < n) {
                result2 += table[i][j];
            }
        }
    }
    
    forward++;
}

// Расшифровка 4
forward = 0;
for (let d = 2 * n - 1; d >= 0; d--) {
    
    if (forward % 2 == 0) {
        for (let i = 0; i < n; i++) {
            const j = n - 1 - d + i;
            if (j >= 0 && j < n) {
                result4 += table[i][j];
            }
        }
    } else {
        for (let i = n - 1; i >= 0; i--) {
            const j = n - 1 - d + i;
            if (j >= 0 && j < n) {
                result4 += table[i][j];
            }
        }
    }
    
    forward++;
}

console.log("Результат рассшифровки-1: ", result1);
console.log("Результат рассшифровки-2: ", result2);
console.log("Результат рассшифровки-3: ", result3);
console.log("Результат рассшифровки-4: ", result4);