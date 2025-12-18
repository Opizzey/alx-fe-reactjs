
# React Router Advanced

## Features
- Home, About, Profile (with nested Details and Settings), and dynamic Blog Post routes
- ProtectedRoute component restricts access to Profile for unauthenticated users
- Simulated authentication with Login/Logout button

## Testing Instructions

1. **Start the App**
	- Run `npm install` if not already done.
	- Run `npm run dev` to start the development server.

2. **Test Navigation**
	- Use the navigation bar to visit Home, About, Profile, and Blog Post 123.

3. **Protected Route**
	- Try accessing Profile while logged out: you should be redirected to Home.
	- Click Login, then access Profile: you should see nested links for Details and Settings.
	- Test nested navigation within Profile.
	- Click Logout and try Profile again: you should be redirected.

4. **Dynamic Route**
	- Click Blog Post 123: you should see the post ID displayed.
	- Change the URL to `/blog/456` to test another dynamic post.

## Notes
- All routing is handled with React Router v6.
- Authentication is simulated with a boolean state.
