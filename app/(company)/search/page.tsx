export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <h1 className="h1-bold">Search</h1>
      <p>{searchParams?.query}</p>
    </div>
  );
}
