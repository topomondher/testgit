/*
// ==UserScript==
// @name getDateTimeAllEventsByPage
// @namespace planetfake
// @version 0.1
// @grant        none
// @description Opens all links in the CodeProject newsletter 
// @match  http://www.planetwin365.com/Sport/OddsAsync.aspx?EventID*
// @copyright 2012+, hibbard.eu
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

jQuery(function ($){
    var isCleared= localStorage.getItem('isCleared');
    var allPagesNumber= parseInt(localStorage.getItem('allPagesNumber'),10);
    var loadedPagesNumber=parseInt(localStorage.getItem('loadedPagesNumber'),10);
    if(loadedPagesNumber < allPagesNumber){
         setAllEventsinStorage();
    }
});
*/
function setAllEventsinStorage(){
    var allevents= new Array();
    $(".dgItem , .dgAItem").each(function(i, obj){
        var time = $(obj).find("td.dtInc").html();
        var code= $(obj).find("td.codInc").text();
        var prevobj=$(obj).parent();
        var date = $(prevobj).find("td table tbody tr td.cqDateTbl").html();
        console.log(code);
        console.log(time);
        console.log(date);
        //format date
        date=date.match(/^(\D+)(.*)$/)[2];
        date=date.replace(" janvier ","/01/");
        date=date.replace(" février ","/02/");
        date=date.replace(" mars ","/03/");
        date=date.replace(" avril ","/04/");
        date=date.replace(" mai ","/05/");
        date=date.replace(" juin ","/06/");
        date=date.replace(" juillet ","/07/");
        date=date.replace(" août ","/08/");
        date=date.replace(" septembre ","/09/");
        date=date.replace(" octobre ","/10/");
        date=date.replace(" novembre ","/11/");
        date=date.replace(" décembre ","/12/");
        //
        console.log(date);
        var event={};
        event={
            _code: code,
            _time: time,
            _date: date
        }
        allevents.push(event);
        console.log("----");
    });
    //console.log(allevents);
    //localStorage.setItem('alleventstoday',JSON.stringify(allevents));
    var alleventstoday = localStorage.getItem('alleventstoday');
    var alleventsjson=new Array();
    if(alleventstoday === null){
        alleventstoday = "";	
    }else{
        alleventsjson = JSON.parse(alleventstoday);
    }
    alleventsjson=alleventsjson.concat(allevents);
    localStorage.setItem('alleventstoday',JSON.stringify(alleventsjson));

    var currentLoadedPage=parseInt(localStorage.getItem('loadedPagesNumber'),10);
    localStorage.setItem('loadedPagesNumber',currentLoadedPage+1);
}
