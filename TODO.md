# Unmet Requirements
- Vote results need to highlight which option the current user selected
- Readme
- Redirect to homepage on login
- Require login when entering information directly into address bar (because authedUser is not cached locally, so it should be null on a reload)

# Styling
- Leaderboard (high priority)
- Auth
- Home (navigation bar is off)
- Question preview
- Root Container size

# Validation
- Add question min length
- Invalid Question ID on path params

# Auth
- Redirect on not logged in
- Check if this fixes invalid state on Question

# Loading Spinner
- Should help clean up some state null checks
- This should allow for optimistic updates with questions/votes/etc
 
 # General UX
 - Alert or Toast on unsuccessful actions
 - Display something in question list when empty
 
# Cleanup
- Set initial authed user to null
- Remove god login button on App component 
- 

# Would be nice
- Toast on successfully adding a question
