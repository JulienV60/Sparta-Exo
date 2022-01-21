# The Developer - Bonus

As a developer, you'll see that often, while creating a feature you also create bugs.

The goal here is to create a function which represents the workflow of a developer working on an application, producing code and randomly introducing bugs that he must fix. 

## Specs

You should implement a `developer` Object as follows:

**Attributes**

- `isCoding`
- `daysCoding`
- `projectStatus`
- `codeLinesProduced`
- `linesNeeded`
- `maxDelay`

**Methods**

- `initiateProject`
- `startProject`

**Business Rules**

- When the developper use `initiateProject`, it resets all its attributes.
```javascript
developer.initiateProject()
developer.isCoding // true
developer.daysCoding // 0
developer.codeLinesProduced // 0
```

- The `startProject` function takes a number of line of code needed as a first parameter and a maximum delay as a second parameter.
```javascript
developer.startProject(90, 400)
developer.linesNeeded // 90
developer.maxDelay // 400
```

- every day the developer produces 2 lines of code, exept when the developer creates a bug (it's 0 then)
- everytime the developer has a bug, the developer loses 4 days to debug it.

- The `codeForOneDay` function increment the codeLinesProduced & daysCoding during the project. (and of course, the probability of creating a bug)

- the bug probability should grow with the lines of code :
  - 10% chance every line from the 1st to the 80th line.
  - 20% chance every line from the 80th to the 150th line.
  - 40% chance every line from the 150th line to the end.


- The `mightStop` function verifies if he reaches the maxDelay or the linesNeeded and change the projectStatus when needed.
ex:
```javascript
(developer.linesNeeded = 90 && developer.codeLinesProduced = 90) 
// => developer.projectStatus = "project finished" && developer.isCoding = false

(developer.maxDelay = 89 && developer.daysCoding = 90) 
// => developer.projectStatus = "project stopped" && developer.isCoding = false
```

Tip:
Paying attention to the tests. They may help you understand the expected implementation details for this exercise.

_Feel free to create as many functions as you think you might need!_

**Bonus**

Make it so that you print in the end how long it took for the dev to create an app. 
