'use client';

import { useState, createContext, useContext, useEffect, useMemo, Dispatch, SetStateAction } from "react";

interface SelectPlanContextProps {
  selectedPlan: string | undefined;
  setSelectedPlan: Dispatch<SetStateAction<string | undefined>>;
}

const DEFAULT_CONTEXT_VALUE: SelectPlanContextProps = {
  selectedPlan: undefined,
  setSelectedPlan: () => {},
};

const SelectPlanContext = createContext<SelectPlanContextProps>(DEFAULT_CONTEXT_VALUE);

export const SelectPlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  console.log("SelectPlanContext - selectedPlan:", selectedPlan);
  
  const value = useMemo(() => ({ selectedPlan, setSelectedPlan }), [selectedPlan]);

  return (
    <SelectPlanContext.Provider value={value}>
      {children}
    </SelectPlanContext.Provider>
  );
};

export default SelectPlanContext;

