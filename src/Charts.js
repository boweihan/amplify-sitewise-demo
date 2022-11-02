import { useState } from "react";
import { Auth } from "aws-amplify";
import { I18n } from "aws-amplify";
import { initialize } from "@iot-app-kit/source-iotsitewise";
import {
  LineChart,
  StatusTimeline,
  WebglContext,
} from "@iot-app-kit/react-components";
import { IoTSiteWiseClient } from "@aws-sdk/client-iotsitewise";
import { IoTEventsClient } from "@aws-sdk/client-iot-events";

// amplify detects browser language automatically, but you can set it explicitly
I18n.setLanguage("eng");

const dict = {
  eng: {
    "Sign In": "Sign In",
    "Sign Up": "Sign Up",
    "For Operators": "For Operators",
  },
  fr: {
    "Sign In": "Se connecter",
    "Sign Up": "S'inscrire",
  },
  es: {
    "Sign In": "Registrarse",
    "Sign Up": "Regístrate",
  },
};

I18n.putVocabularies(dict);

const REGION = "us-east-1";

export const Charts = ({ auth }) => {
  const [credentials, setCredentials] = useState("");

  Auth.currentCredentials().then(setCredentials);

  if (!credentials) {
    return false;
  }

  const iotsitewiseClient = new IoTSiteWiseClient({
    region: REGION,
    credentials,
  });

  const ioteventsClient = new IoTEventsClient({
    region: REGION,
    credentials,
  });

  const { query } = initialize({
    iotSiteWiseClient: iotsitewiseClient,
    iotEventsClient: ioteventsClient,
    settings: {
      legacyAPI: false,
    },
  });

  return (
    <div>
      <button onClick={() => Auth.signOut()}>Logout</button>
      <h1>{I18n.get("For Operators")}</h1>
      <div style={{ height: 300 }}>
        <LineChart
          viewport={{ duration: "5m" }}
          queries={[
            query.timeSeriesData({
              assets: [
                {
                  assetId: "f2f74fa8-625a-435f-b89c-d27b2d84f45b",
                  properties: [
                    { propertyId: "d0dc79be-0dc2-418c-ac23-26f33cdb4b8b" },
                  ],
                },
              ],
            }),
          ]}
        />
      </div>
      <div style={{ height: 300 }}>
        <LineChart
          viewport={{ duration: "5m" }}
          queries={[
            query.timeSeriesData({
              assets: [
                {
                  assetId: "7ad86798-adec-4a57-a2ac-14c1b9f29892",
                  properties: [
                    { propertyId: "69607dc2-5fbe-416d-aac2-0382018626e4" },
                  ],
                },
              ],
            }),
          ]}
        />
      </div>
      <h1>For Managers Only!</h1>
      <div style={{ height: 300 }}>
        <StatusTimeline
          viewport={{ duration: "5m" }}
          queries={[
            query.timeSeriesData({
              assets: [
                {
                  assetId: "6cfc1129-bb26-4362-aed3-1e26304e8820",
                  properties: [
                    { propertyId: "08f23651-fbc3-41c7-b1f1-10d3ec869c35" },
                  ],
                },
              ],
            }),
          ]}
        />
      </div>
      <h1>For Admins Only!</h1>
      <div style={{ height: 300 }}>
        <StatusTimeline
          viewport={{ duration: "5m" }}
          queries={[
            query.timeSeriesData({
              assets: [
                {
                  assetId: "5ffffac2-f2ff-432d-ae07-477bc61d024b",
                  properties: [
                    { propertyId: "08f23651-fbc3-41c7-b1f1-10d3ec869c35" },
                  ],
                },
              ],
            }),
          ]}
        />
      </div>
      <WebglContext />
    </div>
  );
};
