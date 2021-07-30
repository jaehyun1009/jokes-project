# Double the Fun
## Description
Double the Fun is a web application where people can post, like, and comment on others' jokes and trivia. Anyone can view the site and its contents, but a gmail account is needed in order to access the core functionalities of this web application, such as creating, liking, and commenting on jokes and trivia.

## Link to Project
https://project-jokes-1009.herokuapp.com/

### Trello Board
https://trello.com/b/A0SKz535/unit-2-project-double-the-fun

### Entity-Relationship-Diagram (ERD)
![ERD](https://trello.com/1/cards/610217628c44367310e71069/attachments/610217628c44367310e7106d/previews/610217628c44367310e7107b/download)

### Wireframe
![Wireframe](https://trello.com/1/cards/60f9dff3455d4c8d9031d862/attachments/60f9e056e75337124a3dd564/previews/60f9e056e75337124a3dd56c/download)

## How this application works
### Main Page
- Home landing page. This is the screen that the user will see when they load the link to the project.  
**- Clicking the title of the project at the top navbar any time will return you to the main menu.**
  
![Main Page](https://i.imgur.com/JU1Ap7Q.png)  
  

- Scrolling down from the home landing page will show the user the mission statement page. **(Note: Mission statement acts as a placeholder for such a page that may be found in real commercial websites)**
- Interesting tidbit: Clicking the "find out more about this project here" will redirect you to this page!
  
![Main Page - Mission Statement](https://i.imgur.com/0yyL70d.png)

### Users Page (View Users)
- Displays all users by date they joined the site.  
  
![Users Page](https://i.imgur.com/b52Dva1.png)

### Profile Page
- Displays the user's information, their jokes, and their trivia.
  - Number of likes on a page is calculated by how many likes they have in all of their jokes and trivia combined.
- You can click on the number of followers you have to be directed to a new page that has all of your followers listed on a grid format just like the users page.
- The option to follow a user only shows up if you are logged in and it's not your profile page.
  
![My Profile Page](https://i.imgur.com/W5DoAaO.png)
![Your Profile Page](https://i.imgur.com/v7J69BV.png)
![Your Followers](https://i.imgur.com/fTT7WFt.png)

### Jokes Page
- Displays a list of jokes by their creator name, joke, and likes.
  - You can click on the name to go to the joke creator's profile page, or you can click on the joke itself to view the punchline (or just the joke itself if there's no )
- The option to create a new joke only shows up if you are logged in.  
  
![All Jokes](https://i.imgur.com/9KJOpMv.png)
  

- Entering the joke setup is mandatory, but punchline is not.  
- You will have the option to select a NSFW option for your jokes. Jokes that are tagged NSFW will be tagged as shown above in the jokes index page.  
  
![Create a Joke](https://i.imgur.com/ahgBq8d.png)
  

- Joke show page. You can leave comments on the joke if you are logged in.
- You can edit or delete your own comments.
  

![Single joke page - No punchline](https://i.imgur.com/jj8JFxO.png)
  
  
- A single joke show page with a punchline (click on "show punchline" to reveal it)
  
![Single joke page - with punchline](https://i.imgur.com/o3LpxXR.png)


- NSFW joke show page.
  
![Single joke page - NSFW](https://i.imgur.com/JZgNyBW.png)  

### Trivia Page
- The way trivias work in this web application is nearly identical to how jokes work. The main differences are:
  - Trivias have questions and answers instead of setup and punchline. Users are also required to give out both questions and answers instead of just the setup mandatory for jokes.
  - Green background color for each trivia page  
  
![All Trivia](https://i.imgur.com/1gfm7zA.png)
![l](https://i.imgur.com/h3rDDp6.png)

## Technologies Used
- HTML5
- CSS3
- JS6/EJS
- Bootstrap
- Node.js
- Express
- MongoDB
- Mongoose
- Google OAuth
- node-fetch

## Resources
- Google OAuth Template: https://github.com/SEI-Remote-WC/men-stack-oauth-template  
- Jokes API: https://github.com/15Dkatz/official_joke_api  
- Mission statement page icon: https://www.netspirits.de/online-marketing-leistungen/videoproduktion/