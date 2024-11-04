import { createContext, useReducer, useMemo } from "react";

// 상태 타입 정의
interface StateType {
  page: string;
  user?: string;
  sidenavColor : string;
}

// 액션 타입 정의
interface ActionType {
  type: string;
  payload?: {
    page?: string;
    user?: string;
  };
  sidenavColor : string;
}


// 초기 상태 정의
const initialState: StateType = {
  page: "dashboard",
  user: "user",
  sidenavColor : "pink",
};

// 리듀서 함수 정의
function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload?.page || state.page,
        user: action.payload?.user || state.user,
      };
    case "SIDENAV_COLOR":
      return {
        ... state,
        sidenavColor : action?.sidenavColor
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 커스텀 훅 정의
function usePageController(){
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPage = (value: string, user: string) => {
    dispatch({ type: 'SET_PAGE', payload: { page: value, user: user }, sidenavColor:state.sidenavColor});
  };

  const setSidenavColor = (value:string) => dispatch({ type: "SIDENAV_COLOR", sidenavColor: value });

  return { state, setPage, setSidenavColor };
}

export default usePageController
