# How to Run the Code
- Firstly the code contains some node modules which are neccessary so after getting code from github the node modules are absent
- To install node modules run command "npm install --force" , It will take few minutes to install all node modules
- After installation of node modules run command "npm start" to Run the project
- code will be run on Google chrome on URL http://localhost:3000/

# List of Components that i have done well
1. The list page is designed fine Ui, and data will render perfectly as per condition
 - first all the upcoming movies are render smoothly
 - Movie card is saperate component , each card is display in one line and elipses at end
2. The page has infinite scrolling without buttons and it works on mouse scroling which is more smoother than buttons, it will also indicate us about the loading...
 - If you go much down at the page then to go on to the button is provided so you can easily go to top
3. Searhing movies are very smoothly, we don't need to click the button we can just write a search keyword i.e. Movie Name and you will get result on same page
 - if you clear the search field then #1 page is arrived with upcoming movies
 - if you search the movie which is not present or does not match to the movie name then "RESULT OT FOUND" indication will be there
4. When you click on the movie card you will navigate to the details page and that detail page having all information about movies in details
 - When you click on the home icon/Button or browsers back button then you will return back to list page
5. Page is designed fully responsive using bootstrap, it is responsive with minimum width 512 pixel and also while making the responsive a mobile view is also considered
6. To Manage the States i used Redux-Toolkit which gives smoother data transfer and recieve
7. For routing i used "react-router-dom .v6" which currently latest version with minimum bundle size which increases navigation speed
   I tried to covered all the element given with profieciency, Component Management, Clean coding, Optimise code

 # If I had more 4 hours
 1. Optimise of code and CSS
 2. Make a UI Dynamic and eye catching
 3. Testing the app and fixing all the minor bugs

# Improvements
1. Watchlist and Favourites will raised the level
2. Mockups should be more to clear the all things about UI
  
