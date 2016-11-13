
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

Feed Reader testing tool using Jasmine.

-- Instructions --

This application is a full page RSS feed with a hidden menu of other RSS feeds.

1) To open the hidden menu, click the hamburger menu icon in the top-left hand corner of
page. When clicked, the menu presents titles of the available RSS feeds.

2) When a RSS feed title is clicked, the menu will hide and the the page will load
the list of linked articles.


-- Development Testing --

Below the RSS feed is the Jasmine service interface. This communicates the suite of
tests that have been run, as well as each individual test. Green means test success.

'RSS Feeds' tests:
1) "are defined" = make sure that our data-model (var = allFeeds) is not empty.
2) "has a url" x 4 = make sure that each object in our data-model contains a url.
3) "has a name" x 4 = make sure that each object in our data-model contains a name.

'The Menu' tests:
1) "is hidden by default." = make sure the hidden menu is hidden on intial screen.
2) "displays when clicked and hides when clicked again." = make sure hidden menu
displays when the hamburger menu icon is clicked, then hides when clicked again.

'Initial entries' test:
1) "are present within the feed." = make sure the full-page RSS feed has entries present
when the page initially loads. This is a test of an asynchronous call.

'New Feed Selection' test:
1) "is different according to the header chosen." = make sure that a initial feed
pulled to the full-page RSS feed is changed when an item from the hidden menu is selected.
