// Variables
let characterName = "HERO"
let experience = 6514
let rank = ""

// Input


// Processing
switch (true) 
    {
        case experience < 1000:
            rank = "Bronze"
            break
        case experience >= 1000 && experience < 2000:
            rank = "Iron"
            break
        case experience >= 2000 && experience < 4000:
            rank = "Steel"
            break
        case experience >= 4000 && experience < 6000:
            rank = "Silver"
            break
        case experience >= 6000 && experience < 8000:
            rank = "Gold"
            break
        case experience >= 8000 && experience < 10000:
            rank = "Platinum"
            break
        case experience >= 10000 && experience < 12000:
            rank = "Radiant"
            break
        case experience >= 12000 && experience < 14000:
            rank = "Ascendant"
            break
        case experience >= 14000:
            rank = "Immortal"
            break
    }

// Output
console.log("Your character called " + characterName + " is at the " + rank + " rank!")
