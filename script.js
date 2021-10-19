function resetPage() {
    // window.location.reload()
    setTimeout(function(){location.reload()}, 100)
}
function euclid_gcd_two(number1,number2) {
    let ses = number1%number2
    if (ses > 0) {
        return euclid_gcd_two(number2,ses)
    }else{
        return number2        
    }
}
function euclid_gcd_many(array) { 
    let i = 2        
    let length = array.length  
    let gcd = euclid_gcd_two(array[i-2],array[i-1])          
    while (i < length) {        
        gcd = euclid_gcd_two(gcd,array[i])
        i++            
    }
    return gcd     
}
function euclid_lcm_two(number1,number2) { 
    let gcd_two = euclid_gcd_two(number1,number2)       
    return number1*number2/gcd_two
}
function euclid_lcm_many(array) {
    let i = 2        
    let length = array.length  
    let lcm = euclid_lcm_two(array[i-2],array[i-1])          
    while (i < length) {        
        lcm = euclid_lcm_two(lcm,array[i])
        i++            
    }
    return lcm    
}
const showNumber = () => {
    const validity_input1 = document.getElementById("input1")
    if (validity_input1.checkValidity()) {        
        document.getElementById("alert_input1").innerHTML = ""        
        input1_show() 
    }else{         
        document.getElementById("showNumber").innerHTML = ""
        document.getElementById("alert_input1").innerHTML = validity_input1.validationMessage
    }
}
function input1_show() {
    let input1_value = document.getElementById("input1").value
    // input1_value = parseInt(input1_value)
    let showInput = ""
    for(let i=1 ; i<=input1_value ; i++){
        showInput +=  `
        <div class="mt-1 d-flex align-content-center justify-content-center">
            <label class="p-1">จำนวนที่ ${i}</label>
            <input id="input${i+1}" class="p-1 mx-2 input" type="number" min="1" max="1000" required placeholder="1 - 1000">                                
        </div> 
        <div class="d-flex align-content-center justify-content-center">
            <small id="alert_input${i+1}" class="mb-1 text-danger d-flex align-content-center justify-content-center"></small>
        </div>        
        `
    }    
    document.getElementById("showNumber").innerHTML = `${showInput}`
}
function showResult() {
    const input1_value = document.getElementById("input1").value
    let inputGroup = [] 
    for(let i=1 ; i<=input1_value ; i++){
        // ใส่ตัวเลขจาก input1 เข้าไปใน array
        let inputGroup_value = document.getElementById(`input${i+1}`).value
        inputGroup.push(inputGroup_value)

        let validity_input = document.getElementById(`input${i+1}`)
        if (validity_input.checkValidity()) {        
            document.getElementById(`alert_input${i+1}`).innerHTML = ""                    
            let string = ""
            for(let i=0 ; i<inputGroup.length ; i++){
                string += `
                    ${inputGroup[i]} ,
                `
            }
            document.getElementById("output1").innerHTML = string         
        }else{          
            document.getElementById(`alert_input${i+1}`).innerHTML = validity_input.validationMessage
            document.getElementById(`output1`).innerHTML = ""
        }        
    }   
}
// number_many = [2,3,5,7,210]
// console.log(euclid_gcd_many(number_many))
// console.log(euclid_lcm_many(number_many))

