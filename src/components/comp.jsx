export function Comp({ ...props }) {
  return (
    <div
      {...props}
      onMouseMove={() => {
        setSize(40);
      }}
      onMouseOut={() => {
        setSize(30);
      }}
    ></div>
  );
}
