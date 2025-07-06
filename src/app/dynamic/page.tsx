export const dynamic = "force-dynamic";

const DynamicRenderingExample = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const randomUser = await response.json();
  return (
    <div>
        <h1>DynamicRenderingExample</h1>
        <p>{randomUser.results[0].email}</p>
        <p>{new Date().toTimeString()}</p>
    </div>
  )
}

export default DynamicRenderingExample
