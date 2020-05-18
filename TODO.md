# Styling
Will need a major refactor of components. There's a lot of duplication at each component that displays question information.
- Create a user info display with avatar and name that can be used across items. Might consider using it for the navbar display portion. Have it take a bool for isSmall and set properties for it that way.
- Need to fix the home navigation selection.

# Loading Spinner
- Should help clean up some state null checks
- This should allow for optimistic updates with questions/votes/etc
 
 # General UX
 - Alert or Toast on unsuccessful actions
 - Display something in question list when empty
 - Consider making answered/unanswered a path param so that when a user navigates with back button, they go back to answered questions if that's where they were before.

# Would be nice
- Toast on successfully adding a question
