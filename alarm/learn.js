function setEvery(everyTimeType) {
            const now = new Date();


        //Minut chiqarish
            switch (everyTimeType) {
                case 'every minute':
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

                default:
                    console.error("everyTimeType error ", everyTimeType);
        }
}
const now = new Date();
const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours() +,
    now.getMinutes() + 1
);

console.log(now);
console.log(date);