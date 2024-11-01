import { createContext, useReducer } from "react";

// 상태 타입 정의
interface StateType {
  page: string;
  user?: string;
}

// 액션 타입 정의
interface ActionType {
  type: string;
  payload?: {
    page?: string;
    user?: string;
  };
}


// 초기 상태 정의
const initialState: StateType = {
  page: "dashboard",
  user: "user",
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 커스텀 훅 정의
function usePageController() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPage = (value: string, user: string) => {
    dispatch({ type: 'SET_PAGE', payload: { page: value, user: user } });
  };

  return { state, setPage };
}

export default usePageController;
