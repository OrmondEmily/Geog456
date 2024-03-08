var x = document.getElementsByClassName("memorial-item")
var myArray = [];
function myLoop(item) {
    var aDate = item.getElementsByClassName('birthDeathDates')[0].innerText
    var aName = item.getElementsByClassName('name-grave')[0].innerText
    var aPic = ''
    // if (item.getElementsByClassName('pic-wrapper')[0].getElementsByTagName('img')[0].src != undefined)
    // {aPic = item.getElementsByClassName('pic-wrapper')[0].getElementsByTagName('img')[0].src}
    var myObj = {'name':aName, 'date':aDate, 'picture': aPic};
    myArray.push(myObj);
}
x.forEach(e => myLoop(e))

