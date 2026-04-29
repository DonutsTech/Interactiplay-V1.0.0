'use client';

import socket from "@/service/sockets/sockets";
import { createContext, ReactNode, useEffect, useState } from "react";


interface IAnalyticContext {
  data: any;
  setData?: (data: any) => void;
};

const AnalyticContext = createContext<IAnalyticContext>({
  data: null,
  setData: () => {}
});


const AnalyticProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {

  },[]);

  return (
    <AnalyticContext.Provider value={{ data, setData }}>
      {children}
    </AnalyticContext.Provider>
  );
};

export { AnalyticContext, AnalyticProvider };