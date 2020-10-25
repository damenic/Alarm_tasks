/*
* {"ok":true,"result":{"message_id":5,"chat":{"id":-1001374732129,"title":"Say_clock","username":"soatn","type":"channel"},"date":1601360785,"text":"test"}}
* https://api.telegram.org/bot1360045474:AAGdq9Ci3MIycn4KIoIvrY1AMgBa__tHy3c/sendMessage?chat_id=@soatn&text=test
*
* */
//https://currentmillis.com/
const TelegramBotApi = require("node-telegram-bot-api");
const token = "1360045474:AAGdq9Ci3MIycn4KIoIvrY1AMgBa__tHy3c";

const TelegramBot = new TelegramBotApi(token, {
    polling: true
});

class Alarm {
    constructor(bot) {
        this.bot = bot;
    }

    printTimeTitle(date) {
        if(date) date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return year + "." + month + "." + day + " " + hours + "-" + minutes;
    }

    setEvery(everyTimeType) {
        const now = new Date();

        switch (everyTimeType) {

            case 'every minutes':
                const date = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate(),
                    now.getHours(),
                    now.getMinutes() + 1
                );
                const dateMillis = date.getTime();
                const nowMillis = now.getTime();
                const diffrentMillis = dateMillis - nowMillis;

                setTimeout(() => {
                    const timeTitle = this.printTimeTitle(new Date());
                    this.sendSignal(timeTitle);
                    this.setEvery(everyTimeType);
                }, diffrentMillis);
                break;

            case 'every hours':
                const date2 = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate(),
                    now.getHours() + 1,
                    0
                );
                const dateMillis2 = date2.getTime();
                const nowMillis2 = now.getTime();
                const diffrentMillis2 = dateMillis2 - nowMillis2;

                setTimeout(() => {
                    const timeTitle = this.printTimeTitle(new Date());
                    this.sendSignal(timeTitle);
                    this.setEvery(everyTimeType);
                }, diffrentMillis2);
                break;

            case 'every Day':
                const date3 = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate() + 1,
                    now.getHours(),
                    now.getMinutes()
                );
                const dateMillis3 = date3.getTime();
                const nowMillis3 = now.getTime();
                const diffrentMillis3 = dateMillis3 - nowMillis3;

                setTimeout(() => {
                    const timeTitle = this.printTimeTitle(new Date());
                    this.sendSignal(timeTitle);
                    this.setEvery(everyTimeType);
                }, diffrentMillis3);
                break;


            case 'every Month':
                const date4 = new Date(
                    now.getFullYear(),
                    now.getMonth() + 1,
                    now.getDate(),
                    now.getHours(),
                    now.getMinutes()
                );




                const dateMillis4 = date4.getTime();
                const nowMillis4 = now.getTime();
                const diffrentMillis4 = dateMillis4 - nowMillis4;




                setTimeout(() => {
                    const timeTitle = this.printTimeTitle(new Date());
                    this.sendSignal(timeTitle);
                    this.setEvery(everyTimeType);
                }, diffrentMillis4);
                break;



            case 'every day and hours':
                const date5 = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate() + 1,
                    now.getHours() + 1,
                    now.getMinutes()
                );




                const dateMillis5 = date5.getTime();
                const nowMillis5 = now.getTime();
                const diffrentMillis5 = dateMillis5 - nowMillis5;

                setTimeout(() => {
                    const timeTitle = this.printTimeTitle(new Date());
                    this.sendSignal(timeTitle);
                    this.setEvery(everyTimeType);
                }, diffrentMillis5);
                break;

            default:
                console.error("everyTimeType error ", everyTimeType);
        }

    }






    setSignalTime(date) {
        const dateMillis = date.getTime();
        const now = new Date().getTime();
        const diffrentMillis = dateMillis - now;

        setTimeout(() => {
            const timeTitle = this.printTimeTitle(new Date());
            this.sendSignal(timeTitle);
        }, diffrentMillis);
    }

    sendSignal(timeTitle) {
        this.bot
            .sendMessage(-1001374732129, timeTitle)
            .catch(error => {
                console.error(error);
            })
            .then(result => {
                // console.dir(result);
            });
    }
}

const alarm = new Alarm(TelegramBot);
// alarm.setSignalTime(new Date(2020, 8, 30, 11, 15));
 //alarm.setSignalTime(new Date(2020, 8, 30, 4, 10));

//alarm.setEvery('every minute');
alarm.setEvery('every minutes');
/*
alarm.setEvery('every day');
alarm.setEvery('every month');
alarm.setEvery('every day every hour');
*/

