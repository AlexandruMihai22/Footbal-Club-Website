function numaratoarea_inversa () {
    let a = new Date("10 jul, 2020 00:00:00").getTime();
    let t = new Date().getTime();
    let d = a - t;

    let zile = Math.floor(d / (1000 * 60 * 60 * 24));
    let ore = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let secunde = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("zile").innerHTML = zile;
    document.getElementById("ore").innerHTML = ore;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("secunde").innerHTML = secunde;

}
setInterval(() => {
    numaratoarea_inversa ();
}, 1000);
