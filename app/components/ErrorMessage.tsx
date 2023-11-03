import React, { PropsWithChildren, ReactNode } from "react";
import { Text } from "@radix-ui/themes";

interface Props {
  children: ReactNode;
}

function ErrorMessage({ children }: PropsWithChildren) {
  if (!children) return null;
  
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}

export default ErrorMessage;
