//DATA FOR graph
config = {
    apiKey : config1.apiKey,
    authDomain: config1.authDomain,
    databaseURL: config1.databaseURL,
    projectId: config1.projectId,
    storageBucket: config1.storageBucket,
    messageingSenderId: config1.messagingSenderId
 }
 var database = firebase.database();
 
 let dbref = firebase.database(); // setting var equal to the firebase database
 let receiptRef = dbref.ref('receipts'); // referencing the receipts data in the database
 receiptRef.on('value', function(snapshot) {  // getting snapshot of the values of reciept reference
    snapshot.forEach(function(childSnapshot) { // getting snap shot for each of the 'children' of receipt
        let childData = childSnapshot.val(); // setting childData equal to the values of snapshot of children
        console.log(childData);
        let recPrice = childData.price;
        let recDate = childData.date;
        let recCategory = childData.category;  // settting variables to equal each of the values of the objects
        let recLocation = childData.location;
        let recDescription = childData.description;
        let recName = childData.key;
        console.log(recPrice)
        makeChart(recCategory);
    })
 })


let data = {
    datasets: [{
        data: [this.recPrice],
    }],
    labels: [
        'Red', 
        'Yellow',
        'Blue'
    ]
}
let options = {
    cutoutPercentage: 50, 
    hoverBackgroundColor: 'blue'
}


 var chrt = document.getElementById('myCanvas');
 var myPieChart = new Chart(chrt, {
    type: 'pie',
    data: data,
    options: options
});
//END OF DATA FOR graph



