function isAuthenticated(req, res, next) {
    if (req.session.isLoggedIn) {
        // If authenticated, proceed to the next route handler
        return next();
    }
    // If not authenticated, redirect to the login page
    res.redirect("/login");
}