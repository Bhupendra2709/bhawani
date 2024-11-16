async function demo() {
    let stdata=await fetch("http://localhost:3000/Distributor")
    let res= await stdata.json()
    let dataa= res.map((e)=>`
    <tr>
        <td> ${e.id}  </td>
        <td> ${e.name} </td>
        <td> ${e.contact}  </td> 
        <td> ${e.item}  </td> 
        <td> ${e.quantity}  </td> 
        <td> ${e.price}  </td> 
        <td> ${e.date}  </td> 
        <td> ${e.payment}  </td> 
        <td> <button onclick="mydel('${e.id}')"> delete </button></td>
        <td> <button onclick="myedit('${e.id}')"> Edit </button></td>

    </tr>`
).join("")
document.getElementById("showdata").innerHTML=dataa
    
}
demo()

//delete code


function mydel(id){
    fetch(`http://localhost:3000/Distributor/${id}`,{
        method:"Delete"
    })
    .then(r=>alert("data deleted"))
}
async function myedit(id) {
    let re= await fetch(`http://localhost:3000/Distributor/${id}`)
    let sdata = await re.json()
    let frm= `
    <label for="">id</label>
    <input type="text" value='${sdata.id}' readonly>
    <br><br>
    <label for="">name</label>
    <input type="text" value='${sdata.name}' id="nm1">
    <br><br>
    <label for="">Contact </label>
    <input type="text" value='${sdata.contact}' id="cn1">
    <br><br>
    <label for="">Items</label>
    <select name="" value='${sdata.item}' id="im1">
        <option value="">Select option</option>
        <option value="T-shirt">T-shirt </option>
        <option value="Gun edition shows">Gun edition shows</option>
        <option value="Rounded hat">Rounded hat</option>
        <option value="Rusted ropes">Rusted ropes</option>
        <option value="Remote Control Car">Remote Control Car</option>
    </select>
    <br><br>
    <label for="">Quantity</label>
    <input type="text" value='${sdata.quantity}' id="qn1">
    <br><br>
    <label for="">Price </label>
    <input type="text" value='${sdata.price}' id="pn1">
    <br><br>
    <label for="">odering date</label>
    <input type="text" value='${sdata.date}' id="dn1">
    <br><br>
    <label for="">Payment method</label>
    <select name="" value='${sdata.payment}' id="py1">
        <option value="">Select payment method</option>
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
        <option value="Cheque">Cheque</option>
        <option value="Credit">Credit</option>

    </select>
    <br><br>

    <input type="submit" value="update" onclick="updatee('${sdata.id}')">
    `
    document.getElementById('demoo').innerHTML=frm

    
}


// edit code
function updatee(strid){
    let frmm={
        name:document.getElementById("nm1").value,
        contact:document.getElementById("cn1").value,
        item:document.getElementById("im1").value,
        quantity:document.getElementById("qn1").value,
        price:document.getElementById("pn1").value,
        date:document.getElementById("dn1").value,
        payment:document.getElementById("py1").value,
    }
    fetch(`http://localhost:3000/Distributor/${strid}`,{
    method:'PUT',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(frmm)
 }).then(repeat=>alert("data updated"))
}