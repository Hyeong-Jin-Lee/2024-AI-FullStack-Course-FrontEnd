const Child1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[500px] bg-red-600 ">
      Child1
      <div>{children}</div>
    </div>
  );
};

export default Child1;
