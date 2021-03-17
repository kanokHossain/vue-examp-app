$(document).ready(function () {
var url = window.location.href;
var url_arr=url.split("/");
//var parameter=url_arr[url_arr.length-1];
var parameter=url_arr[6];
var classId=parseInt(parameter);
if(url_arr[7]){
    var shiftId=parseInt(url_arr[7]);
}else{
     var shiftId=0;
}
if(url_arr[8]){
    var versionId=parseInt(url_arr[8]);
}else{
    var versionId=0;
}
if(Number.isInteger(classId)){
    var id=classId;
}else{
    var id='';
}
//alert(url_arr);

    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };

    var oTable = $('#example_students');
    
    oTable.dataTable({
        
        "bJQueryUI": true,
        "bProcessing": true,
        "bServerSide": true,
        "sServerMethod": "GET",
        "sAjaxSource": site_url+"tabulation_sheet/load_student/"+id+"/"+shiftId+"/"+versionId,
        "iDisplayLength": 8,
        "aLengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
        ],
        "aaSorting": [
        [0, 'desc']
        ],
        "sPaginationType": "full_numbers",
     
        "aoColumns": [
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
         {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
         {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },  {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },  
       
       
       
        {
            "bVisible": true, 
            "bSearchable": false, 
            "bSortable": false
        }
        ],

        "oLanguage": {
            "sSearch": "Search all columns:"
        },
        "sDom": '<"clear">T<"H"Cr><"clear">lfrt<"F"ip>',
      
    })
    
   
    
    
});













