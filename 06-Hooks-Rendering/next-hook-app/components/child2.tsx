//전역 메시지 데이터 출력하기
//useContext 훅은 전역 컨텍스트 영역의 데이터를 추출하기 위한 훅이다.
import { useContext } from "react";

//App.tsx에서 생성한 전역상태 데이터 참조하기
//_app.tsx 내에서 제공하는 AppContext를 참조하기
import { AppContext } from "@/pages/_app";

const Child2 = ({ children }: { children: React.ReactNode }) => {
  //useContext 훅을 이용해 AppContet에서 관리하는 msg 전역데이터와
  //msg전역데이터를 변경할 수 있는 세터함수를 불러온다.
  const { msg, setMsg } = useContext(AppContext);

  return (
    <div className="h-[400px] bg-red-400 ">
      Child2:{msg}
      <button
        onClick={() => {
          setMsg("변경완료....");
        }}
        className="rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        전역 메시지값 변경하기
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Child2;
