# pluralize-exercise

The goal of this exercise is to practice a few of the topics that we have covered recently including:
* Working in Git
  * Forking a repository
  * Cloning a remote repository
  * Making commits to a local repository
  * Pushing those commits to a remote repository
* Using npm packages
  * Installing an npm package
  * Using it in a JavaScript file

## Exercise
There is an array of words in the index.js file.  

The goal of this exercise is to print out each word in the original list along with the pluralized form of that word.  

For example if the words array was ['dog', 'person', 'sheep'] the output should look like:
The plural of dog is dogs
The plural of person is people
The plural of sheep is sheep


## Pluralize npm package
This would be a hard problem to solve if you were trying to write the pluralization rules yourself, but luckily someone has already written a package that we can use. https://www.npmjs.com/package/pluralize

You will need to use `npm install` to install this package in your repository and then you can follow the documentation for how to use it to get the pluralization of each word in the initial array.

## Steps to get started
1. First you will need to fork this repository on GitHub to create your own copy of it
2. Then you can clone your copy of the repository in your local (Cloud 9) workspace
3. When you have the open the index.js file which has the starting code
4. You will need to use `npm install` to install the pluralize package from the npm registry
5. Then you will need to import it in to the index.js file
6. Then you can use it to output the expected text
7. Once it is all working then commit the changes locally
8. Then push the local commits to your GitHub repository
9. Finally, post a link to your working code in Slack
