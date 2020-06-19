var calculatorSchema = require("../models/calculatorSchema");
const pdfk= require('pdfkit')
//Piggyvest calculator homepage
exports.getIndex = (req, res)=> {
    res.render("../views/index", {
      });
};


exports.getFile= (req,res,next)=>{
    const pdfDoc = new Pdfk();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'inline; filename="' + piggyvest + '"'
      );
      pdfDoc.pipe(fs.createWriteStream('piggyvest.pdf'));
      pdfDoc.pipe(res);
      pdfDoc.fontSize(15).text('Wally Gator !', 50, 50);
// Set the paragraph width and align direction
doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
    width: 410,
    align: 'left'
});
// PDF Creation logic goes here
doc.end();
}


//Calculate interest
exports.postInterest = (req, res)=> {
    //waiting on the form fields name to know what we are sending to db
};

//Deleted ineterest
// exports.calculatorSchema_delete = function(req, res) {
//     res.send("Interest Deleted");
// };