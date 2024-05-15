import { useEffect, useState } from 'react'
import styles from './Game.module.css'




export function Game() {
    

    const [upgradeClickAdd, setUpgradeClickAdd] = useState(1)
    const [clickPerSecondAmount, setClickPerSecondAmount] = useState(0)
    const [money, setMoney] = useState(0)
    const [upgrade1Price, setUpgrade1Price] = useState(50)
    const [upgrade2Price, setUpgrade2Price] = useState(200)
    const [upgrade3Price, setUpgrade3Price] = useState(1000)
    const [upgrade4Price, setUpgrade4Price] = useState(3000)
    const [upgrade5Price, setUpgrade5Price] = useState(10000)
    const [upgrade6Price, setUpgrade6Price] = useState(15000)
    
    const upgrade1 = 1
    const upgrade2 = 0.2
    const upgrade3 = 1
    const upgrade4 = 2
    const upgrade5 = 5
    const upgrade6 = 10
    const upgradeAritimetricFormule = 0.01


    const goal =5000000
    
    

    const handle1Upgrade =() => {
        setUpgradeClickAdd (upgradeClickAdd + upgrade1)
        setMoney(money - upgrade1Price)
        setUpgrade1Price(upgrade1Price + (upgrade1Price * upgradeAritimetricFormule))
    }

    const handle2Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade2)
        setMoney(money - upgrade2Price)
        setUpgrade2Price(upgrade2Price + (upgrade2Price * upgradeAritimetricFormule))
    }

    const handle3Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade3)
        setMoney(money - upgrade3Price)
        setUpgrade3Price(upgrade3Price + (upgrade3Price * upgradeAritimetricFormule))
    }

    const handle4Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade4)
        setMoney(money - upgrade4Price)
        setUpgrade4Price(upgrade4Price + (upgrade4Price * upgradeAritimetricFormule))
    }

    const handle5Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade5)
        setMoney(money - upgrade5Price)
        setUpgrade5Price(upgrade5Price + (upgrade5Price * upgradeAritimetricFormule))
    }

    const handle6Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + upgrade6)
        setMoney(money - upgrade6Price)
        setUpgrade6Price(upgrade6Price + (upgrade6Price * upgradeAritimetricFormule))
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
                <a hidden={money < goal} href='https://copperlamb78.github.io/isnotmy/flower.html'><button>Game Over</button></a>
            </div>
            <table className={styles.upgradeArea}>
                <tr>
                    <td>
                        <button disabled={money < upgrade1Price | upgradeClickAdd == 200} onClick={handle1Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click +{upgrade1} MaxUpgrade=200</p>
                        <p>R${parseFloat(upgrade1Price).toFixed(2)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < upgrade2Price} onClick={handle2Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +{upgrade2}</p>
                        <p>R${parseFloat(upgrade2Price).toFixed(2)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < upgrade3Price} onClick={handle3Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +{upgrade3}</p>
                        <p>R${parseFloat(upgrade3Price).toFixed(2)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < upgrade4Price} onClick={handle4Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +{upgrade4}</p>
                        <p>R${parseFloat(upgrade4Price).toFixed(2)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < upgrade5Price} onClick={handle5Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +{upgrade5}</p>
                        <p>R${parseFloat(upgrade5Price).toFixed(2)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button disabled={money < upgrade6Price} onClick={handle6Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click per second +{upgrade6}</p>
                        <p>R${parseFloat(upgrade6Price).toFixed(2)}</p>
                    </td>
                </tr>

                
            </table>
        </div>


    )
}