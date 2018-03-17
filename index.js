/*
## Instructions

In `index.html`, you'll see that we've set up a basic document for you. We'll be testing against this document, but you should still write your code in `index.js`. We'll handle loading everything up for you.

- Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
- Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors — but you knew that because you [read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ). (Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)
- Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them. This is challenging to
implement correctly, but not beyond your ability!)

**HINT 1**: Your solution for `deepestChild()` does not need to be totally
generic; we don't expect it to work in every case. For example, we know that
`div#grand-node` has only one node at each level — for this lab, you can solve
for that case, and not worry about a case where there are sibling nodes.

**HINT**: Remember learning about breadth-first search? A similar technique
might come in handy here.

Have fun, and good luck!

## Resources

- [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)

*/

const getFirstSelector = (selector) => {
  return document.querySelector(selector);
};

const nestedTarget = () => {
  return document.querySelector('#nested .target');
};

const increaseRankBy = (n) => {
  let rankedList = document.querySelectorAll('.ranked-list');
  
  for (var i = 0; i < rankedList.length; i++){
    let listNodes = rankedList[i].querySelectorAll('li');
    
    for(var j = 0; j < listNodes.length; j++){
      console.log(listNodes[j].innerText);
      listNodes[j].innerText = parseInt(listNodes[j].innerText) + n;
    }
  }
};  

const deepestChild = () => {
  let firstDiv = document.querySelector('#grand-node');
  
  if div.innerText === 'boo' then return the div
};
