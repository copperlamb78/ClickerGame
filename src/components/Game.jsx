import { useEffect, useState } from 'react'
import styles from './Game.module.css'
import pizzaimg from './assets/Pizzabutton.png'



export function Game() {
    
    const [rebirth, setRebirth] = useState(1)
    const [rebirthPrice, setRebirthPrice] = useState(500000)

    const [upgradeClickAdd, setUpgradeClickAdd] = useState(1000)
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
    const upgradeAritimetricFormule = 0.05


    const goal = 10000000
    
    

    const handle1Upgrade =() => {
        setUpgradeClickAdd (upgradeClickAdd + (upgrade1 * rebirth))
        setMoney(money - upgrade1Price)
        setUpgrade1Price(upgrade1Price + (upgrade1Price * upgradeAritimetricFormule))
    }

    const handle2Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + (upgrade2 * rebirth))
        setMoney(money - upgrade2Price)
        setUpgrade2Price(upgrade2Price + (upgrade2Price * upgradeAritimetricFormule))
    }

    const handle3Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + (upgrade3 * rebirth))
        setMoney(money - upgrade3Price)
        setUpgrade3Price(upgrade3Price + (upgrade3Price * upgradeAritimetricFormule))
    }

    const handle4Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + (upgrade4 * rebirth))
        setMoney(money - upgrade4Price)
        setUpgrade4Price(upgrade4Price + (upgrade4Price * upgradeAritimetricFormule))
    }

    const handle5Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + (upgrade5 * rebirth))
        setMoney(money - upgrade5Price)
        setUpgrade5Price(upgrade5Price + (upgrade5Price * upgradeAritimetricFormule))
    }

    const handle6Upgrade =() => {
        setClickPerSecondAmount(clickPerSecondAmount + (upgrade6 * rebirth))
        setMoney(money - upgrade6Price)
        setUpgrade6Price(upgrade6Price + (upgrade6Price * upgradeAritimetricFormule))
    }

    function clickPerSecond() {
        setMoney(prevMoney =>  parseFloat((prevMoney + clickPerSecondAmount).toFixed(2)))
    }

    const handleClick = () => {
        setMoney(money + upgradeClickAdd)
    }

    const handleRebirth = () => {
        setRebirth(rebirth + rebirth)
        setRebirthPrice(rebirthPrice * 2.375)
    }

    useEffect (() => {
        const interval = setInterval(() => {
            clickPerSecond();
        }, 1000);

        return () => clearInterval(interval);
    }, [clickPerSecondAmount])
    
    useEffect (() => {
        setMoney(0)
        setUpgrade1Price(50)
        setUpgrade2Price(200)
        setUpgrade3Price(1000)
        setUpgrade4Price(3000)
        setUpgrade5Price(10000)
        setUpgrade6Price(15000)
        setUpgradeClickAdd(1)
        setClickPerSecondAmount(0)
    }, [rebirth])


    const progressWidth = (money / goal) * 100 + '%';

    return (


        <div className={styles.gameArea}>
            <div className={styles.gameBox}>
                <h1 className={styles.count}>R${parseFloat(money).toFixed(2)}</h1>
                <p>Power click = {upgradeClickAdd}</p>
                <p>Click per second {parseFloat(clickPerSecondAmount).toFixed(1)}</p>
                <button onClick={handleClick} type='button' className={styles.clickButton}>
                    <img src={pizzaimg} alt='Foto de uma pizza de pepperoni' />
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
                        <button disabled={money < upgrade1Price} onClick={handle1Upgrade} type='button'>Upgrade</button>
                    </td>
                    <td>
                        <p>Click +{upgrade1}</p>
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
                <tr>
                    <td>
                    <button disabled={money < rebirthPrice} onClick={handleRebirth} type='button'>Rebirth</button>
                    </td>
                    <td>
                        <p>Reset all, but gain 2x</p>
                        <p>R${parseFloat(rebirthPrice).toFixed(2)}</p>
                    </td>
                </tr>

                
            </table>
        </div>


    )
}