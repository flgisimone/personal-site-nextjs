export default (req, res) => {
    const { id } = req.query
    const data =
[
  {
      id: 1,
      name: "Memories Social Platform",
      overview: "Sviluppo di una piattaforma Social che permetta di vedere i post in trend, post pubblicati, utenti suggeriti e ricerca degli amici.",
      media: "https://iili.io/H1gYf72.gif",
      repository: "https://github.com/flgisimone/memories-social-app",
      site: "https://github.com/flgisimone/memories-social-app",
      device: "Desktop, Mobile"
  },
  {
      id: 2,
      name: "Github User Search",
      overview: "Sviluppo di un'applicazione, basata sulle API di github, che permetta di trovare le informazioni principali degli utenti iscritti sulla piattaforma attraverso l'inserimento dello username.",
      media: "https://i.postimg.cc/rFdNYsk3/Github-User-Search.gif",
      repository: "https://github.com/flgisimone/Github-Search-User",
      site: "https://gus-github-user-search.netlify.app/",
      device: "Desktop, Mobile, Tablet"
  },
  {
      id: 3,
      name: "Cocktail Bar",
      overview: "Sviluppo di una piccola applicazione che dia la possibilità di cercare i cocktail con annessa descrizione. L'API utilizzata è stata creata da me utilizzando mockApi e al momento contiene 16 cocktail",
      media: "https://i.postimg.cc/PxBpJGkp/cocktail-Bar2.gif",
      repository: "https://github.com/flgisimone/Cocktail-Bar",
      site: "https://cocktail-bar-by-flgisimone.netlify.app/",
      device: "Desktop, Mobile, Tablet"
  },
  {
      id: 4,
      name: "PrimeFlix",
      overview: "Realizzazione di una piccola Web App che mostri le serie TV più popolari, con aggiunta mia delle serie più votate, estratte dalle API di MovieDB.",
      media: "https://i.postimg.cc/65gLDPPP/prime-Flix23.gif",
      repository: "https://github.com/flgisimone/Main-TV-Series-Primeflix-Amazon-Prime-Clone",
      site: "https://flgisimone.github.io/Main-TV-Series-Primeflix-Amazon-Prime-Clone/",
      device: "Desktop, Mobile"
  },
  {
      id: 5,
      name: "Weather Search",
      overview: "Realizzazione di un'app che mostra il meteo giornaliero, e per fasce orarie giornaliere, in tempo reale di qualsiasi città del mondo.",
      media: "https://i.postimg.cc/yNGWpqxQ/weather-App2.gif",
      repository: "https://github.com/flgisimone/Weather-App",
      site: "https://flgisimone.github.io/Weather-App/",
      device: "Desktop, Mobile, Tablet"
  },
  {
      id: 6,
      name: "Healthy Food",
      overview: "Realizzazione di una landing page sul settore Healthy Food.",
      media: "https://i.postimg.cc/pd3XYDc3/healthy-Food2.gif",
      repository: "https://github.com/flgisimone/Landing-Page-Healthy-Food",
      site: "https://flgisimone.github.io/Landing-Page-Healthy-Food/",
      device: "Desktop, Mobile"
  },
  {
      id: 7,
      name: "To DO List",
      overview: "Realizzazione di un'app relativa alla possibilità di aggiungere, modificare e rimuovere i task da una to do list",
      media: "https://i.postimg.cc/tCdZqmvJ/to-Dolist2.gif",
      repository: "https://github.com/flgisimone/To-DO-List",
      site: "https://github.com/flgisimone/To-DO-List",
      device: "Desktop, Mobile, Tablet"
  }
]
const result = data.find(item => item.id == id)
  
if (!result) {
    res.statusCode = 404
    res.json({ error: "Object not found" })
} else {
    res.statusCode = 200
    res.json(result)
}
}