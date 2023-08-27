
const assaultRoleList = [
    {
        Role: "assault",
        BotDifficulty: "easy"
    },
    {
        Role: "assault",
        BotDifficulty: "normal"
    },
    {
        Role: "assault",
        BotDifficulty: "hard"
    },
    {
        Role: "cursedAssault",
        BotDifficulty: "easy"
    },
    {
        Role: "assault",
        BotDifficulty: "impossible"
    },
    {
        Role: "cursedAssault",
        BotDifficulty: "normal"
    },
    {
        Role: "cursedAssault",
        BotDifficulty: "hard"
    },
    {
        Role: "cursedAssault",
        BotDifficulty: "impossible"
    }
]



function multipleWithRandomInt(int) {
    return int * (0.75 + (Math.random() * Math.random()))
}



function getRandom(arr, progressedValue, maxValue) {
    const progressLevels = maxValue / arr.length
    let index = Math.round(multipleWithRandomInt(progressedValue) / progressLevels)
    if (index > (arr.length - 1)) index = arr.length - 1
    return arr[index]
}

const assault = assaultRoleList
const result = getRandom(assault, Date.now(), Date.now() + (20 * 60000))

console.log("🚀 ~ file: test.ts:18 ~ result:", result)
