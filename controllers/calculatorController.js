// var calculatorSchema = require("../models/calculatorSchema");
const fs = require('fs');
const pdfk= require('pdfkit')
//Piggyvest calculator homepage
exports.getIndex = (req, res)=> {
    res.render("../views/index", {
      });
};


exports.getFile = async (req,res,next) => {
    const amount=req.body.amount
    const month=req.body.month
    const interest=req.body.interest
    console.log(amount ,month)
    const name = 'piggy-' + '.pdf';
    const pdfDoc = new pdfk();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'inline; filename="' + name+ '"'
      );
      pdfDoc.pipe(fs.createWriteStream('piggyvest.pdf'));
      pdfDoc.pipe(res);
      pdfDoc.fontSize(15).text('Wally Gator !', 50, 50);
// Set the paragraph width and align direction
pdfDoc.text(amount , month, {
    width: 310,
    align: 'left'
});
// PDF Creation logic goes here
pdfDoc.end();
}


//Calculate interest
// exports.postInterest = (req, res)=> {
    //waiting on the form fields name to know what we are sending to db
// };

//Deleted ineterest
// exports.calculatorSchema_delete = function(req, res) {
//     res.send("Interest Deleted");
// };
