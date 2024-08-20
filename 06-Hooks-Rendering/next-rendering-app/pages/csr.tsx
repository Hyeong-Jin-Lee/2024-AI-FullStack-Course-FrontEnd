//CSR(Client Side Rendering)방식으로 UI 표시하기
//client.js 파일에 의해 웹브라우저 환경에서 해당 컴포넌트의 최초화면을

import { useState, useEffect } from "react";

//공통 타입 참조하기
import { IArticle, ArticleTypeCode, BoardTypeCode } from "@/interfaces/article";

const CSR = () => {
  //게시글 목록 상태 데이터 정의 및 초기값 세팅하기
  const [articles, setArticles] = useState<IArticle[]>([]);

  //   //화면이 최초로 렌더링 되는 시점(마운팅시점)을 캐치하기 위해 useEffect훅 사용하기
  //   useEffect(() => {
  //     fetch("http://localhost:5000/api/article/list")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log("백엔드 RESTFUL API에서 전달된 데이터목록", result);
  //         setArticles(result.data);
  //       });
  //   }, []);

  //비동기 방식으로 useEffect훅과 fetch 함수를 사용한 데이터 처리하기
  useEffect(() => {
    //비동기 fetching 함수 정의하기
    const fetchData = async () => {
      //node express 실제 백엔드 주소 호출
      //const res=await fetch("http://localhost:5000/api/article/list")

      //next.js 백엔드 주소 호출
      const res = await fetch("http://localhost:3000/api/article");
      if (!res.ok) {
        throw new Error("HTTP 호출 에러 발생");
      }
      const result = await res.json();
      setArticles(result.data);
    };

    //비동기 fetching함수를 호출하고 에러발생 예외처리 함수
    fetchData().catch((e) => {
      console.error("백엔드 호출에러발생", e);
    });
  }, []);
  return (
    <div>
      CSR-Client Side Rendering 예시코드
      <table className="w-full">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>아이피</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <th>{article.article_id}</th>
              <th>{article.title}</th>
              <th>{article.view_count}</th>
              <th>{article.ip_address}</th>
              <th>{article.reg_date}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSR;
