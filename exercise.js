// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
let firstButton = document.querySelector('button')

//    - Select the second button by using an "id"

let secondButton = document.getElementById('addBg')

// 2) Add "click" event listener to both buttons (with two different functions).
function forFirstButton(event){
    firstButton.style.backgroundColor=rgb(221, 199, 5)
    console.dir('firstButton')
    console.log('firstButton')
}

firstButton.addEventListener('click', forFirstButton)

function forSecondButton(event){
    secondButton.style.backgroundColor=rgb(221, 199, 5)
    let anotherButton = secondButton;
    console.log('anotherButton')
}



secondButton.addEventListener('click', forSecondButton)
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)

let firstParagraph=document.querySelector('p')

let secondParagraph=document.getElementById('tird')
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

console.dir(firstParagraph)

console.dir(secondParagraph)
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
firstButton.remove('firstParagraph')
//    - The second button changes the background color of the first paragraph to blue

secondButton.style.backgroundColor='blue'
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!