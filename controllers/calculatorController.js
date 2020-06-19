// var calculatorSchema = require("../models/calculatorSchema");
const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument;

//Piggyvest calculator homepage
exports.getIndex = (req, res)=> {
    res.render("../views/index");
};

exports.getFile = async (req,res,next) => {
    const amount=req.body.amount
    const month=req.body.month
    const interest=req.body.interest
    
    doc.pipe(fs.createWriteStream(`./exports/piggyvest-${Date.now()}.pdf`));
    doc.text(`
        Date: ${Date.now()} \n \n
        Amount: ${amount} \n \n
        Interest: ${interest} \n \n
        In ${month} month${month > 1 ? 's' : ''} time, with continuous savings of ${amount} every month, you will have saved ${parseInt(amount) + interest } naira.
    `);
    doc.end()
}

//Calculate interest
// exports.postInterest = (req, res)=> {
    //waiting on the form fields name to know what we are sending to db
// };

//Deleted ineterest
// exports.calculatorSchema_delete = function(req, res) {
//     res.send("Interest Deleted");
// };
