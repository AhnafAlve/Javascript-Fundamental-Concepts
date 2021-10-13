// basic problems solvings

function totalSales (shirt, pant, shoes){
    const shirtCount = shirt * 100;
    const pantCount = pant * 200;
    const shoesCount = shoes * 500;
    const totalCost = shirtCount + pantCount + shoesCount;
    return totalCost;
}

const result = totalSales(2, 1, 111);
console.log(result);
