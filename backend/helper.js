import { log } from "console"
import fs from "fs"

export const readFile = () => {
    return new Promise ((resolve, reject)=> {
        fs.readFile("./databox.json", (err, data) => {
            if (err) reject (err)
            else {
                resolve(JSON.parse(data.toString()))
            }
        })
    } )
}

export const addItem = (updatecap) => {
    return new Promise ((resolve,reject) => {
        readFile()
        .then(data => {
                const newcap = Number(data.capacity) + Number(updatecap)
                
                if (newcap > data.limit) {
                    console.log("limit over max")
                   reject()
                }
                 else {
                    data.capacity = newcap
                    fs.writeFile("./databox.json", JSON.stringify(data), (err) => {
                        if (err) reject(err)
                        else {
                            resolve(data)
                        }
                    })
                }

        })
    })
}

export const getMoney = () => {
    return new Promise ((resolve, reject) => {
        readFile()
        .then(data => {
            data.money += data.price * data.capacity
            data.capacity = 0
            fs.writeFile("./databox.json", JSON.stringify(data), (err) => {
                if (err) reject (err)
                else {
                    resolve(data)
                }
            } )
        })
    }) 
}