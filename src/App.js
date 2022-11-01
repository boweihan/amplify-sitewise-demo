import "@cloudscape-design/global-styles/index.css";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AppLayout from "@cloudscape-design/components/app-layout";
import { Charts } from "./Charts";

import awsExports from "./aws-exports";
import "@iot-app-kit/components/styles.css";
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {(auth) => (
        <AppLayout contentType="form" content={<Charts auth={auth} />} />
      )}
    </Authenticator>
  );
}

export default App;
