function selamla2(mesaj, isim) {
    if (!isim)
        isim = 'user';
    return `${mesaj} ${isim}!`;
}
console.log(selamla2("Merhaba", "Mark"));
console.log(selamla2("Merhaba"));
