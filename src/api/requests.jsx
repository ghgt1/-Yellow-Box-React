export async function searchMovies(title, year = "", type = "multi", page) {
  try {
    let res = "";
    if (year !== "전체 기간") {
      res = await fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=b18e798ff377ef49f1c335283e7c43d6&language=ko-KR&include_adult=false&page=${page}&query=${title}&year=${year}`
      );
    } else {
      res = await fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=b18e798ff377ef49f1c335283e7c43d6&language=ko-KR&include_adult=false&page=${page}&query=${title}`
      );
    }
    const json = await res.json();
    let { results: movies, total_pages: totalPages } = json;
    return [movies, totalPages];
  } catch (error) {
    console.log(error);
  }
}

export async function detailMovies(id, type) {
  // 이 type은 media_type: movie or tv로 해야할듯
  try {
    let res = "";
    res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=b18e798ff377ef49f1c335283e7c43d6&language=ko-KR`
    );
    const json = await res.json();
    // 정보가 흩어져있어서 그냥 전체 결과를 돌려줌
    return json;
  } catch (error) {
    console.log(error);
  }
}
