import React from "react";
import { CustomGuideElementProps } from "@component/CustomGuideElementProps.ts";
import ErrorText from "@component/ErrorText.tsx";

export interface AE2ConfigValueProps extends CustomGuideElementProps {
  name: string;
}

function Ae2ConfigValue({ guide, name }: AE2ConfigValueProps) {
  if (!name) {
    return <ErrorText>Missing config value name</ErrorText>;
  }
  const configValue = guide.index.defaultConfigValues[name];
  if (!configValue) {
    return <ErrorText>Unknown config value: {name}</ErrorText>;
  }

  return configValue;
}

export default Ae2ConfigValue;
