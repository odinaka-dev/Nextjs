// "use client";

// import React from "react";

// export default function Providers({ children }: { children: React.ReactNode }) {
//   return <div>{children}</div>;
// }

"use client";

// importing tanstack
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface TanstackProviderProps {
  children: React.ReactNode;
}

export default function TanstackProvider({ children }: TanstackProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
