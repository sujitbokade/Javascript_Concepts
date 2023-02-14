
async function weatherDetail(){
    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("34 Degree")
        }, 1000);
    })
    
    let puneWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 Degree")     
        }, 2000);
    })
    console.log("Start");
    let mumbaiW = await mumbaiWeather
    let puneW = await puneWeather
    return[mumbaiW, puneW]

}

let result = weatherDetail();
console.log(result);
result.then((data) => console.log(data))

