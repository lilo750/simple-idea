import React from "react";
import router from "@mongez/react-router";
import "./routes";
import { setRouterConfigurations } from "@mongez/react-router";
// import "/src/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

setRouterConfigurations({
  forceRefresh: false, // if set to true, when clicking on the same link, the page will be refreshed
  strictMode: false, // If set to true, the entire application will be wrapped with React.StrictMode
});

// Start scanning for all registered routes
router.scan();
