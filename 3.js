var color = ['pink', 'red', 'blue', 'green', 'orange', 'yellow', 'black', 'purple'];
var td = document.getElementsByTagName("td");
var button = document.getElementById("start");
var sr=16, numColor;
var color1 = [0, 0, 0, 0, 0, 0, 0, 0]; //Счетчик, который показывает, сколько раз использовался цвет
var randomColor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //Сюда помещаются цвета в рандоме, каждый из них по порядку связан с ячейками таблицы
function magic () {
    for(i=0; i<16; i++) {
        h=0;
        do {
         var mumColor; //Генерируем число от 0 до 7 для массива color
    numColor = Math.floor(Math.random()*100);
        g=0;
        while (numColor>7) {
            numColor = Math.floor(Math.random()*100);
            g++;
        }
        var proverka = color1[numColor]; //Проверяем сколько раз использовался тот или иной цвет
        if (proverka<2) {
            randomColor[i] = color[numColor];
            color1[numColor] = proverka+1;
            }
        h++;
        }
        while(proverka>1) //Этот цикл для выставления границ переменной проверка
    }  //Генерирует 8 пар цветов в таблице
    this.onclick = stepTwo
}
function stepTwo() {
    td[i].bgColor = randomColor[i];
   // return 
}       //Работаю над этим.. 
    
    //Мне сказали, что много циклов это плохо, буду пытаться меньше использовать их далее

   
         