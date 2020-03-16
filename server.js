const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + `/public`));




const students = [

    {
        'Name': 'Nicholas Isvery-White',
        'DateOfBirth': '24th march',
        'Program': 'Computer Science',
        'Level': '200',
        'image': '/images/Nicholas.JPG'
    },
    {
        'Name': 'Micheal Owusu Addo',
        'DateOfBirth': '25th march',
        'Program': 'Music And Rap',
        'Level': '500',
        'image': '/images/mike.JPEG'
    },
    {
        'Name': 'Thomas Theblack-Guy',
        'DateOfBirth': '26th march',
        'Program': 'ICT',
        'Level': '200',
        'image': '/images/Thomas.JPG'
    }

]
app.get('/', (req, res) => {
    res.render("home", {
        students
    })
});

app.get('/stu', (req, res) => {
    res.render("stu", {
        students
    })
});

app.get('/stuff/:id', (req, res) => {
    const id = req.params.id;
    const student = students[id];
    res.render("stuff.ejs", {
        student
    })
});


app.listen(5000, function() {
    console.log("Listening on port 5000")
});