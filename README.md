# Next.js, Prisma, NextAuth.js, TypeScript App

This project uses Next.js and Prisma with data hosted on Heroku for a fullstack app.

User can create a Post using the Markdown language. Once a draft has been created and save, the user can then choose to either "Publish" or "Delete" the post. If "Publish" the post will go to the main feed/page along with other posts from other users. Once on the main page, a user can "UnPublish" a post to remove it from the main page, and could then edit or delete it.

# MDPostMaker Experience

### Featured Pages

NextAuth was used to authentice a user and create a session in which they could interact with the app. GitHub was used for the login.
[LogIn](postmaker1.png)

Once logged in, a user can create a new post
[Create New Post](postmaker2.png)

The post then become a draft that can either be published to the main page, edited, or deleted
[Draft Page](postmaker3.png)

Published posts are on the main feed/page
[Main Feed/Page](postmaker4.png)
