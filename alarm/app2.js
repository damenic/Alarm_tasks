case 'every hours':
const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours() + 1,
    now.getMinutes()
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


case 'every day':
const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    now.getHours(),
    now.getMinutes()
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


case 'every month':
const date = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes()
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

case 'every day every hour':
const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    now.getHours() + 1,
    now.getMinutes()
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