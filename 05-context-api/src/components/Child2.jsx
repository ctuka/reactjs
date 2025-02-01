import Child3 from "./Child3";


export default function Child2({data}) {
  return (
      <div>
          <h2>Child - 2</h2>
          <Child3 data2={data} />
      </div>
  );
}
