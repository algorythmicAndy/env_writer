export default function Home() {
  return (
    <div className='flex flex-col justify-around'>
      <h1>{process.env.BASIC_LITTLE_TITLE}</h1>
      <h2>{process.env.BASIC_LITTLE_SUBTITLE}</h2>
    </div>
  );
}
