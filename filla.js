const pdfFiller   = require('pdffiller');

function fillPDF(){
    var sourcePDF = "files/test.pdf";
    var destinationPDF =  "files/test_complete.pdf";
    var data = {
        "last_name" : "La Placa",
        "first_name" : "Francesco",
        "date" : "03/02/1989",
        "football" : "Off",
        "baseball" : "Yes",
        "basketball" : "Off",
        "hockey" : "Yes",
        "nascar" : "Off"
    };
    
    
    pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err) {
        if (err) throw err;
        console.log("In callback (we're done).");
    });
}

document.querySelector('#pdf_fill').addEventListener('click', function(){
    fillPDF()
})