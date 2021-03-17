var oDataTable;
$(document).ready(function () {
var url = window.location.href;
var url_arr=url.split("/");
//var parameter=url_arr[url_arr.length-1];
//var parameter=url_arr[6];
//var classId=parseInt(parameter);
//if(url_arr[7]){
//    var shiftId=parseInt(url_arr[7]);
//}else{
//     var shiftId=0;
//}
//if(url_arr[8]){
//    var versionId=parseInt(url_arr[8]);
//}else{
//    var versionId=0;
//}
//if(Number.isInteger(classId)){
//    var id=classId;
//}else{
//    var id='';
//}

//alert(url_arr);
      var studentID=$('#studentID').val();
      var sectionID=$('#sectionID').val();
      var classesID=$('#classesID').val();
      var versionID=$('#versionID').val();
      var shiftID=$('#shiftID').val();

    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };

    var oTable = $('#example_invoices');
    
     oDataTable = oTable.dataTable({
        
        "bJQueryUI": true,
        "bProcessing": true,
        "bServerSide": true,
        "sServerMethod": "GET",
        "sAjaxSource": site_url+"invoice/load_due_invoice/",
        "iDisplayLength": 10,
        "aLengthMenu": [
        [11, 25, 50, -1],
        [11, 25, 50, "All"]
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
        } ,
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        } 
    ],

        "oLanguage": {
            "sSearch": "Search all columns:"
        },
        "sDom": '<"clear">T<"H"Cr><"clear">lfrt<"F"ip>',
      
    })
    
//   oDataTable.api().ajax.url("/api/json/syncreply/Request_OpenTicketsInQueue?QueueID=" + this.selectedQueue());
    
    
});
   $('#classesID').change(function (event) {
        var classesID = $(this).val();
        if (classesID === '0') {
            $('#studentID').val(0);
        } else {
            $('.loader').show();
            $.ajax({
                async: false,
                type: 'POST',
                url: site_url+'student/sectioncall',
                data: "id=" + classesID,
                dataType: "html",
                success: function (data) {
                    var base_url=window.location.href;
                    var params="classesID/"+classesID+"/versionID/"+$('#versionID').val()+"/shiftID/"+$('#shiftID').val();
                     oDataTable.api().ajax.url(  site_url+"invoice/load_due_invoice/" + params);
                     oDataTable.api().ajax.reload();
                    $('#sectionID').html(data);
                    $('.loader').hide();
                    
                }
            });
          $.ajax({
                type: 'POST',
                url: site_url+"invoice/call_all_student",
                data: {'id': classesID, 'shiftID': $('#shiftID').val(), 'versionID': $('#versionID').val()},
                dataType: "html",
                success: function (data) {
                    $('#studentID').html(data);
                 //   oDataTable.api().ajax.url(  site_url+"invoice/load_invoice/" + params);
                    $('.loader').hide();
                  
                }
            });
            
          
        }
    });
  
$('#sectionID').change(function (event) {
        var sectionID = $(this).val();
        var classesID = $('#classesID').val();
        if (classesID === '0') {
            $('#studentID').val(0);
            $('#sectionID').val(0);
        } else {
            $('.loader').show();
            $.ajax({
                type: 'POST',
                url: window.location.href+"/call_all_student_section",
                data: {'sectionID': sectionID, 'classesID': classesID, 'shiftID': $('#shiftID').val(), 'versionID': $('#versionID').val()},
                dataType: "html",
                success: function (data) {
                    var base_url = window.location.href;
                    var params = "classesID/"+classesID+"/sectionID/"+$('#sectionID').val()+"/versionID/"+$('#versionID').val()+"/shiftID/"+$('#shiftID').val();
                    oDataTable.api().ajax.url(  site_url+"invoice/load_due_invoice/" + params);
                    oDataTable.api().ajax.reload();
                    $('#studentID').html(data);
                    $('.loader').hide();
                }
            });
        }
    });
    
$('#studentID').change(function(event){
    var studentID=$(this).val();
    var classesID=$('#classesID').val();
    var sectionID=$('#sectionID').val();
    var versionID=$('#versionID').val();
    var shiftID=$('#shiftID').val();
    
    var params ="classesID/"+classesID+"/sectionID/"+sectionID+"/versionID/"+versionID+"/shiftID/"+shiftID+"/studentID/"+studentID;
      oDataTable.api().ajax.url(  site_url+"invoice/load_due_invoice/" + params);
      oDataTable.api().ajax.reload();
});  
 
$('#feeMonth').change(function (event) {
        var sectionID = $('#section').val();
        var classesID = $('#classesID').val();
        var feemonth = $(this).val();  
        
         var base_url = window.location.href;
         var params = "classesID/"+classesID+"/sectionID/"+sectionID+"/versionID/"+$('#versionID').val()+"/shiftID/"+$('#shiftID').val()+"/studentID/"+$('#studentID').val()+"/month/"+feemonth;
         oDataTable.api().ajax.url(  site_url+"invoice/load_due_invoice/" + params);
         oDataTable.api().ajax.reload();
         
            
        
    });
    $('#personID').change(function (event) {
        var sectionID = $('#section').val();
        var classesID = $('#classesID').val();
       var personID=$('#personID').val();
        
         var base_url = window.location.href;
         var params = "classesID/"+classesID+"/sectionID/"+sectionID+"/versionID/"+$('#versionID').val()+"/shiftID/"+$('#shiftID').val()+"/studentID/"+$('#studentID').val()+"/usertypewithID/"+personID;
         oDataTable.api().ajax.url(  site_url+"invoice/load_due_invoice/" + params);
         oDataTable.api().ajax.reload();
         
            
        
    });
    
 











