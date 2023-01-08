module.exports = {
  meta: {
    title: "Script Encoding Initiative",
    description: "Encoding scripts in Unicode since 2002.",
    lang: "en",
    siteUrl: "https://sei.stanford.edu/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Encoding scripts in Unicode since 2002",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://sei.stanford.edu/",
    authorName: "Deborah Anderson",
    authorEmail: "dwanders@berkeley.edu"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Script Encoding Initiative",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium deserunt odio esse."
  }
}