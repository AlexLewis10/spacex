## SpaceX

http://spacex-ships.surge.sh/

A project which accesses and displays information about SpaceX Rockets and Dragons using their API.
I took this project as an opportunity to learn to use React Hooks.

https://docs.spacexdata.com/?version=latest

### Requirements
- Fetch and render a list of rockets or dragons from SpaceX's API.
- Show extended information about a selected list item in a separate box, modal or page.

- Buttons or tabs to switch between rockets and dragons.
- A grid representation of the list.
- A single item view with an extended description (containing an image, name, etc.)

### Approach

I started by first drawing a rough diagram of how I wanted the UI to look to help me better understand of the layout I wanted to achieve.

![alt text](https://github.com/AlexLewis10/spacex/blob/master/img/ui-mock-up.png)

I then drew a diagram to get a better understanding of how my different components would fit together.

![alt-text](https://github.com/AlexLewis10/spacex/blob/master/img/component.png)

My first move was to spend some time learning React Hooks in a smaller project to start to understand the syntax and idiosyncrasies of Hooks.

For the main development work, I started with the header of the page before moving down to build the rockets, rocket, and rocketInfo components. Following this I worked on the UI and finally I was able to reuse most of the code I had already written for rockets to quickly build the dragons componenents with a few minor adjustments to the JS and the CSS.

### Tech
| | |
| ---- | ---|
| Language | JavaScript |
| Framework | React |
| Boilerplate | Create-React-App |
| UI | HTML, CSS |
| API | Axios |
| Test | Jest/Enzyme |
| Linter | ESlint |
| Other | React-Scroll |

### Run the Code
- Clone the repo and open in your favorite code editor
- Run npm install
- Run npm start to see the app locally


### Todo
- Fix engine problem.
- Fix broken tests
- Deploy using Travis
- Rework CSS to be responsive.
- Adjust text in full-info section to be responsive particuarly for small screen sizes.

Link to color palette: https://coolors.co/495867-577399-bdd5ea-f7f7ff-fe5f55







