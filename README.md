# Flow control and function bootcamp

öva på if else switchar och functioner

## Functions and if else

**1: skriv en funktion som returnerar en rektangels area:**

```js
let width = 100m;
let height = 200m;
```

**2: skriv en funktion som kontrollerar om en sträng är tom:**

```js
let str = "";
```

**3: skriv en funktion som kontrollerar om ett nummer är positivt eller negativt:**

```js
let a = 100;
let b = -200;
```

**4: Skriv en funktion som kontrollerar summan av ett factorialt tal :**  
 **En factorial är en matematisk operation där du multiplicerar det givna talet med alla positiva heltal mindre än det.**

**Med andra ord.**

```js
let a = n × ( n − 1 ) × … × 2 × 1;
```

**ett exempel är**

```js
// 5!
let summa = 5 * 4 * 3 * 2 * 1;
```

**5: Biggest**

Gör ett program som tar emot tre stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.

```js
let a = 100;
let b = -200;
let c = 500;
```

**6: kolla om en sträng**

**Inkluderar ett visst ord**
Gör ett program som tar en mening som argument och kollar om den innehåller

```
javaScript
```

**7: Temperatur**

Gör ett program som konverterar Celsius till Fahrenheit

```js
Formel: (0°C × 9/5) + 32 = 32°F
```

**8: skriv en funktion som gör en grundläggande miniräknare av de 4 räknesätten:**

```js
let plus = 100;
let ganger = 200;
let minus = -300;
let delat = 600;
```

**9: skriv en funktion som kontrollerar om ordet är en pallidrom :**

```js
//palindrom, ord, tal, mening eller vers som läser
//samma bakåt eller framåt. Termen härstammar från grekiskan palin dromo ("springa tillbaka igen").
//Exempel på ordpalindromer inkluderar tex ( Engelska ord)“civic,” “madam,” “radar,”och “deified.”
```

**10: "Timmy och Sarah tror att de är förälskade, men runt där de bor kommer de bara att veta när de väljer varsin blomma. Om en av blommorna har ett jämnt antal blad och den andra har ett udda antal blad betyder det att de är förälskade.**

Skriv en funktion som tar antalet blad på varje blomma som inmatning och returnerar true om de är förälskade och false om de inte är det.

```js
let blomma1 = 300;
let blomma2 = 600;
```

**11 Du kommer att få ett ord. Din uppgift är att returnera det mellersta tecknet i ordet. Om ordets längd är udda, returnera det mellersta tecknet. Om ordets längd är jämnt, returnera de två mellersta tecknen.**

#Examples:

```js
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input
```

**12: Skriv en funktion som retunerar längden av det kortaste ordet i en mening**
\*\*kan innehålla en loop för att lösas exempelvis en for loop

```js
for (let i = 0; i < words.length; i++) {
        const word = words[i];
```

**13 Definiera en JavaScript-funktion som kontrollerar om ett heltal är ett primtal eller inte.**
Ett primtal är ett tal som bara är delbart med sig sjäv och 1.
Även denna uppgift kan innehålla en for-loop och en Math.sqrt metod.

```js
// Exempelanvändning:
const tal1 = 17; // Primtal
const tal2 = 10; // Inte ett primtal
```

**14: Skriv en funktion som tar tre parametrar: name, city och favoriteColor. Den ska skriva ut informationen till konsolen i en fullständig mening. Exempel "Välkommen Namn från Göteborg med favvofärg blått". Skriv kod som anropar funktionen med lämpliga värden.**

**14b Fråga användaren efter värden, som du anropar funktionen med.**

```js
// exempel
let name = "Kalle";
let city = "Göteborg";
let favoriteColor = "blue";
```

**15: Skriv en funktion som avrundar ett tal till två decimaler, med hjälp av metoden Math.round. (Dokumentation på MDN.) Den bästa lösningen använder inga andra funktioner.**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

**16 Skriv en funktion som säger hur många dagar en månad har. (Låtsas att skottår inte finns.) Funktionen ska ha en parameter, som är en sträng för varje månad. Strängen ska vara de tre första tecknen i månadens namn, dvs jan, feb, mar, apr osv. Funktionen ska returnera ett tal. Exempelvis så är daysInMonth("mar") == 31
Hur långa månaderna är:**

**https://kunskapat.se/2020/11/11/ar-kvartal-manader-datum/**
