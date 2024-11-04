import React, { createContext, useReducer, useContext, ReactNode } from "react";

// 상태 타입 정의
interface StateType {
  page: string;
  user?: string;
  sidenavColor: string;
  openConfigurator: boolean;
}

// 액션 타입 정의
type ActionType =
  | { type: "SET_PAGE"; payload: { page: string; user?: string } }
  | { type: "SIDENAV_COLOR"; payload: { sidenavColor: string } }
  | { type: "CHANGE_CONFIG_STATE"; payload: { stateConfigurator: boolean } };

// 초기 상태 정의
const initialState: StateType = {
  page: "dashboard",
  user: "user",
  sidenavColor: "pink",
  openConfigurator: false,
};

// 리듀서 함수 정의
function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
        user: action.payload.user ?? state.user,
      };
    case "SIDENAV_COLOR":
      return {
        ...state,
        sidenavColor: action.payload.sidenavColor,
      };
    case "CHANGE_CONFIG_STATE":
      return {
        ...state,
        openConfigurator: action.payload.stateConfigurator,
      };
    default:
      throw Error;
  }
}

// 컨텍스트 생성
const PageContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
} | undefined>(undefined);

// 컨텍스트 프로바이더 생성
function PageProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
}

// 커스텀 훅
function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
}

// 액션 생성자 함수
const setPage = (dispatch: React.Dispatch<ActionType>, page: string, user?: string) => {
  dispatch({ type: "SET_PAGE", payload: { page, user } });
};

const setSidenavColor = (dispatch: React.Dispatch<ActionType>, sidenavColor: string) => {
  dispatch({ type: "SIDENAV_COLOR", payload: { sidenavColor } });
};

const setOpenConfigurator = (dispatch: React.Dispatch<ActionType>, stateConfigurator: boolean) => {
  dispatch({ type: "CHANGE_CONFIG_STATE", payload: { stateConfigurator } });
};

export { PageProvider, usePageContext, setPage, setSidenavColor, setOpenConfigurator };
