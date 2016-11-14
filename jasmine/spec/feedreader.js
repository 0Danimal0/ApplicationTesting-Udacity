/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        var i = 0;
        allFeeds.forEach(function() {
         it ('has a url', function() {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
             i++;
         });
        });


         /* TODO: Write a test that loops through each feed
          * in the allFeeds object and ensures it has a name defined
          * and that the name is not empty.
          */
        var j = 0;
        allFeeds.forEach(function() {
         it ('has a name', function() {
             expect(allFeeds[j].name).toBeDefined();
             expect(allFeeds[j].name.length).not.toBe(0);
             j++;
         });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

       /* TODO: Write a test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
        it('is hidden by default.', function() {
          expect(document.body.classList).toContain('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          //Have jQuery click icon, run expectation, then repeate.
        it('displays when clicked and hides when clicked again.',function() {
          $('.menu-icon-link').click();
          expect(document.body.classList).not.toContain('menu-hidden');
          $('.menu-icon-link').click();
          expect(document.body.classList).toContain('menu-hidden');

        })
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
           loadFeed(0, done)
         });

        it('are present within the feed.', function() {
//        As check for the test, the below expectation checks the number of .entry's.
//        console.log($('.feed .entry h2').length);
         expect($('.feed .entry h2').size()).not.toBe(0);
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var oldFeed, newFeed;


         //beforeEach test, save the html for the first and second feeds
         //to a variable in the suite scope.
        it('is different according to the header chosen.', function(done) {
         loadFeed(0, function() {
           oldFeed = $('.feed').html();
           /* console.log(oldFeed);  //For checking, this displays the html for the oldFeed in console. */
           loadFeed(1, function() {
            newFeed = $('.feed').html();
            /* console.log(newFeed);  //For checking, this displays the html for the newFeed in the console.*/
            expect(newFeed).not.toBe(oldFeed);
            done();
           })
         })
        })
    })
}());
