// fetching all van data:
export async function getVansData() {
  // const res = await fetch("http://localhost:3500/api/vans");
  const res = await fetch("/vans-data.json");
  if (!res.ok) {
    throw { 
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
}
