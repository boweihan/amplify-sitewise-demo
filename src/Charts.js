import { useState } from "react";
import { Auth } from "aws-amplify";
import { initialize } from "@iot-app-kit/source-iotsitewise";
import { LineChart, WebglContext } from "@iot-app-kit/react-components";
import { IoTSiteWiseClient } from "@aws-sdk/client-iotsitewise";
import { IoTEventsClient } from "@aws-sdk/client-iot-events";

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
  });

  return (
    <div>
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
      <WebglContext />
    </div>
  );
};
