const dp = [
    ['', '', ''], // 0
    ['', '', ''], // 1
    ['', '', ''], // 2
]
let step = 'x'
let winner = ''
window.onload = function () {
    init()
    function init() {
        createCheckerboard()
    }
    // 创建棋盘
    function createCheckerboard() {
        const checkerboardDom = document.getElementById('checkerboard')
        for (let i = 0; i < dp.length; i++) {
            for (let j = 0; j < dp[i].length; j++) {
                const cellDom = document.createElement('div')
                cellDom.className = 'cell'
                cellDom.onclick = function () {
                    if (winner) return
                    dp[i][j] = step
                    this.innerText = step
                    winner = judgeWinner(step, dp)
                    if (winner) {
                        setTimeout(() => {
                            alert(winner + '获得胜利')
                        }, 100)
                    }
                    step = step === 'x' ? 'o' : 'x'
                }
                cellDom.innerText = dp[i][j]
                checkerboardDom.appendChild(cellDom)
            }
        }
    }
}
//判断输赢
function judgeWinner(type = 'x', dp) {
    // 三横
    const l1 = [...dp[0]]
    const l2 = [...dp[1]]
    const l3 = [...dp[2]]
    // 三竖
    const h1 = [dp[0][0], dp[1][0], dp[2][0]]
    const h2 = [dp[0][1], dp[1][1], dp[2][1]]
    const h3 = [dp[0][2], dp[1][2], dp[2][2]]
    //两斜
    const x1 = [dp[0][0], dp[1][1], dp[2][2]]
    const x2 = [dp[0][2], dp[1][1], dp[2][0]]

    if (type === 'x') {
        if (l1.every(i => i === 'x')) return 'x'
        if (l2.every(i => i === 'x')) return 'x'
        if (l3.every(i => i === 'x')) return 'x'
        if (h1.every(i => i === 'x')) return 'x'
        if (h2.every(i => i === 'x')) return 'x'
        if (h3.every(i => i === 'x')) return 'x'
        if (x1.every(i => i === 'x')) return 'x'
        if (x2.every(i => i === 'x')) return 'x'
    }
    if (type === 'o') {
        if (l1.every(i => i === 'o')) return 'o'
        if (l2.every(i => i === 'o')) return 'o'
        if (l3.every(i => i === 'o')) return 'o'
        if (h1.every(i => i === 'o')) return 'o'
        if (h2.every(i => i === 'o')) return 'o'
        if (h3.every(i => i === 'o')) return 'o'
        if (x1.every(i => i === 'o')) return 'o'
        if (x2.every(i => i === 'o')) return 'o'
    }
    return ''
}

// AI实现

function aiClick(type = 'x', dp) {
    const typeEnum = { 'x': 'o', 'o': 'x' }
    /*
        [
            0,0 0,1 0,2
            1,0 1,1 1,2
            2,0 2,1 2,2
        ]
    * */
}