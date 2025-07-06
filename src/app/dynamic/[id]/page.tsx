interface DynamicRenderingDetailExampleProps{
    params: Promise <{id:string}>
}

const DynamicRenderingDetailExample = async({
  params,
}: DynamicRenderingDetailExampleProps
) => {
    const id =  (await params).id;
  return <div>
      <h1>DynamicRenderingDetailExample</h1>
      <p>params : {id}</p>
      <p>{new Date().toTimeString()}</p>
    </div>
};

export default DynamicRenderingDetailExample;
