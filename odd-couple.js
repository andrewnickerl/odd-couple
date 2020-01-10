function oddCouple(array)
{
    let newArray = [];
    let counter = 0;

    array.forEach (element => 
        {
            if (counter === 2) return newArray; //break loop and return value if newArray already holds 2 numbers
            if (element % 2 === 1)
            {
                newArray.push(element);
                counter++;
            }
        }
    );
    return newArray;
}

console.log(oddCouple([1,2,4,6,8,10]))