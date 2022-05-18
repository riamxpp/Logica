function romanToInt(roman) {
  roman = roman.toUpperCase();
  const numRomans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  const specialCases = ["CM", "CD", "XC", "XL", "IX", "IV"];
  let cases = [];
  let total = 0;
  let romanNumbers = "";
  //verificando se um usuário está passando no mínimo um número romano!
  if (
    roman.includes("I") ||
    roman.includes("V") ||
    roman.includes("X") ||
    roman.includes("L") ||
    roman.includes("C") ||
    roman.includes("D") ||
    roman.includes("M")
  ) {
    //verificando se existe um caso especial no numero
    specialCases.map((item) => {
      if (roman.includes(item)) {
        cases.push(item);
        // Se já tiver limpado a string 1x voltando limpando dela mesma novamente.
        if (romanNumbers) romanNumbers = romanNumbers.replace(item, "");
        else romanNumbers = roman.replace(item, "");
      }
    });

    if (cases.length !== 0) cases.map((item) => (total += numRomans[item]));

    if (romanNumbers) {
      for (let i = 0; i < romanNumbers.length; i++) {
        total += numRomans[romanNumbers[i]];
      }
    } else {
      for (let i = 0; i < roman.length; i++) {
        total += numRomans[roman[i]];
      }
    }

    return total;
  }
  return "Informe um número romano valido!";
}

console.log(romanToInt("viii"));

// I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000;
/**
 * For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII,
 * which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for
 * four is not IIII. Instead, the number four is written as IV. Because the one is before the five we
 * subtract it making four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 */
