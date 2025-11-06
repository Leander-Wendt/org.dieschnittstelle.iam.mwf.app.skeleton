/**
 * this imports the application classes that will be dynamically loaded
 * by the framework at runtime and "exports" them to the framework
 * setting the mwf.app.components object
 */
import {GenericDialogTemplateViewController, mwf} from "vfh-iam-mwf-base";
/* application libraries: the main application class */
import MyApplication from "./MyApplication.js";
/* application libraries: model */
/* application libraries: view controllers */
import MyInitialViewController from "./controller/MyInitialViewController.js";
/* application libraries: model */
// TODO-REPEATED: import any further view controllers here
import ListViewViewController from "./controller/ListViewViewController";

// TODO-REPEATED: import any further view controllers here

// we export the framework modules required by the application and the application modules required by the framework
mwf.app.components = {
    /* we need to provide the generic view controller as part of the classes that will be dynamically instantiated by the framework */
    GenericDialogTemplateViewController,
    /* application modules */
    MyApplication,
    MyInitialViewController,
    ListViewViewController
    // TODO-REPEATED: export any further view controllers here
}

// then start the application
window.onload = () => {
    mwf.onloadApplication();
}


