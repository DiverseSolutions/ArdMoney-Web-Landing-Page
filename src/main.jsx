import React, { Suspense } from "react";
import { render } from "preact";
import { App } from "./app";
import "normalize.css";
import "./css/main.css";
import "./i18n";

render(<App />, document.getElementById("app"));
