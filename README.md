# Pick of the Litter
https://pick-of-the-litter.firebaseapp.com/
Pick of the Litter is an app that was created to assist in beautifying your surroundings.  If you spot litter that you cannot dispose of immediately, you can take a picture and post it for others in your area to assist with the clean up.  You are able to mark litter as cleaned from the app.  We are on the honesty system as there is no verification that you actually cleaned the litter.

## How it works

### Authentication
Using either the iOS or Android applications you are able to enter an email address and password to register and login to the application.  The user object is transferred to the backend via POST request. The user object is evaulated and inserted into the database for registration, and user/password combinations are matched for login.

### Posting
Using either the iOS or Android applications you can take pictures with the native camera. Litter objects are created with the revelent information, including location and user information.  The litter object is transfered via POST request to the backend.  The litter object is then evaluated and inserted into the database.  

### Viewing
To retrieve a list of litter objects nearby, a GET request is sent to the backend.  The backend queries the database and returns any litter objects that are found.

## What's involved
### Backend
Backend created using Java connecting to MySQL DB.
### Frontend
Angular 4 application.
### iOS
iOS application created using Swift 3. 

Third-Party Libraries

-AlamoFire

-ObjectMapper

*Third-Party Libraries added using CocoaPods.

### Android
Android application created using Java.

Third-Party Libraries

-Retrofit2

*Third-Party Libraries added using gradle.



