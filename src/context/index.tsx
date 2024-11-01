import React, { createContext, useContext, useReducer } from "react";

// State와 Action 타입 정의
interface State {
  currentPage: string;
}

type Action = 
  | { type: "SET_PAGE"; payload: string };

// Context와 Provider 생성
const NavigationContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const initialState: State = {
  currentPage: "/",
};

// Reducer 함수 정의
const navigationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

// Provider 컴포넌트 정의
export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, initialState);
  
  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Context 사용을 위한 커스텀 Hook
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
