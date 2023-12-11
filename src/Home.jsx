const API_KEY = "0d0a0a2eaca06b1d8d0b66cb7be22c3c";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (url) => {
  const req = await fetch(`${API_BASE}${url}`);
  const res = await req.json();
  return res;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "amazon",
        title: "Séries Amazon Originais e exlcusivas",
        items: await basicFetch(
          `/discover/tv?with_network=1024&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "drama",
        title: "Séries de drama",
        items: await basicFetch(
          `/discover/tv?with_genres=18&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "best",
        title: "Melhores séries",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "family",
        title: "Séries infantis e para a família",
        items: await basicFetch(
          `/discover/tv?with_genres=10751&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "thriller",
        title: "Séries de suspense",
        items: await basicFetch(
          `/discover/movie?with_genres=53&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "crime",
        title: "Séries policiais",
        items: await basicFetch(
          `/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Séries de comédia",
        items: await basicFetch(
          `/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Séries românticas",
        items: await basicFetch(
          `/discover/tv?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Séries de ação e aventura",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "animation",
        title: "Séries de animação",
        items: await basicFetch(
          `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
      }
    }

    return info;
  },
};
