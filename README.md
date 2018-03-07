# oneflow-tech-test

The challenge of this tech test was to take a html file, with its relevant JS and translate them into a Vue.js project. The Vue project was set up using the VueCli, enabling testing with nightwatchJS and backend testing with Karma. I initially seperated the html into two components, the list of items and the shopping cart itself. I wrote a first test to make sure these were rendered. These components were child components of App.vue, the parent component. I initially put the search bar as a seperate component but getting this to interact correctly with the list of items proved to be too difficult. I then seperated the JS into the two components, or into the parent component, depending on where the js was required. After this I added e2e tests with nightwatch, making sure the different parts of the website worked, until something broke which is when I corrected any issues, and continued to test.

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### Challenges

 Many of the difficulties I faced were a product of lack of experience with Vue, this being the first Vue project I have extensively worked on. As a result of this, many problems were overcome by googling the issue or simply working out the issue by trial and error. Also time was a factor as I had other deadlines and events on whilst I was doing this test.

 The main problem that I was faced with was refactoring the Vue code to make it work with the relevant components. The first thing I worked out was how the original code interacted with the HTML, and then after sorting the components out, I added the relevant code. This did not work for the first many times I tried, and was coupled with the issue that the code could not access the inventory of items. The way I got round this was starting the listOfItems component from scratch, and rebuilding it according to a Vue tutorial. It turns out the syntax required was slightly different from that in the original code. 

 I also had an issue with many minor errors the code would come across that often had no obvious reason as to why they weren't working. An example is the code couldn't click buttons by id, which had previously worked. Instead I had to use Xpath, which was something I manually had to work out. 

### Successes

The test was a massive learning experience, with little previous experience in Vue, nightwatch !!!, I had to tackle both learning the syntax and how they worked. This was combined with the struggle of refactoring someone elses code into components and the relevant bits of javascript, whilst trying to submit the test in reasonable time. Overall it was a positive learning experience.


