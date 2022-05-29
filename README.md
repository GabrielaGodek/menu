# 3D Menu with animations
I saw this idea scrolling through Instagram, so I decide to make something alike.


## Logic
Since I iterate over NodeList, I was obligated to use a `forEach` loop. The `forEach` loop iterates over each element assigning the same statement to execute. So it was all about assigning a delay to every element other than the previous one. To do this, my `setTimeout` function takes two parameters, one for each item in the NodeList and one for the iteration index multiplied by the delay between the elements.
## Tech
- SCSS 
- JavaScript
## Live version
[Click here to see live version](https://gabrielagodek.github.io/menu/)

## Summary
During this task I verify my knowledge about  `setTimeout` and `setInterval`. It was very useful when I was trying animate every menu item after another. 

