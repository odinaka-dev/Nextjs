'use client';

import React from "react";
import { Provider as ChakraProvider } from "@/components/ui/provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
