let Name1 = 'Bill Gates'

api_key = "XEjVsOmIF8e1+Aum3rafWw==jLhpu45kjm8PIWp6"


const BName1 = document.getElementById("Bname")
const BAge1 = document.getElementById("Bage")
const BOcup1 = document.getElementById("Brole")


//model1
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + Name1,
    headers: { 'X-Api-Key': api_key },
    contentType: 'application/json',
    success: function (result) {
        BName1.innerText = result[0].name
        BAge1.innerText = `${result[0].age} years`
        occupations = result[0].occupation
        console.log(occupations)
        BOcup1.innerText = `${occupations[0]}, ${occupations[1]} and ${occupations[2]}`


    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


//model2
let Name2 = 'Mark Zuckerberg'
const BName2 = document.getElementById("Bname2")
const BAge2 = document.getElementById("Bage2")
const BOcup2 = document.getElementById("Brole2")

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + Name2,
    headers: { 'X-Api-Key': api_key },
    contentType: 'application/json',
    success: function (result2) {
         BName2.innerText = result2[0].name
        BAge2.innerText = `${result2[0].age} years`
        occupations = result2[0].occupation
        console.log(occupations)
        BOcup2.innerText = `${occupations[0]}, ${occupations[1]} and ${occupations[2]}`


    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//model3
let Name3 = 'Jeff Bezos'
const BName3 = document.getElementById("Bname3")
const BAge3 = document.getElementById("Bage3")
const BOcup3 = document.getElementById("Brole3")

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + Name3,
    headers: { 'X-Api-Key': api_key },
    contentType: 'application/json',
    success: function (result3) {
        BName3.innerText = result3[0].name
        BAge3.innerText = `${result3[0].age} years`
        occupations = result3[0].occupation
        console.log(occupations)
        BOcup3.innerText = `${occupations[0]} and ${occupations[1]}`
 },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
})
    
//model4
let Name4 = 'sheryl sandberg'
const BAge4 = document.getElementById("Bage4")
const BName4 = document.getElementById("Bname4")
const BOcup4 = document.getElementById("Brole4")

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + Name4,
    headers: { 'X-Api-Key': api_key },
    contentType: 'application/json',
    success: function (result4) {
        BName4.innerText = result4[0].name
        BAge4.innerText = `${result4[0].age} years`
        occupations = result4[0].occupation
        console.log(occupations)
        BOcup4.innerText = `${occupations[0]} and ${occupations[1]}`
 },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
})

//model5
let Name5 = 'Larry Page'
const BAge5 = document.getElementById("Bage5")
const BOcup5 = document.getElementById("Brole5")
const BName5 = document.getElementById("Bname5")

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + Name5,
    headers: { 'X-Api-Key': api_key },
    contentType: 'application/json',
    success: function (result5) {
        BName5.innerText = result5[0].name
        BAge5.innerText = `${result5[0].age} years`
        occupations = result5[0].occupation
        console.log(occupations)
        BOcup5.innerText = `${occupations[0]}, ${occupations[1]} and ${occupations[2]}`


    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});