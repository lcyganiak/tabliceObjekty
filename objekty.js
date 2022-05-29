// tworzenie objektów 
// 1 sposób
const obj1 = {
    name: "Lukasz",
    age: 39,
    jsJestGlupi: {
        referencje: 'Referencje są durne'
    }
}
// 2 sposób 
const obj2 = new Object({
    name: "Basia",
    age: 40
})

// 3 sposób constructor 

class Uczen {
    constructor(imie, wiek, stanowisko) {
        this.imie = imie;
        this.wiek = wiek;
        this.stanowisko = stanowisko;
        this.show = function pokaz() {
            console.log(`Do szkoły przyjęto ${this.imie} jako ${this.stanowisko}`)
        }
    }
    // get
    get getUczen() {
        return `Uczeń ${this.imie} ma lat ${this.wiek}`
    }
    get getStanowisko() {

    }
    // set
    set changeImie(value) {
        if(value.length < 4 ) {
            alert('Podałeś za którkie imię ')
        } else {
            this.imie = value
        }
        
    }

} // storzy na objekt {imie: "", wiek: "", stanowisko: ""}

const uczen1 = new Uczen("Brajan", 7, 'uczeni kalsy 1')
const uczen2 = new Uczen('Karyna',8, 'uczennica klasy 3')
uczen1.ocena = 5 // moge tak zrobić 

uczen1.changeImie = "Halina"

uczen2.show()
console.log(uczen1)
console.log(uczen2)


// referncje 
const kopjaObj1 = structuredClone(obj1)

obj1.age = 50
obj1.jsJestGlupi.referencje = "No tera to mnie zamurowało"
console.log(kopjaObj1)


obj1.name = "Henryk" // tak można zmienić objekt 

// obj1 =  {
//     name: "Bogdan",
//     age: 39,
//     jsJestGlupi: {
//         referencje: 'Referencje są durne'
//     }
// } // tak nie zminiamy objektu 



// Przykładowe działania 
console.log(obj2.name)
console.log(obj2.age)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  }
 const kluczeTablica = Object.keys(object1)
 console.log(kluczeTablica)

 kluczeTablica.forEach((key) => {
     let innySposobWysletlaniaWartosciWObjekcie = object1[key] // przy każdej iteracje będzie tak 
   //  : object1[a] póxniej object1[b] nastepnie object1[c]
   // taki zapis object1[a] to to samo co object1.a
     console.log(innySposobWysletlaniaWartosciWObjekcie)
 })

 const worker = {
     name: "Jan",
     age: 50
 }
 const worker2 = {
    name: "Janusz",
    age: 50,
    stanowisko: "Staszy Maruda",
    wynagrodzenie: "100 cebulaków"
 }

 console.log(worker.stanowisko)

 function showObj(obj) {
     const keys = Object.keys(obj)
     keys.forEach((key) => {
         console.log(obj[key], key)
     })
 }

 showObj(worker)


 showObj(worker2)

 showObj(object1)


 class Car {
     constructor(marka, kolor, silnik) {
        this.marka = marka;
        this.kolor = kolor;
        this.silnik = silnik
        this.show = function showPrice() {

        }
     }
     // gety 
     get getCena() {
        const wartoscMarki =   marki.filter((currentValue) => {
                console.log(currentValue.marka)
                console.log('podana przez klienta',this.marka)
                if(currentValue.marka === this.marka) {
                    return currentValue
                }
            })
        const wartoscKolor = kolory.filter((currentValue)=> currentValue.kolor === this.kolor)
        const wartoscSilnika = silniki.filter((currentValue) => currentValue.silnik === this.silnik)
        return wartoscMarki[0].val + wartoscKolor[0].val + wartoscSilnika[0].val
    }
     // sety 

     set changeMarka(value) {
      const jestMarka =  marki.filter((item) => value === item.marka)
      if(jestMarka.length > 0) {
        this.marka = value
      } else {
          alert("Nie ma takie marki")
      }
     }

     set changeKolor(value) {

     }

     set changeSilnik(value) {

     }
 }

 const marki = [
    {
       marka: "Opel",
       val: 1000
    },
    {
       marka: "BMW",
       val: 1500
    },
    {
       marka: "Fiat",
       val: 800
    }
]

const kolory = [
    {
       kolor: 'czerwony',
       val: 100
    },
    {
       kolor: 'czarny',
       val: 200
    },
    {
       kolor: 'zielony',
       val: 500
    }
] 
const silniki = [
    {
        silnik: "Benzyna",
        val: 2000
    },
    {
       silnik: "Benzyna + gaz",
       val: 3000
   },
   {
       silnik: "Disel",
       val: 500
   }
]
const m = ['Fiat', 'Opel']
const k = ['Czarny', 'Czerwony']
const c = [1000, 5000]
// Object.freeze(ofertaSamochodu) nie pozwili na żadną zmine w objekcie ofertaSamochodu
// Object.seal(ofertaSamochodu) pozwal na zminę wartości, ale nie pozwala dodawać lub usuwać klucz
const ofertaSamochodu = new Car("Opel","czarny", 'Benzyna + gaz' )


Object.seal(ofertaSamochodu)
// delete ofertaSamochodu.silnik usuwa klucz z wartością z objektu
// ofertaSamochodu.model = 'fabia' // po uzyciu Object.seal lub Object.freeze nie działa 
// ofertaSamochodu.changeMarka = 'Fiat'// po uzyciu Object.seal dziła, ale Object.freeze nie działa 


console.log('Jaki samochód wybralismy',ofertaSamochodu)

console.log("Cena za samochów", ofertaSamochodu.getCena)

const tablica = ['Real', 'Juventus', 'Porto', "PSG", "Liverpol", 'Legia', 'Lech', "Widzew"]



// 1. Zwróć tablice w której wszystkie nazwy klubów pisne sa dużymi literami.
// 2. Zwróć tablice, z tymi tymi klubami któych nazwa jest dłuższ niż 5 litery
// 3. napisz funkcję która bedzie sprawdzać czy podany klub wystepuję w tablicy, jezeli klubu nie mam w tablicy to go dodajemy
// np. function czyJest(fraza) {}

