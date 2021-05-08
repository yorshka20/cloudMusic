import React from "react";
import { Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "../components";
import routerConfig from "../config/routerConfig";
import { useAudioPlay } from "../hooks";

export default function Pages(): JSX.Element {
  useAudioPlay();

  return (
    <React.Fragment>
      <ErrorBoundary>
        <Switch>
          {routerConfig.map((element) => (
            <Route path={element.path} key={element.path}>
              {element.component}
            </Route>
          ))}
        </Switch>
      </ErrorBoundary>

      {/* global component  */}
    </React.Fragment>
  );
}
