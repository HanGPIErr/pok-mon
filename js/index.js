//requete Fetch

// berrieslist
document.getElementById("berrieslist").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/berry").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='berries(\""+data.results[index].url+"\")'>" + data.results[index].name + '</div><br>'

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})

function berries(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "nom :"+ data.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Temps de pousse :"+ data.growth_time + "<br>"
        document.getElementById('recevoir1').innerHTML += "Récolte max :"+ data.max_harvest + "<br>"
        document.getElementById('recevoir1').innerHTML += "Pouvoir naturel :"+ data.natural_gift_power + "<br>"
        document.getElementById('recevoir1').innerHTML += "Taille :"+ data.size + "<br>"
        document.getElementById('recevoir1').innerHTML += "Douceur :"+ data.smoothness + "<br>"
        document.getElementById('recevoir1').innerHTML += "Sécheresse du sol :"+ data.soil_dryness + "<br>"
})
}
// contest list
document.getElementById("contestlist").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/contest-type/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='contest(\""+data.results[index].url+"\")'>" + data.results[index].name + '</div><br>'
        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function contest(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "nom :"+ data.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Berry flavor :"+ data.berry_flavor.name + "<br>"
        for (let index = 0; index < data.names.length; index++) {
            const element = data.names[index];
            if (element.language.name == "fr") {
                document.getElementById('recevoir1').innerHTML += "version du jeu :"+ element.color + "<br>"
            }
        }
})
}

// encounters
document.getElementById("encounters").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/encounter-method/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='encounter(\""+data.results[index].url+"\")'>" + data.results[index].name + '</div><br>'

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function encounter(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "Nom :"+ data.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Ordre :"+ data.order + "<br>"
        for (let index = 0; index < data.names.length; index++) {
            const element = data.names[index];
            if (element.language.names == "fr") {
                document.getElementById('recevoir1').innerHTML += "Nom :"+ element.names + "<br>"
            }
        }
})
}
//evolution
document.getElementById("evolution").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/evolution-chain/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='evol(\""+data.results[index].url+"\")'>" + index + '</div><br>'

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function evol(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "Nom de base :"+ data.chain.species.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Evolution 1 :"+ data.chain.evolves_to[0].species.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Evolution Finale :"+ data.chain.evolves_to[0].evolves_to[0].species.name + "<br>"
        
})
}

// Games
document.getElementById("games").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/generation/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='game(\""+data.results[index].url+"\")'>" + index + '</div><br>'

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function game(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "Version du Jeu :"+ data.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Abilities :"+ data.abilities + "<br>"
})
}
// item
document.getElementById("items").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/item/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='item(\""+data.results[index].url+"\")'>" + index + '</div><br>'

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function item(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "Nom :"+ data.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Cost :"+ data.cost + "<br>"
        document.getElementById('recevoir1').innerHTML += "Force de Vol :"+ data.fling_power + "<br>"
        document.getElementById('recevoir1').innerHTML += "Effet :"+ data.fling_effect + "<br>"
})
}
//location
document.getElementById("locations").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/location/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += "<div onclick='locatione(\""+data.results[index].url+"\")'>" + index + '</div><br>'

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function locatione(url){
    fetch(url).then((res) => res.json()).then((data) => {
        document.getElementById('recevoir1').style.display="flex"
        document.getElementById('recevoir1').innerHTML = ""
        document.getElementById('recevoir1').innerHTML += "Nom de base :"+ data.name + "<br>"
        document.getElementById('recevoir1').innerHTML += "Region :"+ data.region + "<br>"
})
}

document.getElementById("machines").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/machine/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += data.results[index].name + "<br>"

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
document.getElementById("moves").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/move/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += data.results[index].name + "<br>"

        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
document.getElementById("pokemon").addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += data.results[index].name + "<br>"
        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
})
function pagesuivante(url) {
    console.log(url)
    fetch(url).then((res) => res.json()).then((data) => {
        // console.log(data);
        document.getElementById('recevoir').innerHTML = ""
        for (let index = 0; index < data.results.length; index++) {
            document.getElementById('recevoir').innerHTML += data.results[index].name + "<br>"
        }
        if(data.next!=null){
            document.getElementById('button1').style.display="block"
            document.getElementById('button1').onclick= () => {
                pagesuivante(data.next)
            }
        }else{
            document.getElementById('button1').style.display="none"
        }
        if(data.previous!=null){
            document.getElementById('button2').style.display="block"
            document.getElementById('button2').onclick= () => {
                pagesuivante(data.previous)
            }
        }else{
            document.getElementById('button2').style.display="none"
        }
    })
}