//2n people
//exactly n people arrive in each city
//people are the length of the array

//costs.length = how many people 
//2n = costs.length
//costs.length/2 = n -- the number of people that need to arrive in each city
//

//8 people
//4 need to arrive in each city
//first person - city A
// 2nd person - city A
// 3rd person - 

//count how many times city A has been accessed
// cheapest possible city A 
//cheapest possible city B
// check the total price
//check the number each city has been 

function twoCityScheduling(costs) {
    costs.sort((city1, city2) => {
        return city1[0] - city1[1] - (city2[0] - city2[1])
    })
    console.log("costs sorted", costs)
    let total = 0
    let n = costs.length / 2
    console.log("n", n)

    for (let i = 0; i < n; i++) {
        console.log(total, i)
        total += costs[i][0] + costs[i + n][1]
    }
    return total

}

console.log(twoCityScheduling([[10, 20], [30, 200], [400, 50], [30, 20]]))