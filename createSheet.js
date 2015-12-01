
var cssStyle=' .bodernone {	border: none !important;}#mysheetid {	display: none;	font-size: 9px;	width: 700px;	line-height: 7pt;}.imgheader img {	width: 69.9mm;}.imgfooter img {	width: 68.9mm;}table {	border-spacing: 0mm !important;	border-collapse: collapse !important;}.tableHeader td {	font-size: 9.6pt;	font-family: arial;	font-weight: bold;}table td tr {	font-family: arial;	font-size: 8pt;	margin: 0mm !important;	padding: 0mm !important;}span {	margin: 0px;	padding: 0px;}.centerSystemElem {	text-align: center;	white-space: nowrap;	padding-left: 5px;	padding-right: 5px;}.borderRight {	border-right: 1px solid black;}.bordertop {	border-top: 1px solid black;}.textAlighLeft {	text-align: left;}.borderRight {	border-right: 1px solid black;}.borderBotton {	border-bottom: 1px solid black;	font-size: 10px;	text-align: center;	white-space: nowrap;}.textalignRight {	text-align: right;}.solidBorder {	border: 1px solid black;}.autowidthElem {	width: 1px;	white-space: nowrap;}.tableseparator {	height: 6px;}.grasElem {	font-weight: bold;}.rigthElem {	text-align: right;}.bigTable {	border-collapse: collapse;	border: 1px solid black;	width: 70mm;	table-layout: fixed;}.playTable {	width: 100%;}hr.dashedline {	border-top: 2px dotted gray;	margin: 1px 4px;}.dashedlineSystem {	border-bottom: 2px dotted gray}.dashedline {	border-top: 2px dotted gray;	margin: 2px 5px;}.dashedBorder {	border-bottom: dotted;	border-bottom-width: 2px;	border-bottom-color: gray;}.dashedlineBold {	border: none;	border-bottom: dotted;	border-bottom-width: 2px;	border-bottom-color: black;}.centerElem {	text-align: center;}.blackBorder {	border-bottom: 1px solid black;}.miseTable td {	font-size: 14.4pt;	font-family: arial;}#bonusmin, #bonusmax {	font-size: 12.8pt;	font-family: arial;}._96pt {	font-family: arial;	font-size: 9.6pt;}._22_4pt {	font-size: 22.4pt;	font-family: arial;	font-weight: bold}._8pt {	font-size: 8pt;	font-family: arial;}.sysTable th td {	font-size: 8.8pt;	font-family: arial;}';
var cssRest='html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video {    margin: 0;    padding: 0;    border: 0;    font-size: 100%;    font: inherit;    vertical-align: baseline;} article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {    display: block;}body {    line-height: 1;}ol, ul {    list-style: none;}blockquote, q {    quotes: none;}blockquote:before, blockquote:after,q:before, q:after {    content: "";    content: none;}table {    border-collapse: collapse;    border-spacing: 0;}';
 cssStyle += cssRest;
var imgurl='http://www.imageno.com/thumbs/20151020/01m3gvdazhzv.jpg';//'https://app.box.com/representation/file_version_40849338185/image_2048/1.png';
var codebareurl='http://www.imageno.com/thumbs/20151020/uby2sq2w4uc9.jpg';//'https://app.box.com/representation/file_version_40849579053/image_2048/1.png';
var sheetCodeNumber="";
var sheetIdNumber="";
var sheetCost="";

function generateSheetNumber(){
   var nowdate = new Date();
   var minuteStr;
   var secondeStr;
   var hourStr;
   var dayStr;
   var monthStr;
   //minute
   if(nowdate.getMinutes()<10){
	   minuteStr="0"+nowdate.getMinutes();
   }else{
	   minuteStr=nowdate.getMinutes();
   }
   //second
   if(nowdate.getSeconds()<10){
	   secondeStr="0"+nowdate.getSeconds();
   }else{
	   secondeStr=nowdate.getSeconds();
   }
   //hour
   if(nowdate.getHours()<10){
	   hourStr="0"+nowdate.getHours();
   }else{
	   hourStr=nowdate.getHours();
   }
   //day
   if(nowdate.getDate()<10){
	   dayStr="0"+nowdate.getDate();
   }else{
	   dayStr=nowdate.getDate();
   }
   //month
   if(nowdate.getMonth()<9){
	   monthStr="0"+(nowdate.getMonth()+1);
   }else{
	   monthStr=(nowdate.getMonth()+1)
   }
   sheetCodeNumber =minuteStr +""+secondeStr+""+hourStr;
   sheetIdNumber=dayStr+""+monthStr+""+nowdate.getFullYear()+sheetCodeNumber;
}
function generateSubmitDate(){
	var nowdate = new Date();
   var minuteStr;
   var secondeStr;
   var hourStr;
   
   var dayStr;
   var monthStr;
   //minute
   if(nowdate.getMinutes()<10){
	   minuteStr="0"+nowdate.getMinutes();
   }else{
	   minuteStr=nowdate.getMinutes();
   }
   //second
   if(nowdate.getSeconds()<10){
	   secondeStr="0"+nowdate.getSeconds();
   }else{
	   secondeStr=nowdate.getSeconds();
   }
   //hour
   if(nowdate.getHours()<10){
	   hourStr="0"+nowdate.getHours();
   }else{
	   hourStr=nowdate.getHours();
   }
   //day
   if(nowdate.getDate()<10){
	   dayStr="0"+nowdate.getDate();
   }else{
	   dayStr=nowdate.getDate();
   }
   //month
   if(nowdate.getMonth()<9){
	   monthStr="0"+(nowdate.getMonth()+1);
   }else{
	   monthStr=(nowdate.getMonth()+1)
   }
	var submitDate = dayStr+"/"+monthStr+"/"+nowdate.getFullYear()+" "+hourStr + ":" + minuteStr + ":" + secondeStr;
	return submitDate;
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(cssStyle);

//Ok button
//s_w_PC_cCoupon_lnkAvanti
$(document).on("click", "[id$='w_PC_cCoupon_lnkAvanti']", function(){
	generateSheetNumber();
    if($("[id$='w_PC_cCoupon_tdMultipla'].sel").length){  
        printSimpleSheet();       
    }else if($("[id$='w_PC_cCoupon_tdSistema'].sel").length){
       printSystmeSheet();
    }else{
        printMultupleSheet();
    }
    $("#mysheetid").hide();
    console.log("sheet is created");
});

//Comfirm button
$(document).on("click", "[id$='w_PC_cCoupon_lnkConferma']", function(){
    $("[id$='w_PC_cCoupon_lnkConferma']").attr("href", "javascript:;");
    //create html print div
    var nowdate = new Date();
    var minuteStr;
   var hourStr;
   //minute
   if(nowdate.getMinutes()<10){
	   minuteStr="0"+nowdate.getMinutes();
   }else{
	   minuteStr=nowdate.getMinutes();
   }
   //hour
   if(nowdate.getHours()<10){
	   hourStr="0"+nowdate.getHours();
   }else{
	   hourStr=nowdate.getHours();
   }
    var sheetTimePrint =hourStr+":"+minuteStr;  
    //var fakePrintDiv='<script language="javascript" type="text/javascript"> /* Variabili aggiornate durante postback */                //Valuta dell"utente, può essere la default o la sua                var IDValutaUtente = "1";                //Parametro che indica se è abilitata la valuta cassa                var valCassa=0;            </script>                       <div class="Top">                <h3>Bulletin</h3>                <span></span>                <a id="s_w_PC_cCoupon_lnkBlocca" title="Bloquer Coupon" class="lnkSblocca" href="javascript:BloccaSbloccaCoupon();"></a>                           </div>                      <div class="Cnt" id="divContentCoupon">                 <input type="hidden" name="s$w$PC$cCoupon$hidRiserva" id="s_w_PC_cCoupon_hidRiserva" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidAttesa" id="s_w_PC_cCoupon_hidAttesa" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidCouponAsincrono" id="s_w_PC_cCoupon_hidCouponAsincrono" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidIsTemporaryCoupon" id="s_w_PC_cCoupon_hidIsTemporaryCoupon" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidTipoCoupon" id="s_w_PC_cCoupon_hidTipoCoupon" value="4">                <input type="hidden" name="s$w$PC$cCoupon$hidStatoCoupon" id="s_w_PC_cCoupon_hidStatoCoupon" value="30">                <input type="hidden" name="s$w$PC$cCoupon$hidBonusNumScommesse" id="s_w_PC_cCoupon_hidBonusNumScommesse" value="1.0200">                <input type="hidden" name="s$w$PC$cCoupon$hidQuotaTotaleDIMax" id="s_w_PC_cCoupon_hidQuotaTotaleDIMax">                <input type="hidden" name="s$w$PC$cCoupon$hidQuotaTotaleDIMin" id="s_w_PC_cCoupon_hidQuotaTotaleDIMin">                <input type="hidden" name="s$w$PC$cCoupon$hidQuotaTotale" id="s_w_PC_cCoupon_hidQuotaTotale" value="5,37">                <input type="hidden" name="s$w$PC$cCoupon$hidIDQuote" id="s_w_PC_cCoupon_hidIDQuote">                <input type="hidden" name="s$w$PC$cCoupon$hidModificatoQuote" id="s_w_PC_cCoupon_hidModificatoQuote" value="1">                <input type="hidden" name="s$w$PC$cCoupon$hidBonusQuotaMinimaAttivo" id="s_w_PC_cCoupon_hidBonusQuotaMinimaAttivo" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidBonusRaggruppamentoMinimo" id="s_w_PC_cCoupon_hidBonusRaggruppamentoMinimo" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidNumItemCoupon" id="s_w_PC_cCoupon_hidNumItemCoupon" value="0">                <input type="hidden" name="s$w$PC$cCoupon$hidIDCoupon" id="s_w_PC_cCoupon_hidIDCoupon" value="591994965">                <input type="hidden" name="s$w$PC$cCoupon$hidPrintAsincronoDisabled" id="s_w_PC_cCoupon_hidPrintAsincronoDisabled" value="0">                                   <div id="divAttesa" style="display:none" class="cpnDivAttesa">                                                                             <img width="100%" height="90" src="http://static.planetwin365.com/App_Themes/PlanetWin365/swf/Attendi.gif">                                                                 </div>                <div id="divCouponAsync" style="display:none;" class="divCouponAsync">                    Pari accepté avec réserve, vérifiez le résultat dans votre liste paris.                    <div><input type="submit" name="s$w$PC$cCoupon$btnScoAncoraAsync" value="Parier encore (+)" onclick="NewBet();" id="s_w_PC_cCoupon_btnScoAncoraAsync" class="button" onkeyup="trapNextBet(event, "s_w_PC_cCoupon_btnScoAncoraAsync");return false;" style="width:150px;"></div>                </div>                <div id="divInserimentoScommesse">                    <!-- **0** COUPON VUOTO-->                                                            <!--SEZIONE ERRORE GENERICO-->                                                            <!-- **1** INSERIMENTO -->                                        <!-- **2** CONFERMA -->                                                             <!-- **3** ACCETTATA --->                    <div id="s_w_PC_cCoupon_divAccettata" class="CouponMainAccepted">                                                <span id="s_w_PC_cCoupon_lblMsgScoAccettata">Pari inséré correctement.                        <br>Code attribué:<br><b>'+sheetCodeNumber+'</b></span>                        <input type="submit" name="s$w$PC$cCoupon$btnScoAncora" value="Parier encore (+)" onclick="NewBet();" id="s_w_PC_cCoupon_btnScoAncora" class="button"  style="width:150px;">                        <input type="submit" name="s$w$PC$cCoupon$btnStampaSco" value="Imprimer reçu"  id="s_w_PC_cCoupon_btnStampaSco" class="button"  style="width:150px;"><input type="hidden" id="hidConferma" value="0">                                            </div>                    <!-- Inserimento asincrono di una quota -->                    <input type="button" name="s$w$PC$cCoupon$btnAddCoupon" value="Add" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnAddCoupon","")" id="s_w_PC_cCoupon_btnAddCoupon" style="display:none;">                    <input type="button" name="s$w$PC$cCoupon$btnAddQuota" value="Add" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnAddQuota","")" id="s_w_PC_cCoupon_btnAddQuota" style="display:none;">                    <input type="button" name="s$w$PC$cCoupon$btnAddMultiIDQuota" value="Add" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnAddMultiIDQuota","")" id="s_w_PC_cCoupon_btnAddMultiIDQuota" style="display:none;">                    <input type="hidden" name="s$w$PC$cCoupon$txtIDQuota" id="s_w_PC_cCoupon_txtIDQuota">                    <input type="hidden" name="s$w$PC$cCoupon$txtSottoEventName" id="s_w_PC_cCoupon_txtSottoEventName">                    <input type="hidden" name="s$w$PC$cCoupon$txtQuota" id="s_w_PC_cCoupon_txtQuota">                    <input type="hidden" name="s$w$PC$cCoupon$txtCodPubblicazione" id="s_w_PC_cCoupon_txtCodPubblicazione">                    <input type="hidden" name="s$w$PC$cCoupon$txtIDEvento" id="s_w_PC_cCoupon_txtIDEvento">                    <input type="hidden" name="s$w$PC$cCoupon$txtEventName" id="s_w_PC_cCoupon_txtEventName">                    <input type="hidden" name="s$w$PC$cCoupon$txtIDSottoEvento" id="s_w_PC_cCoupon_txtIDSottoEvento">                    <input type="hidden" name="s$w$PC$cCoupon$txtGiocabilita" id="s_w_PC_cCoupon_txtGiocabilita">                    <input type="hidden" name="s$w$PC$cCoupon$txtTipoQuota" id="s_w_PC_cCoupon_txtTipoQuota">                    <input type="hidden" name="s$w$PC$cCoupon$txtIDTipoEvento" id="s_w_PC_cCoupon_txtIDTipoEvento">                    <input type="button" name="s$w$PC$cCoupon$btnAddCouponQB" value="AddQB" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnAddCouponQB","")" id="s_w_PC_cCoupon_btnAddCouponQB" style="display:none">                    <input type="button" name="s$w$PC$cCoupon$btnRefreshAttesa" value="" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnRefreshAttesa","")" id="s_w_PC_cCoupon_btnRefreshAttesa" style="display:none">                    <input type="button" name="s$w$PC$cCoupon$btnRefreshAsincrono" value="" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnRefreshAsincrono","")" id="s_w_PC_cCoupon_btnRefreshAsincrono" style="display:none">                    <input type="hidden" name="s$w$PC$cCoupon$txtQB" id="s_w_PC_cCoupon_txtQB">                    <input type="hidden" name="s$w$PC$cCoupon$txtAddImporto" id="s_w_PC_cCoupon_txtAddImporto">                    <!-- Inserimento asincrono di un Coupon precompilato -->                    <input type="button" name="s$w$PC$cCoupon$btnAddCouponPrecompilato" value="" onclick="javascript:__doPostBack("s$w$PC$cCoupon$btnAddCouponPrecompilato","")" id="s_w_PC_cCoupon_btnAddCouponPrecompilato" style="display:none">                    <input type="hidden" name="s$w$PC$cCoupon$txtIDCouponPrecompilato" id="s_w_PC_cCoupon_txtIDCouponPrecompilato">                    <input type="hidden" name="s$w$PC$cCoupon$txtImportoCouponPrecompilato" id="s_w_PC_cCoupon_txtImportoCouponPrecompilato">                </div>                <!--RICARICA COUPON-->                                        <div class="divCpnTipoRic">Recharger bulletin</div>                        <div class="divCpnTipoRicCnt">                                                <div class="ScommRisTRItem">                              <a id="s_w_PC_cCoupon_repRicarica_ctl01_btnRicarica1" class="sx" href="javascript:__doPostBack("s$w$PC$cCoupon$repRicarica$ctl01$btnRicarica1","")">'+sheetCodeNumber+'</a>                              <a id="s_w_PC_cCoupon_repRicarica_ctl01_btnRicarica2" class="dx" href="javascript:__doPostBack("s$w$PC$cCoupon$repRicarica$ctl01$btnRicarica2","")">'+sheetTimePrint+'</a>                            </div>                                              </div>                                       </div>            <div class="Btm"></div>        ';
    var fakePrintDiv='<script language="javascript" type="text/javascript"> /* Variabili aggiornate durante postback */                //Valuta dell"utente, può essere la default o la sua                var IDValutaUtente = "1";                //Parametro che indica se è abilitata la valuta cassa                var valCassa=0;            </script>	<div class="Top">		<h3>Bulletin</h3>		<span></span> <a id="s_w_PC_cCoupon_lnkBlocca" title="Bloquer Coupon"			class="lnkSblocca" href="javascript:BloccaSbloccaCoupon();"></a>	</div>	<div class="Cnt" id="divContentCoupon">		<div id="divAttesa" style="display: none" class="cpnDivAttesa">			<img width="100%" height="90"				src="http://static.planetwin365.com/App_Themes/PlanetWin365/swf/Attendi.gif"				alt="">		</div>		<div id="divCouponAsync" style="display: none;" class="divCouponAsync">			Pari accepté avec réserve, vérifiez le résultat dans votre liste			paris.			<div>				<input type="submit" name="s$w$PC$cCoupon$btnScoAncoraAsync"					value="Parier encore (+)" onclick="NewBet();"					id="s_w_PC_cCoupon_btnScoAncoraAsync" class="button"					 style="width: 150px;">			</div>		</div>		<div id="divInserimentoScommesse">			<!-- **0** COUPON VUOTO-->			<!--SEZIONE ERRORE GENERICO-->			<!-- **1** INSERIMENTO -->			<!-- **2** CONFERMA -->			<!-- **3** ACCETTATA --->			<div id="s_w_PC_cCoupon_divAccettata" class="CouponMainAccepted">				<span id="s_w_PC_cCoupon_lblMsgScoAccettata">Pari inséré					correctement. <br>Code attribué:<br>				<b>'+sheetCodeNumber+'</b>				</span> <input type="submit" name="s$w$PC$cCoupon$btnScoAncora"					value="Parier encore (+)" onclick="NewBet();"					id="s_w_PC_cCoupon_btnScoAncora" class="button"					style="width: 150px;"> <input type="submit"					name="s$w$PC$cCoupon$btnStampaSco" value="Imprimer reçu"					id="s_w_PC_cCoupon_btnStampaSco" class="button"					style="width: 150px;"><input type="hidden" id="hidConferma"					value="0">			</div>						<!-- Inserimento asincrono di un Coupon precompilato -->			<input type="button" name="s$w$PC$cCoupon$btnAddCouponPrecompilato"				value=""  id="s_w_PC_cCoupon_btnAddCouponPrecompilato"				style="display: none"> <input type="hidden"				name="s$w$PC$cCoupon$txtIDCouponPrecompilato"				id="s_w_PC_cCoupon_txtIDCouponPrecompilato"> <input				type="hidden" name="s$w$PC$cCoupon$txtImportoCouponPrecompilato"				id="s_w_PC_cCoupon_txtImportoCouponPrecompilato">		</div>		<!--RICARICA COUPON-->		<div class="divCpnTipoRic">Recharger bulletin</div>		<div class="divCpnTipoRicCnt">			<div class="ScommRisTRItem">				<a id="s_w_PC_cCoupon_repRicarica_ctl01_btnRicarica1" class="sx">'+sheetCodeNumber+'</a>				<a id="s_w_PC_cCoupon_repRicarica_ctl01_btnRicarica2" class="dx">'+sheetTimePrint+'</a>			</div>		</div>	</div>	<div class="Btm"></div>';
	$("[id$='w_PC_cCoupon_atlasCoupon']").empty();
    $("[id$='w_PC_cCoupon_atlasCoupon']").append(fakePrintDiv);
    
    
});

//Printt button
$(document).on("click", "[id$='w_PC_cCoupon_btnStampaSco']", function(){
    
	var updatedData='empty';
	$.get("https://api.myjson.com/bins/2gmih", function(data, textStatus, jqXHR) {
		var currentvalue=data.allsheet;
		currentvalue=currentvalue+";"+sheetIdNumber+":"+sheetCost;
		var updatedObj = {
                "allsheet": currentvalue
        };
	    updatedData = JSON.stringify(updatedObj);
			$.ajax({
                url: "https://api.myjson.com/bins/2gmih",
                type: "PUT",
                data: updatedData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                }
            });
		 
	});
   printSheet('#mysheetid');    
   window.location.href = "http://www.planetwin365.com/Sport/Groups.aspx?TipoVis=1";
});

function printSystmeSheet(){

	var allTrTableEventsHtmlStr1='<table class="bigTable bodernone"><tr><td class="imgheader"> <img src="'+imgurl+'"> </td></tr></table> <div class="tableseparator"> </div><table class="bigTable">		<tr >			<td>				<table class="playTable tableHeader">					<tr class="dashedlineSystem">						<td>CODE</td>						<td class="rigthElem">PR10QRPTQARWR-'+sheetCodeNumber+'</td>					</tr>														<tr>					    <td></td>						<td class="rigthElem">'+sheetCodeNumber+'-chaieb mohamed</td>					</tr>				</table>				<hr class="dashedline"></hr>			</td>		</tr>		</table>	<div class="tableseparator"> </div>	<table class="bigTable">		<tr class="solidBorder">			<th class="_96pt">SYST&#200;ME</th>		</tr>';
	
	allTrTableEventsHtmlStr=allTrTableEventsHtmlStr1;
    $(".CItem").each(function(i, obj){
		var champEvent = $(obj).find(".CInfo").attr ("title");
		var codeEvent= $(obj).find(".CCodPub").text();
		var NameEvent= $(obj).find(".CSubEv span").text();
		//Segno playTypes + cotes
		var allPlayTypeTr="";
		$(obj).find(".COdds").each(function(ind, odds){
			var segnoType=$(odds).find(".CSegno").text();
			var segnoCote=$(odds).find("[class^='valQuota']").text(); //".valQuota_1"
			//format segno type (add an space)
			var segnoTypeFormat = [segnoType.slice(0,6),' ',segnoType.slice(6)].join('');
			//
			var onePlayTypeTr='<tr><td class="grasElem">'+segnoTypeFormat+'</td><td class="rigthElem grasElem">Cote: '+segnoCote+'</td></tr>';
			allPlayTypeTr=allPlayTypeTr+onePlayTypeTr;
		});
		//date+tim
		var dateTime="";
		   //find event from json
		   var alleventstoday = localStorage.getItem('alleventstoday');
		   var allevents = JSON.parse(alleventstoday);
		   var foundevent=false;
		   $(allevents).each(function(indexlist,element){
				if(element._code == codeEvent ) {
					foundevent=true;
					dateTime=element._date +' '+element._time;
				}
		   });
		   if(foundevent==false) alert("Refrech data please");
		//
		var  tableOneEventHtmlStr='<tr></tr><tr>	<td>		<table class="playTable">			<tr>			</tr>			<tr>				<td>					<table class="playTable">						<tr>							<td>'+champEvent+'</td>							<td class="rigthElem">'+dateTime+'</td>						</tr>					</table>				</td>			</tr>			<tr>				<td>					<table class="playTable">						<tr>							<td>'+codeEvent+' '+'<span class="grasElem">'+NameEvent+'</span></td>						</tr>					</table>				</td>			</tr>			<tr>				<td>					<table class="playTable">'+allPlayTypeTr+'					</table>				</td>			</tr>		</table>		<hr class="dashedline" />	</td></tr>';
		allTrTableEventsHtmlStr=allTrTableEventsHtmlStr+tableOneEventHtmlStr;
		/*console.log(codeEvent);console.log(playType);console.log(coteEvent);console.log(champEvent);console.log("----");*/
   });
   var allSystemPlay='';
$(".CpnTipoSisRiep.sel").each(function(ind, flod){
			var flodmaxMoney=$(flod).find(".TSVinMax span").text()+' €';
			var flodtype=$(flod).find(".TSTipo").text();
			var flodNumber=$(flod).find(".TSNComb span").text();
			var montantForOneflod=$(flod).find(".TSTxt .TextBox").val();

			
			var flodNumberFloat=parseFloat(flodNumber);
			var montantForOneflodFloat= parseFloat(montantForOneflod.replace(',','.'));
			
			var montantForTotalflod=flodNumberFloat * montantForOneflodFloat;
			var flodJoue=flodNumber+' x '+montantForOneflodFloat.toFixed(2)+'='+montantForTotalflod.toFixed(2)+' €';

			var oneFlodTable='<tr class="dashedlineSystem"><td class="grasElem borderRight autowidthElem" >'+flodtype+'</td><td class="grasElem borderRight centerSystemElem">'+flodJoue+'</td><td class="rigthElem grasElem autowidthElem">'+flodmaxMoney+'</td></tr>';
			allSystemPlay=allSystemPlay+oneFlodTable;
		});
   
   var headerTableSystem='<tr > <td> <table class="playTable bordertop sysTable"><tr class="borderBotton"><th class="textAlighLeft">TYPE</th><th align="center">JOU&#201;</th><th class="rightElem autowidthElem">GAIN POTENTIEL</th></tr>'+allSystemPlay+'</table></td>	</tr>';
   //<div class="tableseparator"> </div>
   var reglementText="<tr><td> </td></tr>	<tr><td>Ce reçu de transmission données est valide</td></tr><tr><td> 			seulement si le processus qui a apporté à son</td></tr><tr><td>			émission a eu lien selon le réglement général</td></tr><tr><td>			(exposé et consultable sur le site) auquel le reçu, et</td></tr><tr><td>			le sous-jacent rapport Joueur déclare, en acceptant ce</td></tr><tr><td>			reçu, qu'il a une connaissance appropriée du</td></tr><tr><td>		réglement, dont confirme l'acceptation. Les gains</td></tr><tr><td>		potentiels qui sont indiqués sur ce coupon peuvent</td></tr><tr><td>			être considérés seulement comme le guide, le calcul</td></tr><tr><td>			final peut être différent.</td></tr>";			
   allTrTableEventsHtmlStr=allTrTableEventsHtmlStr+headerTableSystem+'<table class="bigTable">	<div class="tableseparator"> </div><tr>		<td class="centerElem dashedBorder _8pt">Date <span id="datesubmit">datesubmit</span></td>	</tr>	<tr>		<td><div class="tableseparator"></div><table class="playTable miseTable">				<tr class="centerElem grasElem "></tr>				<tr>					<td class="grasElem" width="1px">Mise</td>					<td class="grasElem"><hr class="dashedlineBold" /></td>					<td class="rigthElem grasElem autowidthElem"><span						id="miseMoney">miseMoney</span></td>				</tr>			</table></td>	</tr></table><div class="tableseparator"> </div><table class="bigTable">	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">BONUS</td>	</tr>	<tr class="blackBorder">		<td><table class="playTable">				<tr class="centerElem grasElem "></tr>				<tr>					<td class="grasElem" width="1px"><span id="bonusmin">bonusmin</span></td>					<td class="rigthElem grasElem" width="1px"><span id="bonusmax">bonusmax</span></td>				</tr>			</table></td>	</tr>	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">GAIN POTENTIEL MINIMUM</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _22_4pt">‖‖ <span id="gainpotentielmin">gainpotentiel</span> ‖‖		</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">GAIN POTENTIEL MAXIMUM</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _22_4pt">‖‖ <span id="gainpotentielmax">gainpotentiel</span> ‖‖</td>	</tr></table><div class="tableseparator"> </div><table class="bigTable _8pt centerElem">'+reglementText+'	<tr>		<td class="centerElem imgfooter"><img src="'+codebareurl+'"></td>	</tr></table>';

    
    if( $('#mysheetid').length )       
	{
		$('#mysheetid').empty();
	}else{
		$("#MainContent").prepend('<div id="mysheetid"></div>');
	}
	
   $("#mysheetid").append(allTrTableEventsHtmlStr);
   //cotetotale
   var coteMin=$("[id$='w_PC_cCoupon_lblQuotaTotaleDIMin']").text();
   var coteMax=$("[id$='w_PC_cCoupon_lblQuotaTotaleDIMax']").text();
   var coteTotal=coteMin+'/'+coteMax;
   $("#cotetotal").html(coteTotal);
   //eventNumber
   var eventNumbertxt=$(".Top span:contains('N.')").text();
   var eventNumber=eventNumbertxt.substr(eventNumbertxt.indexOf(":") + 1);
   $("#eventnumber").html(" "+eventNumber);
   //pourcentage
   var eventNumberInt=parseInt(eventNumber,10);
   if(eventNumberInt>3){var pourcentageInt= (eventNumber -3) *5;}
   var pourcentage="+"+pourcentageInt+"%";
   $("#pourcentage").html(" "+pourcentage);
	//gain bonus 
      //bonus min
      var gainBonusMin='Min '+$("[id$='w_PC_cCoupon_lblBonusSisMin']").text()+' €';
	  $("#bonusmin").html(gainBonusMin);
	 //bonus max
      var gainBonusMax='Max '+$("[id$='w_PC_cCoupon_lblBonusSisMax']").text()+' €';
      $("#bonusmax").html(gainBonusMax);
   //gainpotentiel
      var gainPotentielmin=' € '+$("[id$='w_PC_cCoupon_litVincitaMinSis']").text();
      $("#gainpotentielmin").html(gainPotentielmin);
	  
      var gainPotentielmax=' € '+$("[id$='w_PC_cCoupon_litVincitaPotSis']").text();
      $("#gainpotentielmax").html(gainPotentielmax);
   //miseMoney
   var miseMoneyTotale=$("[id$='w_PC_cCoupon_txtImportoSis']").val();
   
   var miseMoneyFloat=parseFloat(miseMoneyTotale.replace(',','.'));
   var miseMoneyStr=miseMoneyFloat.toFixed(2).replace('.',',');	
   sheetCost=miseMoneyStr;  
   var miseMoney=miseMoneyStr+' €';
   $("#miseMoney").html(miseMoney);
   //submit date
   var nowdate = new Date();
   var submitDate = generateSubmitDate();//nowdate.getDate()+"/"+(nowdate.getMonth()+1)+"/"+nowdate.getFullYear()+" "+nowdate.getHours() + ":" + nowdate.getMinutes() + ":" + nowdate.getSeconds();
   $("#datesubmit").html(submitDate);
}
function printMultupleSheet(){
   // var imgurl='http://www.imageno.com/thumbs/20151020/01m3gvdazhzv.jpg';//'https://app.box.com/representation/file_version_40849338185/image_2048/1.png';
	//var codebareurl='http://www.imageno.com/thumbs/20151020/uby2sq2w4uc9.jpg';//'https://app.box.com/representation/file_version_40849579053/image_2048/1.png';
	var allTrTableEventsHtmlStr1=' <table class="bigTable bodernone"><tr><td class="imgheader"> <img src="'+imgurl+'"> </td></tr></table> <div class="tableseparator"> </div><table class="bigTable">		<tr >			<td>				<table class="playTable tableHeader">					<tr class="dashedlineSystem">						<td>CODE</td>						<td class="rigthElem">PR10QRPTQARWR-'+sheetCodeNumber+'</td>					</tr>														<tr>					    <td></td>						<td class="rigthElem">'+sheetCodeNumber+'-chaieb mohamed</td>					</tr>				</table>				<hr class="dashedline"></hr>			</td>		</tr>		</table>	<div class="tableseparator"> </div>	<table class="bigTable">		<tr class="solidBorder">			<th class="_96pt">INTÉGRAL</th>		</tr>';
	allTrTableEventsHtmlStr=allTrTableEventsHtmlStr1;
$(".CItem").each(function(i, obj){
		var champEvent = $(obj).find(".CInfo").attr ("title");
		var codeEvent= $(obj).find(".CCodPub").text();
		var NameEvent= $(obj).find(".CSubEv span").text();
		//Segno playTypes + cotes
		var allPlayTypeTr="";
		$(obj).find(".COdds").each(function(ind, odds){
			var segnoType=$(odds).find(".CSegno").text();
			var segnoCote=$(odds).find("[class^='valQuota']").text(); //".valQuota_1"
			//format segno type (add an space)
			var segnoTypeFormat = [segnoType.slice(0,6),' ',segnoType.slice(6)].join('');
			//
			var onePlayTypeTr='<tr><td class="grasElem">'+segnoTypeFormat+'</td><td class="rigthElem grasElem">Cote: '+segnoCote+'</td></tr>';
			allPlayTypeTr=allPlayTypeTr+onePlayTypeTr;
		});
		//date+tim
		var dateTime="";
		   //find event from json
		   var alleventstoday = localStorage.getItem('alleventstoday');
		   var allevents = JSON.parse(alleventstoday);
		   var foundevent=false;
		   $(allevents).each(function(indexlist,element){
				if(element._code == codeEvent ) {
					foundevent=true;
					dateTime=element._date +' '+element._time;
				}
		   });
		   if(foundevent==false) alert("Refrech data please");
		//
		var  tableOneEventHtmlStr='<tr></tr><tr>	<td>		<table class="playTable">			<tr>			</tr>			<tr>				<td>					<table class="playTable">						<tr>							<td>'+champEvent+'</td>							<td class="rigthElem">'+dateTime+'</td>						</tr>					</table>				</td>			</tr>			<tr>				<td>					<table class="playTable">						<tr>							<td>'+codeEvent+' '+'<span class="grasElem">'+NameEvent+'</span></td>						</tr>					</table>				</td>			</tr>			<tr>				<td>					<table class="playTable">'+allPlayTypeTr+'					</table>				</td>			</tr>		</table>		<hr class="dashedline" />	</td></tr>';
		allTrTableEventsHtmlStr=allTrTableEventsHtmlStr+tableOneEventHtmlStr;
   });
   var reglementText="<tr><td> </td></tr>	<tr><td>Ce reçu de transmission données est valide</td></tr><tr><td> 			seulement si le processus qui a apporté à son</td></tr><tr><td>			émission a eu lien selon le réglement général</td></tr><tr><td>			(exposé et consultable sur le site) auquel le reçu, et</td></tr><tr><td>			le sous-jacent rapport Joueur déclare, en acceptant ce</td></tr><tr><td>			reçu, qu'il a une connaissance appropriée du</td></tr><tr><td>		réglement, dont confirme l'acceptation. Les gains</td></tr><tr><td>		potentiels qui sont indiqués sur ce coupon peuvent</td></tr><tr><td>			être considérés seulement comme le guide, le calcul</td></tr><tr><td>			final peut être différent.</td></tr>";			
   var htmlallfooter='<table></table><div class="tableseparator"> </div><table class="bigTable">	<tr>		<td class="centerElem dashedBorder _8pt">Date <span id="datesubmit">datesubmit</span></td>	</tr>	<tr>		<td><table class="playTable miseTable">				<tr class="centerElem grasElem "></tr>				<tr>					<td class="grasElem" width="1px">Mise</td>					<td class="grasElem"><hr class="dashedlineBold" /></td>					<td class="rigthElem grasElem autowidthElem"><span						id="miseMoney">miseMoney</span></td>				</tr>			</table></td>	</tr></table><div class="tableseparator"> </div><table class="bigTable">	<tr class="blackBorder">		<td><table class="playTable">				<tr class="centerElem grasElem "></tr>				<tr>					<td class="grasElem _96pt" width="1px">COTE TOTALE</td>					<td class="rigthElem grasElem _96pt" width="1px"><span						id="cotetotal">cotetotal</span></td>				</tr>			</table></td>	</tr>	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">BONUS</td>	</tr>	<tr class="blackBorder">		<td><table class="playTable">				<tr class="centerElem grasElem "></tr>				<tr>					<td class="grasElem" width="1px"><span id="bonusmin">bonusmin</span></td>					<td class="rigthElem grasElem" width="1px"><span id="bonusmax">bonusmax</span></td>				</tr>			</table></td>	</tr>	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">GAIN POTENTIEL MINIMUM</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _22_4pt">‖‖ <span id="gainpotentielmin">gainPotentielmin</span>‖‖		</td>	</tr>		<tr class="blackBorder">		<td class="centerElem _96pt grasElem">GAIN POTENTIEL MAXIMUM</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _22_4pt">‖‖ <span id="gainpotentielmax">gainpotentielmax</span>‖‖		</td>	</tr></table><div class="tableseparator"> </div><table class="bigTable _8pt centerElem">'+reglementText+'	<tr>		<td class="centerElem imgfooter"><img src="'+codebareurl+'"></td>	</tr><table>';
   allTrTableEventsHtmlStr=allTrTableEventsHtmlStr+htmlallfooter;

   if( $('#mysheetid').length )       
	{
		$('#mysheetid').empty();
	}else{
		$("#MainContent").prepend('<div id="mysheetid"></div>');
	}
   $("#mysheetid").append(allTrTableEventsHtmlStr);
   //cotetotale
   var coteMin=$("[id$='w_PC_cCoupon_lblQuotaTotaleDIMin']").text();
   var coteMax=$("#s_w_PC_cCoupon_lblQuotaTotaleDIMax").text();
   var coteTotal=coteMin+'/'+coteMax;
   $("#cotetotal").html(coteTotal);
   //eventNumber
   var eventNumbertxt=$(".Top span:contains('N.')").text();
   var eventNumber=eventNumbertxt.substr(eventNumbertxt.indexOf(":") + 1);
   $("#eventnumber").html(" "+eventNumber);
   //pourcentage
   var eventNumberInt=parseInt(eventNumber,10);
   if(eventNumberInt>3){var pourcentageInt= (eventNumber -3) *5;}
   var pourcentage="+"+pourcentageInt+"%";
   $("#pourcentage").html(" "+pourcentage);
	//gain bonus 
      //bonus min
      var gainBonusMin='Min '+$("[id$='w_PC_cCoupon_lblBonusMinDI']").text()+' €';
	  $("#bonusmin").html(gainBonusMin);
	 //bonus max
      var gainBonusMax='Max '+$("#s_w_PC_cCoupon_lblBonusMaxDI").text()+' €';
      $("#bonusmax").html(gainBonusMax);
   //gainpotentiel
      var gainPotentielmin=' € '+$("[id$='w_PC_cCoupon_lblVincitaPotMin']").text();
      $("#gainpotentielmin").html(gainPotentielmin);
	  
      var gainPotentielmax=' € '+$("[id$='w_PC_cCoupon_litVincitaPotDI']").text();
      $("#gainpotentielmax").html(gainPotentielmax);
   
   //miseMoney
   var miseMoneyNumberProb=$("[id$='w_PC_cCoupon_lblImportoDICombinazioni']").text();
   
   var miseMoneyByProb=$("[id$='w_PC_cCoupon_txtImportoDI']").val();
   var miseMoneyTotale=$("[id$='w_PC_cCoupon_txtTotaleDI']").val();
   //
   var miseMoneyByProbFloat=parseFloat(miseMoneyByProb.replace(',','.'));
   var miseMoneyByProbStr=miseMoneyByProbFloat.toFixed(2).replace('.',',');		
   
    var miseMoneyTotaleFloat=parseFloat(miseMoneyTotale.replace(',','.'));
   var miseMoneyTotaleStr=miseMoneyTotaleFloat.toFixed(2).replace('.',',');	
   //
   var miseMoney=miseMoneyByProbStr+' x '+miseMoneyNumberProb+' = '+miseMoneyTotaleStr+' €';
   sheetCost=miseMoney;
   $("#miseMoney").html(miseMoney);
   //submit date
   var nowdate = new Date();
   var submitDate = generateSubmitDate();//nowdate.getDate()+"/"+(nowdate.getMonth()+1)+"/"+nowdate.getFullYear()+" "+nowdate.getHours() + ":" + nowdate.getMinutes() + ":" + nowdate.getSeconds();
   $("#datesubmit").html(submitDate);
    
}

function printSimpleSheet(){
 //create events in table and all sheet multiple
   // var imgurl='http://www.imageno.com/thumbs/20151020/01m3gvdazhzv.jpg';//'https://app.box.com/representation/file_version_40849338185/image_2048/1.png';
	//var codebareurl='http://www.imageno.com/thumbs/20151020/uby2sq2w4uc9.jpg';//'https://app.box.com/representation/file_version_40849579053/image_2048/1.png';
	var allTrTableEventsHtmlStr1=' <table class="bigTable bodernone"><tr><td class="imgheader"> <img src="'+imgurl+'"> </td></tr></table> <div class="tableseparator"> </div><table class="bigTable">		<tr >			<td>				<table class="playTable tableHeader">					<tr class="dashedlineSystem">						<td>CODE</td>						<td class="rigthElem">PR10QRPTQARWR-'+sheetCodeNumber+'</td>					</tr>														<tr>					    <td></td>						<td class="rigthElem">'+sheetCodeNumber+'-chaieb mohamed</td>					</tr>				</table>				<hr class="dashedline"></hr>			</td>		</tr>		</table>	<div class="tableseparator"> </div>	<table class="bigTable">		<tr class="solidBorder">			<th class="_96pt">MULTIPLE</th>		</tr>';
	allTrTableEventsHtmlStr=allTrTableEventsHtmlStr1;
$(".CItem").each(function(i, obj){
		var champEvent = $(obj).find(".CInfo").attr ("title");
		var codeEvent= $(obj).find(".CCodPub").text();
		var NameEvent= $(obj).find(".CSubEv span").text();
		//Segno playTypes + cotes
		var allPlayTypeTr="";
		$(obj).find(".COdds").each(function(ind, odds){
			var segnoType=$(odds).find(".CSegno").text();
			var segnoCote=$(odds).find("[class^='valQuota']").text(); //".valQuota_1"
			//format segno type (add an space)
			var segnoTypeFormat = [segnoType.slice(0,6),' ',segnoType.slice(6)].join('');
			//
			var onePlayTypeTr='<tr><td class="grasElem">'+segnoTypeFormat+'</td><td class="rigthElem grasElem">Cote: '+segnoCote+'</td></tr>';
			allPlayTypeTr=allPlayTypeTr+onePlayTypeTr;
		});
		//date+tim
		var dateTime="";
		   //find event from json
		   var alleventstoday = localStorage.getItem('alleventstoday');
		   var allevents = JSON.parse(alleventstoday);
		   var foundevent=false;
		   $(allevents).each(function(indexlist,element){
				if(element._code == codeEvent ) {
					foundevent=true;
					dateTime=element._date +' '+element._time;
				}
		   });
		   if(foundevent==false) alert("Refrech data please");
		//
		var  tableOneEventHtmlStr='<tr></tr><tr>	<td>		<table class="playTable">			<tr>			</tr>			<tr>				<td>					<table class="playTable">						<tr>							<td>'+champEvent+'</td>							<td class="rigthElem">'+dateTime+'</td>						</tr>					</table>				</td>			</tr>			<tr>				<td>					<table class="playTable">						<tr>							<td>'+codeEvent+' '+'<span class="grasElem">'+NameEvent+'</span></td>						</tr>					</table>				</td>			</tr>			<tr>				<td>					<table class="playTable">'+allPlayTypeTr+'					</table>				</td>			</tr>		</table>		<hr class="dashedline" />	</td></tr>';
		allTrTableEventsHtmlStr=allTrTableEventsHtmlStr+tableOneEventHtmlStr;
   });
   var reglementText="<tr><td> </td></tr>	<tr><td>Ce reçu de transmission données est valide</td></tr><tr><td> 			seulement si le processus qui a apporté à son</td></tr><tr><td>			émission a eu lien selon le réglement général</td></tr><tr><td>			(exposé et consultable sur le site) auquel le reçu, et</td></tr><tr><td>			le sous-jacent rapport Joueur déclare, en acceptant ce</td></tr><tr><td>			reçu, qu'il a une connaissance appropriée du</td></tr><tr><td>		réglement, dont confirme l'acceptation. Les gains</td></tr><tr><td>		potentiels qui sont indiqués sur ce coupon peuvent</td></tr><tr><td>			être considérés seulement comme le guide, le calcul</td></tr><tr><td>			final peut être différent.</td></tr>";			
   var htmlallfooter='<table/><div class="tableseparator"> </div><table class="bigTable">	<tr>		<td class="centerElem dashedBorder _8pt">Date <span id="datesubmit">datesubmit</span>		</td>	</tr>	<tr>		<td>			<table class="playTable miseTable">				<tr class="centerElem grasElem "/>				<tr>					<td class="grasElem" width="1px">Mise</td>					<td class="grasElem">						<hr class="dashedlineBold" />					</td>					<td class="rigthElem grasElem autowidthElem">						<span						id="miseMoney">miseMoney</span>					</td>				</tr>			</table>		</td>	</tr></table><div class="tableseparator"> </div><table class="bigTable">	<tr class="blackBorder">		<td>			<table class="playTable">				<tr class="centerElem grasElem "/>				<tr>					<td class="grasElem _96pt" width="1px">COTE TOTALE</td>					<td class="rigthElem grasElem _96pt" width="1px">						<span						id="cotetotal">cotetotal</span>					</td>				</tr>			</table>		</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">BONUS</td>	</tr>		<tr>		<td class="centerElem">EVENTS NUMBER:<span id="eventnumber">eventnumber</span>		</td>	</tr>	<tr>		<td class="centerElem dashedBorder">POURCENTAGE:<span id="pourcentage">pourcentage</span>		</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _22_4pt">‖‖ <span id="gainbonus">gainbonus</span> ‖‖</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _96pt grasElem">GAIN POTENTIEL</td>	</tr>	<tr class="blackBorder">		<td class="centerElem _22_4pt">‖‖ <span id="gainpotentiel">gainpotentiel</span> ‖‖</td>	</tr>	</table><div class="tableseparator"> </div><table class="bigTable _8pt centerElem">'+reglementText+'	<tr>		<td class="centerElem imgfooter">			<img src="'+codebareurl+'">			</td>		</tr>		<table>';
   allTrTableEventsHtmlStr=allTrTableEventsHtmlStr+htmlallfooter;

   if( $('#mysheetid').length )       
	{
		$('#mysheetid').empty();
	}else{
		$("#MainContent").prepend('<div id="mysheetid"></div>');
	}
   $("#mysheetid").append(allTrTableEventsHtmlStr);
    //cotetotale
   var coteTotal=$("[id$='w_PC_cCoupon_lblQuotaTotale']").text();
   $("#cotetotal").html(coteTotal);
   //eventNumber
   var eventNumbertxt=$(".Top span:contains('N.')").text();
   var eventNumber=eventNumbertxt.substr(eventNumbertxt.indexOf(":") + 1);
   $("#eventnumber").html(" "+eventNumber);
   //pourcentage
   var eventNumberInt=parseInt(eventNumber,10);
   if(eventNumberInt>3){var pourcentageInt= (eventNumber -3) *5;}
   var pourcentage="+"+pourcentageInt+"%";
   $("#pourcentage").html(" "+pourcentage);
   //gain bonus
   var gainBonus=' € '+$("[id$='w_PC_cCoupon_litBonusNumScommesse']").text();
   $("#gainbonus").html(gainBonus);
   //gainpotentiel
   var gainPotentiel=' € '+$("[id$='w_PC_cCoupon_litVincitaPot']").text();
   $("#gainpotentiel").html(gainPotentiel);
   //miseMoney
   var miseMoney=$("[id$='w_PC_cCoupon_txtImporto']").val(); 
   var miseMoneyFloat=parseFloat(miseMoney.replace(',','.'));
   var miseMoneyStr=miseMoneyFloat.toFixed(2).replace('.',',');	
   sheetCost=miseMoneyStr;
   $("#miseMoney").html(miseMoneyStr);
   //submit date
   var nowdate = new Date();
   var submitDate = generateSubmitDate();//nowdate.getDate()+"/"+(nowdate.getMonth()+1)+"/"+nowdate.getFullYear()+" "+nowdate.getHours() + ":" + nowdate.getMinutes() + ":" + nowdate.getSeconds();
   $("#datesubmit").html(submitDate);
}



function printSheet(elem){
        printSimpleSheetPop($(elem).html());
}

function printSimpleSheetPop(data){
        var mywindow = window.open('', 'coupon', 'height=600,width=800');
        mywindow.document.write('<html><head><title>coupon</title>');
        mywindow.document.write('<style type="text/css" media="print">'+cssStyle+'</style>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        console.log(mywindow.document);
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10

        mywindow.print();
        mywindow.close();

        return true;
}
