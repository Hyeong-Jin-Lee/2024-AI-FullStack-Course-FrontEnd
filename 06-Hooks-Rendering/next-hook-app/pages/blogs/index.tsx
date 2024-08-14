//컴포넌트 내에서의 데이터 상태관리를 위한 useState훅 참조하기
//현재 컴포넌트의 생애주기(LifeCycle) 관리를 위한 useEffect훅 참조하기
import { useState, useEffect } from "react";

//중요: useEffect훅을 이용할 때는 반드시
//next.config.mjs파일 내 reactStrictMode: false 로 설정해야 한다.
//reactStrictMode 설정은 개발시에만 사용되고 서비스/배포와는 무관한 설정임

import Link from "next/link";

//단일 블로그 데이터 타입 정의
interface BlogItem {
  id: number;
  title: string;
  view_cnt: number;
  create_date: string;
}

//게시글 원본 데이터 목록(Database)
const originalData = [
  {
    id: 1,
    title: "블로그 게시글 제목1입니다.",
    view_cnt: 10,
    create_date: "2024-08-14",
  },
  {
    id: 2,
    title: "블로그 게시글 제목2입니다.",
    view_cnt: 20,
    create_date: "2024-08-14",
  },
  {
    id: 3,
    title: "블로그 게시글 제목3입니다.",
    view_cnt: 30,
    create_date: "2024-08-14",
  },
  {
    id: 4,
    title: "블로그 게시글 제목4입니다.",
    view_cnt: 40,
    create_date: "2024-08-14",
  },
  {
    id: 5,
    title: "블로그 게시글 제목5입니다.",
    view_cnt: 50,
    create_date: "2024-08-14",
  },
];

const BlogList = () => {
  //검색어 키워드 상태 데이터 값 정의 및 값 초기화
  const [searchWord, setSearchWord] = useState<string>("");

  const [blogs, setBlogs] = useState<BlogItem[]>([
    {
      id: 1,
      title: "블로그 게시글 제목1입니다.",
      view_cnt: 10,
      create_date: "2024-08-14",
    },
  ]);

  //현재 컴포넌트 최초로 화면에 렌더링되는 시점(Mount)에 실행되는 useEffect훅정의
  //useEffect('최초 마운팅될때 실행할 콜백함수', 생애주기시점정의 [] 빈배열의 경우 최초 마운팅되는 시점을 말합니다.)
  //useEffect('실행할콜백함수',[]); //해당컴포넌트의 최초 마운팅 시점과 언마운팅 시점에 대해 프로그래밍 가능하다.

  //화면 내 변화가 일어날 때마다 실행되는 useEffect훅 정의하기
  useEffect(() => {
    console.log(
      "화면내에서 상태데이터가 변경되어 렌더링이 일어날때마다 실행됩니다."
    );
  });

  //특정 상태 데이터의 변경을 감지하여 프로그래밍을 구현하고 싶은 경우도 useEffect훅을 사용한다.
  //useEffect('실행할콜백함수',[감지할상태데이터])
  //감지할 상태데이터 값이 변경될 때마다 콜백함수가 실행된다.
  useEffect(() => {
    console.log("검색어가 변경되어 블로그목록을 갱신합니다.", searchWord);
    blogSearch();
  }, [searchWord]);

  //검색어 기반 블로그 검색처리함수 정의
  //검색 버튼 클릭시 호출되는 함수
  const blogSearch = () => {
    let searchResult: BlogItem[] = [];
    if (searchWord.length > 0) {
      searchResult = originalData.filter((item) =>
        item.title.includes(searchWord)
      );
      setBlogs(searchResult);
    } else {
      setBlogs(originalData);
    }
  };

  return (
    <div>
      <h1 className="m-4">블로그 조회하기</h1>

      {/* 상단 검색어 입력영역 */}
      <div className="m-4 flex">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="검색어를 입력해주세요."
          className="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        />
        <button
          type="button"
          onClick={blogSearch}
          className="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          검색
        </button>

        <Link href="/">메인 이동하기</Link>
      </div>

      {/* 블로그 검색 결과 목록 표시영역 */}
      <div className="m-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>글번호</th>
              <th>글제목</th>
              <th>조회수</th>
              <th>등록일지</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.view_cnt}</td>
                <td>{item.create_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
