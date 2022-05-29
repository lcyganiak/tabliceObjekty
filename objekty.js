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