import { useEffect, useState } from 'react'
import styles from './Game.module.css'




export function Game() {
    

    const [upgradeClickAdd, setUpgradeClickAdd] = useState(1)
    const [clickPerSecondAmount, setClickPerSecondAmount] = useState(0)
    const [money, setMoney] = useState(0)
    
    const upgradeClick = 1
    const upgrade1 = 0.2
    const upgrade2 = 1
    const upgrade3 = 2
    const upgrade4 = 5
    const upgrade5 = 10

    const goal =10000000
    
    const handle1Upgrade =() => {
        setUpgradeClickAdd (upgradeClickAdd + upgradeClick)
        setMoney(money - 50)
    }

    const handle2Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade1)
        setMoney(money - 500)
    }

    const handle3Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade2)
        setMoney(money - 1500)
    }

    const handle4Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade3)
        setMoney(money - 5000)
    }

    const handle5Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade4)
        setMoney(money - 15000)
    }

    const handle6Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade5)
        setMoney(money - 25000)
    }

    function clickPerSecond() {
        setMoney(prevMoney =>  parseFloat((prevMoney + clickPerSecondAmount).toFixed(2)))
    }

    const handleClick = () => {
        setMoney(money + upgradeClickAdd)
    }

    useEffect (() => {
        const interval = setInterval(() => {
            clickPerSecond();
        }, 1000);

        return () => clearInterval(interval);
    }, [clickPerSecondAmount])
    
    const progressWidth = (money / goal) * 100 + '%';

    return (


        <div className={styles.gameArea}>
            <div className={styles.gameBox}>
                <h1 className={styles.count}>R${parseFloat(money).toFixed(2)}</h1>
                <p>Power click = {upgradeClickAdd}</p>
                <p>Click per second {parseFloat(clickPerSecondAmount).toFixed(1)}</p>
                <button onClick={handleClick} type='button' className={styles.clickButton}>
                    
                </button>
            </div>
            <div className={styles.progressBarArea}>
                <div className={styles.goalArea}>
                    <div className={styles.progressBar} style={{ width: progressWidth }}></div>
                </div>
                <h1>Goal: {goal}</h1>
                <a hidden={money < goal} href='https://copperlamb78.github.io/isnotmy/flower.html'><button disabled={money < goal}>Game Over</button></a>
            </div>
            <table className={styles.upgradeArea}>
                <tr>
                    <td>
                        <button disabled={money < 50 | upgradeClickAdd == 100} onClick={handle1Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click +1 MaxUpgrade=100</p>
                        <p>R$50</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < 500} onClick={handle2Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +0,2</p>
                        <p>R$500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < 1500} onClick={handle3Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +1</p>
                        <p>R$1500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < 5000} onClick={handle4Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +2</p>
                        <p>R$5000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < 15000} onClick={handle5Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +5</p>
                        <p>R$15000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < 25000} onClick={handle6Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +10</p>
                        <p>R$25000</p>
                    </td>
                </tr>

                
            </table>
        </div>


    )
}