import { CountActionType, ActionType } from "@/interfaces/common";

//재사용 가능한 카운트 리듀서함수 정의하기
export function countReducer(state: number, action: ActionType): number {
  //처리 로직 유형에 따른 비지니스로직 처리 후
  //관리하는 상태값 반환하기, 기본값은 현재 상태값 변환

  const { type } = action;

  switch (type) {
    case CountActionType.PLUS:
      return state + 1;
    case CountActionType.MINUS:
      return state - 1;
    case CountActionType.INIT:
      return 0;
    default:
      return state;
  }
}

//기타 등등 리듀서 함수 추가 export 하세요
