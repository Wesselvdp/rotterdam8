import Vue from "vue";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

const sentryInit = dsn => {
  Sentry.init({
    dsn,
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true,
      }),
    ],
  });
};

export { sentryInit, Sentry };
