function fet(){
    let frmdata={
        name: document.getElementById("name").value,
        contact: document.getElementById("contact").value,
        item: document.getElementById("itemss").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
        date: document.getElementById("date").value,
        payment: document.getElementById("paymentt").value
    }

    fetch("http://localhost:3000/Distributor",{
        method:"POST",
        headers:{
            'content-type':'application/json'},
        body:JSON.stringify(frmdata)
    })
    .then(Response=>alert("data inserted"))

}