function addButtonGetData(){
    $(".tblMenu ul").append('<li id="li_getdata"><a id="btn_getdata"><span id="span_getdata">Data</span></a></li>');
}
function addButtonClear(){
    $(".tblMenu ul").append('<li id="li_cleardata"><a id="btn_cleardata"><span id="span_cleardata">Clear</span></a></li>');
}
function addButtonTestData(){
    $(".tblMenu ul").append('<li id="li_testdata"><a id="btn_testdata"><span id="span_testdata">Test</span></a></li>');
}
//Call get data button
$(document).on("click", "#btn_getdata", function(){
     openAllEventsPages();
     localStorage.setItem('isCleared',"false");
    
});
//Call clear button
$(document).on("click", "#btn_cleardata", function(){
    clearAllLocalStorage();
});

//Call test button
$(document).on("click", "#btn_testdata", function(){
    isAllLoaded();
});

function clearAllLocalStorage(){
    localStorage.setItem('allEventsUrls',"");
    localStorage.setItem('alleventsids',"");
    localStorage.setItem('alleventstoday',JSON.stringify(new Array()));
    localStorage.setItem('allPagesNumber',0);
    localStorage.setItem('loadedPagesNumber',0);
    localStorage.setItem('isCleared',"true");
}

function isAllLoaded(){
    var allPagesNumber= parseInt(localStorage.getItem('allPagesNumber'),10);
    var loadedPagesNumber=parseInt(localStorage.getItem('loadedPagesNumber'),10);
    if(loadedPagesNumber == allPagesNumber){
        alert("Good");
    }else{
        alert("Reload please: clear + data");
    }
}
function openAllEventsPages(){
  //get all events ids//set all event in json local storage 
  $(":input").prop('checked', true);
  var allIDS= new Array();
  $("input:checked").each(function(i){
	allIDS.push($(this).parent().attr("IDEvento"));
  });
  console.log(allIDS);
  localStorage.setItem('alleventsids',JSON.stringify(allIDS));
 //generate urls events 
 var IDs="";
 var pages=1;
 var events_urls= new Array();
 var basic_url="http://www.365planetwinall.com/Sport/OddsAsync.aspx?EventID=";
 var events_url="";
 $.each(allIDS, function(index, value) {
       if (IDs!="") IDs+=",";
	   IDs+=value;  
	   if(index == 29 * pages){
		   pages+=1;
		   console.log(IDs);
		   events_url=basic_url+IDs;
		   events_urls.push(events_url);
		   events_url="";
		   IDs="";
	   }
	   console.log(index);
	   if(index == allIDS.length - 1){
		   events_url=basic_url+IDs;
		   events_urls.push(events_url);
	   }   
   });
  console.log(IDs);
  console.log("pages=",pages);
  console.log(events_urls);
  localStorage.setItem('allPagesNumber',pages);
  localStorage.setItem('allEventsUrls',JSON.stringify(events_urls));
  //open urls
 var urls_events=JSON.parse(localStorage.getItem('allEventsUrls'));
  $.each(urls_events, function(index, value) {  
			var win = window.open(value, '_blank');
			win.focus();
   });
}
