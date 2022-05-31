//var selectvalue1=document.getElementById('item')
//var add=document.getElementById("btn")
// add.addEventListener('click',table)
//function select() {
//var selectvalue=document.getElementById("item").value
//console.log(selectvalue);
// }


var btn = document.getElementById('btn')
btn.addEventListener('click', table)

function table() {
    var numbers = '<table border="2">' +
        '<tr>' +
        '<th> accessories</th>' +
        '<th> unit price</th>' +
        '<th> qty</th>' +
        '<th> price</th>' +
        '<th> action</th>' +
        '</tr>' +
        '<tr>' +
        '<td>door </td>' +
        '<td><input id="unitprice"type="number" name="number"> </td>' +
        '<td> <input id="qty" type="number" name="number"></td>' +
        '<td><input id="total" type="number" name="number"> </td>' +
        '<td><button id="clean">x</button> </td>' +
        '</tr>' +
        '<tr>' +
        '<td>window </td>' +
        '<td><input id="unitpricetwo" type="number" name="number"> </td>' +
        '<td> <input id="qtytwo" type="number" name="number"></td>' +
        '<td><input id="totaltwo" type="number" name="number"> </td>' +
        '<td><button id="clean2">x</button> </td>' +
        '</tr>' +
        '<tr>' +
        '<td>class </td>' +
        '<td><input id="unitpricethree" type="number" name="number"> </td>' +
        '<td> <input id="qtythree" type="number" name="number"></td>' +
        '<td><input  id="totalthree" type="number" name="number"> </td>' +
        '<td><button  id="clean3">x</button> </td>' +
        '</tr>' +
        '<tr>' +
        '<td>screwc </td>' +
        '<td><input  id="unitpricefour" type="number" name="number"> </td>' +
        '<td> <input  id="qtyfour" type="number" name="number"></td>' +
        '<td><input  id="totalfour" type="number" name="number"> </td>' +
        '<td><button  id="clean4">x</button> <button id="addrow">+</button></td>' +
        '</tr>' +
        '<th>total<th>'+
        '<td><input id="get" type="number" name="number"> </td>'

        '</table>'
    document.getElementById('add').innerHTML = numbers

    var row = document.getElementById('addrow')
    row.addEventListener('click', lastaddrow)
    function lastaddrow() {
        var empty = '<tr>' +
            '<td> </td>' +
            '<td><input type="number" name="number"> </td>' +
            '<td> <input type="number" name="number"></td>' +
            '<td><input type="number" name="number"> </td>' +
            '<td><button>x</button> <button id="addrow">+</button></td>' +
            '</tr>'
        var getrow = document.getElementById('add')
        var emptyrow = getrow.insertRow(5)
        emptyrow.innerHTML = empty
    }
    //firstrow
    var unit4 = document.getElementById('total')
    unit4.addEventListener('mousemove', firstrow)
    function firstrow() {
        var unit1 = document.getElementById('unitprice').value
        var unit2 = document.getElementById('qty').value
        var unit3 = (unit1) * (unit2)
        var unit4 = document.getElementById('total')
        unit4.value = unit3
    }
    var clr = document.getElementById('clean')
    clr.addEventListener('click', clear)
    var unit1 = document.getElementById('unitprice')
    var unit2 = document.getElementById('qty')
    unit4 = document.getElementById('total')

    function clear() {
        unit1.value = ""
        unit2.value = ""
        unit4.value = ""
    }

    //secound row
    var secrow4=document.getElementById('totaltwo')
    secrow4.addEventListener('click',secoundrow)
    function secoundrow () {
        var secrow1=document.getElementById('unitpricetwo').value
        var secrow2= document.getElementById('qtytwo').value
        var secrow3=(secrow1)*(secrow2)
        var secrow4=document.getElementById('totaltwo')
        secrow4.value=secrow3
        
    }
    var secrow1=document.getElementById('unitpricetwo')
        var secrow5= document.getElementById('qtytwo')
        var secrow6=document.getElementById('totaltwo')
        var clr2=document.getElementById('clean2')
        clr2.addEventListener('click',clear2)
        function clear2() {
            secrow1.value=""
            secrow5.value=""
            secrow6.value=""
            
        }
        //third row
        var thirdrow4=document.getElementById('totalthree')
        thirdrow4.addEventListener('click',thirdrow)
        function thirdrow () {
            var thirdrow1=document.getElementById('unitpricethree').value
            var thirdrow2= document.getElementById('qtythree').value
            var thirdrow3=(thirdrow1)*(thirdrow2)
            var thirdrow4=document.getElementById('totalthree')
            thirdrow4.value=thirdrow3
            
        }
        var thirdrow1=document.getElementById('unitpricethree')
            var thirdrow2= document.getElementById('qtythree')
            var thirdrow3=document.getElementById('totalthree')
            var clr2=document.getElementById('clean3')
            clr2.addEventListener('click',clear3)
            function clear3() {
                thirdrow1.value=""
                thirdrow2.value=""
                thirdrow3.value=""
                
            }
             //four'th row
             var fourrow4=document.getElementById('totalfour')
             fourrow4.addEventListener('click',fourrow)
             function fourrow () {
                 var fourrow1=document.getElementById('unitpricefour').value
                 var fourrow2= document.getElementById('qtyfour').value
                 var fourrow3=(fourrow1)*(fourrow2)
                 var fourrow4=document.getElementById('totalfour')
                 fourrow4.value=fourrow3
                 
             }
             var fourrow1=document.getElementById('unitpricefour')
                 var fourrow2= document.getElementById('qtyfour')
                 var fourrow3=document.getElementById('totalfour')
                 var clr3=document.getElementById('clean4')
                 clr3.addEventListener('click',clear4)
                 function clear4() {
                     fourrow1.value=""
                     fourrow2.value=""
                     fourrow3.value=""
                     
                 }[p]
                 var alltotalrow=document.getElementById('get')
                 alltotalrow.addEventListener('mouseenter',alltotal)
                 function alltotal() { 
                 var totalrow1 = document.getElementById('total').value
                 var totalrow2=document.getElementById('totaltwo').value
                 var totalrow3=document.getElementById('totalthree').value
                 var totalrow4=document.getElementById('totalfour').value
                 var row = document.getElementById('addrow').value
                 var totalrowall=(totalrow1+totalrow2+totalrow3+totalrow4+row)
                 alltotalrow.value=totalrowall

                 }

}
