export async function searchMovies(title, year = "", type = "multi") {
  try {
    let res = "";
    if (year !== "all") {
      console.log(year);
      res = await fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=b18e798ff377ef49f1c335283e7c43d6&language=ko-KR&include_adult=false&page=1&query=${title}&year=${year}`
      );
    } else {
      res = await fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=b18e798ff377ef49f1c335283e7c43d6&language=ko-KR&include_adult=false&page=1&query=${title}`
      );
    }
    const json = await res.json();
    let { results: movies } = json;
    return movies;
  } catch (error) {
    console.log(error);
  }
}
