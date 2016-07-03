javascript:(function () {
	var main=window.frames["bottomFrame"].frames["mainFrame"];
	var tab = main.document.querySelector(".displayTag");
	var score = 0;
	var total_g = 0;
	for (var i = tab.rows.length - 1; i > 0; i--) {
		var tmp_score = 0; 
		var tmp_g = 0;
		for (var j = 0;j < tab.rows[i].cells.length ;j++) {
			if(j == 4) {
				var s = tab.rows[i].cells[j].innerHTML.replace(/\./,"0.");
				total_g += parseFloat(s.replace(/[^0-9\.]/ig,""));
				tmp_g = parseFloat(s.replace(/[^0-9\.]/ig,""));
			}
			else if(j == 6) {
				tmp_score = parseFloat(tab.rows[i].cells[j].innerHTML.replace(/[^0-9]/ig,""));
				if(tmp_score == "" || isNaN(tmp_score) ){
					total_g -= tmp_g;
					continue;
				}
				else{
					score += tmp_score*tmp_g;
				}
			}
		}
	}
	alert("这学期的加权平均分为："+score/total_g);
})();
