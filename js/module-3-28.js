const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores,...secondGroupScores,
                   ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore =Math.min(... allScores);
