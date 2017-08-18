function onLoad(){
	//g_form.setVariablesReadOnly(true);
	//alert("1");
try{
		//Get the 'Variables' section
	//alert("2");
		var ve = $('variable_map').up('table');
		//Disable all elements within with a class of 'cat_item_option'
		ve.select('.cat_item_option','.questionsetreference').each(function(elmt){
			elmt.disabled = true;
			elmt.readOnly = true;
			
		});
		///////////
		//Make slushbucket type variables read only instead of disabling so that user can scroll through the selected records to get record previews & disable double click ability on the elements so that records cannot be 'unselected'
		ve.select('.slushselectmtm').each(function(elmt){
			//alert("1");
			//myLc captures the name of the list collector variable
			var myLc = elmt.name;
			//check if the slushbucket is the left side which is identified by <<list_collector_name>> + "_select_0"
			if(myLc.endsWith("select_0")){
				//we only want to hide te elements for the left side slushbucket
				elmt.readOnly = true;
				elmt.ondblclick = function(){return false;};
				//hide the filters
				document.getElementById("ep").rows[0].style.display="none";
				document.getElementById("ep").rows[1].style.display="none";
				//Hide the Text - Use "Add Filter" and "Run Filter" to isolate the records to pick from
				document.getElementsByClassName('tdwrap')[0].style.display='none';
				//Hide the left side slushbucket
				var lb = gel(myLc);
				lb.hide();
				//Hide the search box for the left side slush bucket
				var lbSearchRow = gel(myLc + '_search_row');
				lbSearchRow.hide();
				//Hide the title for the left side slush bucket
				var lbTitleRow = gel(myLc + '_title_row');
				lbTitleRow.hide();
			}
		});
		
		
		
		/////////
		//Remove any reference or calendar icons
		ve.select('img[src*=reference_list.gifx]', 'img[src*=small_calendar.gifx]').each(function(img){
			img.hide();
		});
		//Hide list collector icons
		ve.select('img[src*=arrow]').each(function(img){
			img.up('table').hide();
		});
	}
	catch(e){}
}