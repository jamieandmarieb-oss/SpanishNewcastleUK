const imageBase = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const hispanicWorldData = [
  {
    country: "España",
    flag: "🇪🇸",
    image: `${imageBase}Alhambra%20Granada%20Spain.jpg`,
    imageAlt: "The Alhambra palace complex in Granada, Spain.",
    attribution: "Alhambra, Granada; Wikimedia Commons; Creative Commons/public-domain compatible reuse; photographer credited on source page.",
    intro: "Spain offers a wide spectrum of newspapers, literary traditions, contemporary music, visual arts and digital culture that helps learners connect classroom Spanish with everyday public life.",
    sections: {
      newspapers: [
        { name: "El País", description: "Major national daily newspaper with international coverage and extensive culture reporting.", url: "https://elpais.com/", image: "" },
        { name: "El Mundo", description: "National newspaper covering politics, society, economy, opinion and culture.", url: "https://www.elmundo.es/", image: "" },
        { name: "ABC", description: "Long-running Spanish daily newspaper with national and cultural sections.", url: "https://www.abc.es/", image: "" },
        { name: "La Vanguardia", description: "Barcelona-based newspaper with strong Spanish, Catalan and international coverage.", url: "https://www.lavanguardia.com/", image: "" },
        { name: "20minutos", description: "Accessible news outlet useful for learners following current affairs in clear Spanish.", url: "https://www.20minutos.es/", image: "" }
      ],
      magazines: [
        { name: "Muy Interesante", description: "Popular science and culture magazine with accessible explanatory articles.", url: "https://www.muyinteresante.com/", image: "" },
        { name: "National Geographic España", description: "Spanish edition covering geography, history, science and environment.", url: "https://www.nationalgeographic.com.es/", image: "" },
        { name: "Jot Down", description: "Cultural magazine known for long-form interviews, essays and arts writing.", url: "https://www.jotdown.es/", image: "" },
        { name: "Telva", description: "Lifestyle and culture magazine with fashion, interviews and society coverage.", url: "https://www.telva.com/", image: "" },
        { name: "Fotogramas", description: "Film magazine with reviews, interviews and Spanish-language cinema news.", url: "https://www.fotogramas.es/", image: "" }
      ],
      youtubeChannels: [
        { name: "RTVE Noticias", description: "Official public broadcaster news channel with current Spanish-language reporting.", url: "https://www.youtube.com/@rtvenoticias", image: "" },
        { name: "BBC News Mundo", description: "Spanish-language international news channel useful for listening practice.", url: "https://www.youtube.com/@BBCMundo", image: "" },
        { name: "QuantumFracture", description: "Spanish science communication channel explaining physics and curiosity topics.", url: "https://www.youtube.com/@QuantumFracture", image: "" },
        { name: "Jaime Altozano", description: "Music analysis and culture channel with clear Spanish explanations.", url: "https://www.youtube.com/@JaimeAltozano", image: "" },
        { name: "El Rubius", description: "Influential Spanish gaming and entertainment creator with global reach.", url: "https://www.youtube.com/@elrubiusOMG", image: "" }
      ],
      musicians: [
        { name: "Rosalía", description: "Grammy-winning singer who blends flamenco roots with pop, urban and experimental sounds.", url: "https://www.rosalia.com/", image: "" },
        { name: "Paco de Lucía", description: "Legendary flamenco guitarist whose work reshaped modern Spanish music.", url: "https://en.wikipedia.org/wiki/Paco_de_Luc%C3%ADa", image: "" },
        { name: "Alejandro Sanz", description: "Internationally known singer-songwriter associated with Spanish pop and flamenco influences.", url: "https://www.alejandrosanz.com/", image: "" },
        { name: "Lola Flores", description: "Iconic performer remembered for copla, flamenco, film and popular culture.", url: "https://en.wikipedia.org/wiki/Lola_Flores", image: "" },
        { name: "Manu Chao", description: "Multilingual musician with Spanish roots and a major role in global alternative music.", url: "https://www.manuchao.net/", image: "" }
      ],
      artists: [
        { name: "Pablo Picasso", description: "Painter and sculptor central to Cubism and twentieth-century art.", url: "https://www.museopicassomalaga.org/en", image: "" },
        { name: "Salvador Dalí", description: "Surrealist artist known for dreamlike imagery and theatrical public persona.", url: "https://www.salvador-dali.org/en/", image: "" },
        { name: "Joan Miró", description: "Catalan painter and sculptor associated with Surrealism and poetic abstraction.", url: "https://www.fmirobcn.org/en/", image: "" },
        { name: "Maruja Mallo", description: "Avant-garde painter linked to the Generation of '27 and modern Spanish art.", url: "https://en.wikipedia.org/wiki/Maruja_Mallo", image: "" },
        { name: "Antoni Tàpies", description: "Artist known for material abstraction and post-war European modernism.", url: "https://fundaciotapies.org/en/", image: "" }
      ],
      writers: [
        { name: "Miguel de Cervantes", description: "Author of Don Quixote and foundational figure of Spanish literature.", url: "https://www.cervantes.es/default.htm", image: "" },
        { name: "Federico García Lorca", description: "Poet and dramatist whose work is central to modern Spanish letters.", url: "https://www.universolorca.com/en/", image: "" },
        { name: "Carmen Laforet", description: "Novelist best known for Nada, an important post-war Spanish work.", url: "https://en.wikipedia.org/wiki/Carmen_Laforet", image: "" },
        { name: "Rosa Montero", description: "Contemporary novelist and journalist with an extensive body of fiction and essays.", url: "https://www.rosamontero.es/", image: "" },
        { name: "Javier Marías", description: "Internationally translated novelist, essayist and member of the Real Academia Española.", url: "https://en.wikipedia.org/wiki/Javier_Mar%C3%ADas", image: "" }
      ],
      celebrities: [
        { name: "Penélope Cruz", description: "Academy Award-winning actor with major Spanish and international film roles.", url: "https://www.imdb.com/name/nm0004851/", image: "" },
        { name: "Antonio Banderas", description: "Actor and director known for Spanish cinema and Hollywood productions.", url: "https://www.antoniobanderas.com/", image: "" },
        { name: "Rafael Nadal", description: "Tennis champion and one of Spain's most recognised sports figures.", url: "https://rafaelnadal.com/en/", image: "" },
        { name: "Úrsula Corberó", description: "Actor internationally known for La casa de papel and Spanish television.", url: "https://www.imdb.com/name/nm2216549/", image: "" },
        { name: "Pedro Almodóvar", description: "Film director whose work is internationally associated with contemporary Spanish cinema.", url: "https://www.imdb.com/name/nm0000264/", image: "" }
      ]
    }
  },
  {
    country: "Argentina",
    flag: "🇦🇷",
    image: `${imageBase}Buenos%20Aires%20-%20Obelisco.jpg`,
    imageAlt: "The Obelisco landmark in Buenos Aires, Argentina.",
    attribution: "Buenos Aires Obelisco; Wikimedia Commons; licence and author listed on source page.",
    intro: "Argentina is a major centre for Spanish-language journalism, literature, cinema, music and visual culture, with Buenos Aires as one of the region's great cultural capitals.",
    sections: {
      newspapers: [
        { name: "Clarín", description: "Large national newspaper covering Argentina and international news.", url: "https://www.clarin.com/", image: "" },
        { name: "La Nación", description: "Historic Argentine daily with strong politics, economy and culture sections.", url: "https://www.lanacion.com.ar/", image: "" },
        { name: "Página/12", description: "National newspaper known for political analysis and cultural coverage.", url: "https://www.pagina12.com.ar/", image: "" },
        { name: "Ámbito", description: "Argentine newspaper focused on business, finance and public affairs.", url: "https://www.ambito.com/", image: "" },
        { name: "Perfil", description: "News outlet and publisher covering politics, opinion and culture.", url: "https://www.perfil.com/", image: "" }
      ],
      magazines: [
        { name: "Noticias", description: "Current-affairs magazine with politics, society and opinion reporting.", url: "https://noticias.perfil.com/", image: "" },
        { name: "Rolling Stone Argentina", description: "Music and popular-culture magazine with Argentine and international coverage.", url: "https://es.rollingstone.com/arg/", image: "" },
        { name: "Caras Argentina", description: "Lifestyle and celebrity magazine with entertainment interviews.", url: "https://caras.perfil.com/", image: "" },
        { name: "Anfibia", description: "Digital magazine of narrative journalism and social analysis.", url: "https://www.revistaanfibia.com/", image: "" },
        { name: "El Gráfico", description: "Historic sports magazine associated with Argentine football culture.", url: "https://www.elgrafico.com.ar/", image: "" }
      ],
      youtubeChannels: [
        { name: "La Nación", description: "Official channel for Argentine news, interviews and explainers.", url: "https://www.youtube.com/@lanacion", image: "" },
        { name: "Todo Noticias", description: "Argentine television news channel with live and recorded reports.", url: "https://www.youtube.com/@todonoticias", image: "" },
        { name: "Telefe", description: "Major Argentine broadcaster with entertainment, interviews and programme clips.", url: "https://www.youtube.com/@Telefe", image: "" },
        { name: "Les Amateurs", description: "Argentine food and travel channel useful for everyday listening practice.", url: "https://www.youtube.com/@LesAmateurs", image: "" },
        { name: "Te lo resumo", description: "Popular Argentine pop-culture channel summarising films and series.", url: "https://www.youtube.com/@teloresumo", image: "" }
      ],
      musicians: [
        { name: "Mercedes Sosa", description: "Foundational folk singer and voice of Latin American nueva canción.", url: "https://en.wikipedia.org/wiki/Mercedes_Sosa", image: "" },
        { name: "Gustavo Cerati", description: "Singer, guitarist and songwriter from Soda Stereo, central to Latin rock.", url: "https://www.cerati.com/", image: "" },
        { name: "Charly García", description: "Influential rock musician and songwriter in Argentine popular music.", url: "https://en.wikipedia.org/wiki/Charly_Garc%C3%ADa", image: "" },
        { name: "Tini", description: "Contemporary pop singer and actor with a large international following.", url: "https://tinistoessel.com/", image: "" },
        { name: "Lali", description: "Singer, actor and pop performer active in music, television and film.", url: "https://www.lalioficial.com/", image: "" }
      ],
      artists: [
        { name: "Xul Solar", description: "Painter and inventor associated with Argentine avant-garde art.", url: "https://en.wikipedia.org/wiki/Xul_Solar", image: "" },
        { name: "Antonio Berni", description: "Painter and printmaker known for socially engaged Argentine art.", url: "https://en.wikipedia.org/wiki/Antonio_Berni", image: "" },
        { name: "Marta Minujín", description: "Conceptual and pop artist known for large-scale participatory works.", url: "https://en.wikipedia.org/wiki/Marta_Minuj%C3%ADn", image: "" },
        { name: "León Ferrari", description: "Artist whose work engages politics, religion and human rights.", url: "https://en.wikipedia.org/wiki/Le%C3%B3n_Ferrari", image: "" },
        { name: "Raquel Forner", description: "Painter associated with modern Argentine art and expressive figuration.", url: "https://en.wikipedia.org/wiki/Raquel_Forner", image: "" }
      ],
      writers: [
        { name: "Jorge Luis Borges", description: "Author of stories, essays and poems that transformed world literature.", url: "https://www.borges.pitt.edu/", image: "" },
        { name: "Julio Cortázar", description: "Boom-era writer known for Hopscotch and innovative short fiction.", url: "https://en.wikipedia.org/wiki/Julio_Cort%C3%A1zar", image: "" },
        { name: "Silvina Ocampo", description: "Writer of stories and poetry with a distinctive fantastic imagination.", url: "https://en.wikipedia.org/wiki/Silvina_Ocampo", image: "" },
        { name: "Samanta Schweblin", description: "Contemporary author of fiction translated widely into English.", url: "https://en.wikipedia.org/wiki/Samanta_Schweblin", image: "" },
        { name: "Mariana Enríquez", description: "Contemporary writer known for gothic and socially sharp fiction.", url: "https://en.wikipedia.org/wiki/Mariana_Enr%C3%ADquez", image: "" }
      ],
      celebrities: [
        { name: "Lionel Messi", description: "Footballer widely regarded as one of the greatest players in the sport.", url: "https://messi.com/en/", image: "" },
        { name: "Ricardo Darín", description: "Actor known for Argentine cinema and internationally released films.", url: "https://www.imdb.com/name/nm0201857/", image: "" },
        { name: "Anya Taylor-Joy", description: "Actor born in Miami and raised partly in Argentina, fluent in Spanish.", url: "https://www.imdb.com/name/nm5896355/", image: "" },
        { name: "Mafalda", description: "Beloved comic character by Quino and a major Argentine cultural icon.", url: "https://en.wikipedia.org/wiki/Mafalda", image: "" },
        { name: "Mirtha Legrand", description: "Television host and actor with a long career in Argentine media.", url: "https://en.wikipedia.org/wiki/Mirtha_Legrand", image: "" }
      ]
    }
  },
  {
    country: "Chile",
    flag: "🇨🇱",
    image: `${imageBase}Torres%20del%20Paine%20National%20Park.jpg`,
    imageAlt: "Mountain landscape in Torres del Paine National Park, Chile.",
    attribution: "Torres del Paine National Park; Wikimedia Commons; licence and author listed on source page.",
    intro: "Chile combines a strong poetic tradition, influential journalism, contemporary music and striking visual culture shaped by the Pacific coast, the Andes and urban life.",
    sections: {
      newspapers: [
        { name: "El Mercurio", description: "Historic Chilean newspaper with national and international coverage.", url: "https://www.emol.com/", image: "" },
        { name: "La Tercera", description: "National newspaper covering politics, economy, culture and society.", url: "https://www.latercera.com/", image: "" },
        { name: "BioBioChile", description: "Digital news outlet with regional and national reporting.", url: "https://www.biobiochile.cl/", image: "" },
        { name: "El Mostrador", description: "Online newspaper known for politics, opinion and public-affairs analysis.", url: "https://www.elmostrador.cl/", image: "" },
        { name: "Diario Financiero", description: "Business and finance newspaper serving Chilean readers.", url: "https://www.df.cl/", image: "" }
      ],
      magazines: [
        { name: "Qué Pasa", description: "Current-affairs magazine brand associated with politics and analysis.", url: "https://www.latercera.com/etiqueta/que-pasa/", image: "" },
        { name: "Paula", description: "Chilean magazine brand covering lifestyle, culture and society.", url: "https://www.latercera.com/etiqueta/paula/", image: "" },
        { name: "The Clinic", description: "Magazine and digital outlet known for satire, politics and culture.", url: "https://www.theclinic.cl/", image: "" },
        { name: "Capital", description: "Business, trends and current-affairs magazine.", url: "https://www.capital.cl/", image: "" },
        { name: "Revista Santiago", description: "Magazine of books, culture and public debate from Universidad Diego Portales.", url: "https://revistasantiago.cl/", image: "" }
      ],
      youtubeChannels: [
        { name: "24 Horas", description: "Official Chilean public television news channel.", url: "https://www.youtube.com/@24horasTVN", image: "" },
        { name: "CNN Chile", description: "News channel with reports, interviews and current-affairs programmes.", url: "https://www.youtube.com/@CNNChile", image: "" },
        { name: "La Tercera", description: "Video reporting and interviews from the Chilean newspaper.", url: "https://www.youtube.com/@LaTercera", image: "" },
        { name: "Hola Soy Germán", description: "Popular entertainment channel by Chilean creator Germán Garmendia.", url: "https://www.youtube.com/@HolaSoyGerman", image: "" },
        { name: "JuegaGerman", description: "Gaming and entertainment channel by Germán Garmendia.", url: "https://www.youtube.com/@JuegaGerman", image: "" }
      ],
      musicians: [
        { name: "Violeta Parra", description: "Folk musician, artist and collector central to Chilean cultural history.", url: "https://en.wikipedia.org/wiki/Violeta_Parra", image: "" },
        { name: "Víctor Jara", description: "Singer-songwriter and theatre director associated with nueva canción.", url: "https://en.wikipedia.org/wiki/V%C3%ADctor_Jara", image: "" },
        { name: "Mon Laferte", description: "Singer-songwriter known for rock, bolero, pop and powerful live performance.", url: "https://www.monlaferte.com/", image: "" },
        { name: "Los Bunkers", description: "Rock band from Concepción with a major following across Latin America.", url: "https://www.losbunkers.cl/", image: "" },
        { name: "Ana Tijoux", description: "Rapper and singer known for socially conscious lyrics and Latin hip-hop.", url: "https://www.anatijoux.com/", image: "" }
      ],
      artists: [
        { name: "Roberto Matta", description: "Surrealist painter and major figure in international modern art.", url: "https://en.wikipedia.org/wiki/Roberto_Matta", image: "" },
        { name: "Cecilia Vicuña", description: "Artist and poet known for textiles, installations and ecological themes.", url: "https://en.wikipedia.org/wiki/Cecilia_Vicu%C3%B1a", image: "" },
        { name: "Claudio Bravo", description: "Painter associated with hyperrealist still lifes and portraits.", url: "https://en.wikipedia.org/wiki/Claudio_Bravo_(painter)", image: "" },
        { name: "Nemesia Antúnez", description: "Printmaker and painter active in Chilean modern art.", url: "https://en.wikipedia.org/wiki/Nemesia_Ant%C3%BAnez", image: "" },
        { name: "Gracia Barrios", description: "Painter whose work explores social and human themes.", url: "https://en.wikipedia.org/wiki/Gracia_Barrios", image: "" }
      ],
      writers: [
        { name: "Pablo Neruda", description: "Nobel Prize-winning poet and one of the best-known Chilean writers.", url: "https://fundacionneruda.org/en/", image: "" },
        { name: "Gabriela Mistral", description: "Poet, educator and first Latin American winner of the Nobel Prize in Literature.", url: "https://en.wikipedia.org/wiki/Gabriela_Mistral", image: "" },
        { name: "Isabel Allende", description: "Internationally read novelist known for historical and family narratives.", url: "https://isabelallende.com/en", image: "" },
        { name: "Nicanor Parra", description: "Poet famous for antipoetry and radical literary experimentation.", url: "https://en.wikipedia.org/wiki/Nicanor_Parra", image: "" },
        { name: "Diamela Eltit", description: "Novelist and essayist associated with experimental and political writing.", url: "https://en.wikipedia.org/wiki/Diamela_Eltit", image: "" }
      ],
      celebrities: [
        { name: "Pedro Pascal", description: "Actor known for international television and film roles.", url: "https://www.imdb.com/name/nm0050959/", image: "" },
        { name: "Cote de Pablo", description: "Actor and singer known internationally for television work.", url: "https://www.imdb.com/name/nm1580243/", image: "" },
        { name: "Alexis Sánchez", description: "Footballer and prominent Chilean sports figure.", url: "https://en.wikipedia.org/wiki/Alexis_S%C3%A1nchez", image: "" },
        { name: "Arturo Vidal", description: "Footballer known for club and national-team success.", url: "https://en.wikipedia.org/wiki/Arturo_Vidal", image: "" },
        { name: "Diana Bolocco", description: "Television presenter and media personality in Chile.", url: "https://en.wikipedia.org/wiki/Diana_Bolocco", image: "" }
      ]
    }
  },
  {
    country: "Perú",
    flag: "🇵🇪",
    image: `${imageBase}Machu%20Picchu%2C%20Peru.jpg`,
    imageAlt: "Machu Picchu in the Andes of Perú.",
    attribution: "Machu Picchu; Wikimedia Commons; licence and author listed on source page.",
    intro: "Perú brings together Andean, Amazonian and coastal cultural traditions, influential journalism, Nobel-winning literature and internationally recognised cuisine and music.",
    sections: {
      newspapers: [
        { name: "El Comercio", description: "Historic Peruvian newspaper covering national, international and cultural news.", url: "https://elcomercio.pe/", image: "" },
        { name: "La República", description: "National daily newspaper with politics, society and opinion coverage.", url: "https://larepublica.pe/", image: "" },
        { name: "Gestión", description: "Business and economy newspaper for Peruvian and regional news.", url: "https://gestion.pe/", image: "" },
        { name: "Perú21", description: "Daily newspaper with accessible national news and opinion.", url: "https://peru21.pe/", image: "" },
        { name: "Expreso", description: "Peruvian daily covering politics, society and current affairs.", url: "https://www.expreso.com.pe/", image: "" }
      ],
      magazines: [
        { name: "Caretas", description: "Long-running news magazine known for political and investigative reporting.", url: "https://caretas.pe/", image: "" },
        { name: "Somos", description: "Weekend magazine from El Comercio focused on culture and lifestyle.", url: "https://elcomercio.pe/somos/", image: "" },
        { name: "Etiqueta Negra", description: "Influential narrative journalism magazine from Perú.", url: "https://en.wikipedia.org/wiki/Etiqueta_Negra", image: "" },
        { name: "Cosas Perú", description: "Lifestyle and society magazine with cultural and entertainment coverage.", url: "https://cosas.pe/", image: "" },
        { name: "Asia Sur", description: "Lifestyle magazine associated with Peruvian culture, food and society.", url: "https://asiasur.com/", image: "" }
      ],
      youtubeChannels: [
        { name: "TVPerú Noticias", description: "Official public broadcaster news channel from Perú.", url: "https://www.youtube.com/@TVPeruNoticias", image: "" },
        { name: "El Comercio Perú", description: "Official video channel for the Peruvian newspaper.", url: "https://www.youtube.com/@elcomercio", image: "" },
        { name: "La República", description: "Peruvian news videos, interviews and current-affairs coverage.", url: "https://www.youtube.com/@larepublicape", image: "" },
        { name: "Misias pero viajeras", description: "Travel and culture channel by Peruvian creators.", url: "https://www.youtube.com/@Misiasperoviajeras", image: "" },
        { name: "Hablando Huevadas", description: "Popular Peruvian comedy and conversation channel for advanced listening.", url: "https://www.youtube.com/@HablandoHuevadas", image: "" }
      ],
      musicians: [
        { name: "Susana Baca", description: "Singer and scholar central to Afro-Peruvian music internationally.", url: "https://susanabaca.com/", image: "" },
        { name: "Chabuca Granda", description: "Composer and singer whose songs are classics of Peruvian music.", url: "https://en.wikipedia.org/wiki/Chabuca_Granda", image: "" },
        { name: "Yma Sumac", description: "Internationally famous singer known for an extraordinary vocal range.", url: "https://en.wikipedia.org/wiki/Yma_Sumac", image: "" },
        { name: "Eva Ayllón", description: "Singer associated with música criolla and Afro-Peruvian traditions.", url: "https://en.wikipedia.org/wiki/Eva_Ayll%C3%B3n", image: "" },
        { name: "Gian Marco", description: "Singer-songwriter and Latin Grammy winner from Lima.", url: "https://gianmarco.pe/", image: "" }
      ],
      artists: [
        { name: "Fernando de Szyszlo", description: "Painter and sculptor associated with Latin American abstraction.", url: "https://en.wikipedia.org/wiki/Fernando_de_Szyszlo", image: "" },
        { name: "Tilsa Tsuchiya", description: "Painter whose work blends myth, surrealism and Peruvian visual traditions.", url: "https://en.wikipedia.org/wiki/Tilsa_Tsuchiya", image: "" },
        { name: "Julia Codesido", description: "Painter associated with indigenismo and Peruvian modern art.", url: "https://en.wikipedia.org/wiki/Julia_Codesido", image: "" },
        { name: "José Sabogal", description: "Painter and muralist linked to Peruvian indigenista art.", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Sabogal", image: "" },
        { name: "Teresa Burga", description: "Conceptual artist and pioneer of experimental contemporary art in Perú.", url: "https://en.wikipedia.org/wiki/Teresa_Burga", image: "" }
      ],
      writers: [
        { name: "Mario Vargas Llosa", description: "Nobel Prize-winning novelist and essayist from Perú.", url: "https://www.mvargasllosa.com/", image: "" },
        { name: "César Vallejo", description: "Poet whose work is central to modern Spanish-language poetry.", url: "https://en.wikipedia.org/wiki/C%C3%A9sar_Vallejo", image: "" },
        { name: "Clorinda Matto de Turner", description: "Novelist and journalist important to nineteenth-century Peruvian literature.", url: "https://en.wikipedia.org/wiki/Clorinda_Matto_de_Turner", image: "" },
        { name: "José María Arguedas", description: "Writer and anthropologist who explored Quechua and mestizo worlds.", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Mar%C3%ADa_Arguedas", image: "" },
        { name: "Gabriela Wiener", description: "Contemporary writer and journalist known for memoir and chronicle.", url: "https://en.wikipedia.org/wiki/Gabriela_Wiener", image: "" }
      ],
      celebrities: [
        { name: "Sofía Mulanovich", description: "World champion surfer and major Peruvian sports figure.", url: "https://en.wikipedia.org/wiki/Sof%C3%ADa_Mulanovich", image: "" },
        { name: "Christian Meier", description: "Actor and singer known in Peruvian and Latin American television.", url: "https://www.imdb.com/name/nm0576621/", image: "" },
        { name: "Magaly Medina", description: "Television presenter and entertainment journalist in Perú.", url: "https://en.wikipedia.org/wiki/Magaly_Medina", image: "" },
        { name: "Natalie Vértiz", description: "Model, presenter and public figure from Perú.", url: "https://en.wikipedia.org/wiki/Natalie_V%C3%A9rtiz", image: "" },
        { name: "Gastón Acurio", description: "Chef and cultural ambassador for Peruvian cuisine.", url: "https://en.wikipedia.org/wiki/Gast%C3%B3n_Acurio", image: "" }
      ]
    }
  },
  {
    country: "Uruguay",
    flag: "🇺🇾",
    image: `${imageBase}Palacio%20Salvo%20Montevideo.jpg`,
    imageAlt: "Palacio Salvo in Montevideo, Uruguay.",
    attribution: "Palacio Salvo, Montevideo; Wikimedia Commons; licence and author listed on source page.",
    intro: "Uruguay has an outsized literary, musical and journalistic presence, with Montevideo at the centre of a lively media and cultural scene.",
    sections: {
      newspapers: [
        { name: "El País Uruguay", description: "Major Uruguayan daily covering national news, opinion and culture.", url: "https://www.elpais.com.uy/", image: "" },
        { name: "La Diaria", description: "Independent newspaper with politics, culture, education and society reporting.", url: "https://ladiaria.com.uy/", image: "" },
        { name: "El Observador", description: "National news outlet with business, politics and cultural coverage.", url: "https://www.elobservador.com.uy/", image: "" },
        { name: "La República", description: "Uruguayan newspaper covering national public affairs and society.", url: "https://www.republica.com.uy/", image: "" },
        { name: "Búsqueda", description: "Weekly newspaper known for political and economic analysis.", url: "https://www.busqueda.com.uy/", image: "" }
      ],
      magazines: [
        { name: "Caras Uruguay", description: "Lifestyle and celebrity magazine for Uruguayan readers.", url: "https://www.caras.uy/", image: "" },
        { name: "Galería", description: "Uruguayan magazine covering society, culture and lifestyle.", url: "https://www.busqueda.com.uy/Secciones/Galeria-uc3", image: "" },
        { name: "Dossier", description: "Arts and culture magazine from Uruguay.", url: "https://revistadossier.com.uy/", image: "" },
        { name: "Lento", description: "Magazine of narrative journalism, essays and cultural reflection.", url: "https://ladiaria.com.uy/lento/", image: "" },
        { name: "Paula Uruguay", description: "Lifestyle magazine brand with fashion, culture and society topics.", url: "https://www.elpais.com.uy/eme", image: "" }
      ],
      youtubeChannels: [
        { name: "Canal 10 Uruguay", description: "Uruguayan broadcaster with news, interviews and entertainment clips.", url: "https://www.youtube.com/@Canal10Uruguay", image: "" },
        { name: "Teledoce", description: "Television channel with current affairs, programmes and culture clips.", url: "https://www.youtube.com/@Teledoce", image: "" },
        { name: "El País Uruguay", description: "Video reports and interviews from the Uruguayan newspaper.", url: "https://www.youtube.com/@elpaisuy", image: "" },
        { name: "La Diaria", description: "News, interviews and explainers from the independent Uruguayan outlet.", url: "https://www.youtube.com/@ladiaria", image: "" },
        { name: "Tiranos Temblad TV", description: "Uruguayan channel highlighting local online culture and humour.", url: "https://www.youtube.com/@TiranosTembladTV", image: "" }
      ],
      musicians: [
        { name: "Jorge Drexler", description: "Oscar-winning singer-songwriter known for poetic lyrics and global collaborations.", url: "https://www.jorgedrexler.com/", image: "" },
        { name: "Natalia Oreiro", description: "Singer and actor with a major following in Latin America and Europe.", url: "https://en.wikipedia.org/wiki/Natalia_Oreiro", image: "" },
        { name: "Rubén Rada", description: "Musician associated with candombe, jazz and popular Uruguayan music.", url: "https://en.wikipedia.org/wiki/Rub%C3%A9n_Rada", image: "" },
        { name: "Jaime Roos", description: "Singer-songwriter blending candombe, murga, rock and popular song.", url: "https://en.wikipedia.org/wiki/Jaime_Roos", image: "" },
        { name: "No Te Va Gustar", description: "Rock band from Montevideo with a strong regional following.", url: "https://notevagustar.com/", image: "" }
      ],
      artists: [
        { name: "Joaquín Torres García", description: "Painter and theorist central to Constructivist Universalism.", url: "https://en.wikipedia.org/wiki/Joaqu%C3%ADn_Torres_Garc%C3%ADa", image: "" },
        { name: "Pedro Figari", description: "Painter known for scenes of Uruguayan social and cultural life.", url: "https://en.wikipedia.org/wiki/Pedro_Figari", image: "" },
        { name: "Carlos Páez Vilaró", description: "Painter, sculptor and creator associated with Casapueblo.", url: "https://en.wikipedia.org/wiki/Carlos_P%C3%A1ez_Vilar%C3%B3", image: "" },
        { name: "Petrona Viera", description: "Painter recognised for modern Uruguayan art and Planismo.", url: "https://en.wikipedia.org/wiki/Petrona_Viera", image: "" },
        { name: "Carmelo Arden Quin", description: "Artist and poet associated with the Madí movement.", url: "https://en.wikipedia.org/wiki/Carmelo_Arden_Quin", image: "" }
      ],
      writers: [
        { name: "Mario Benedetti", description: "Poet, novelist and essayist with broad popularity across the Hispanic world.", url: "https://en.wikipedia.org/wiki/Mario_Benedetti", image: "" },
        { name: "Eduardo Galeano", description: "Writer and journalist known for literary histories and political essays.", url: "https://en.wikipedia.org/wiki/Eduardo_Galeano", image: "" },
        { name: "Juana de Ibarbourou", description: "Poet and a major figure in twentieth-century Uruguayan literature.", url: "https://en.wikipedia.org/wiki/Juana_de_Ibarbourou", image: "" },
        { name: "Idea Vilariño", description: "Poet, critic and translator associated with the Generation of '45.", url: "https://en.wikipedia.org/wiki/Idea_Vilari%C3%B1o", image: "" },
        { name: "Horacio Quiroga", description: "Short-story writer known for intense tales of jungle, danger and psychology.", url: "https://en.wikipedia.org/wiki/Horacio_Quiroga", image: "" }
      ],
      celebrities: [
        { name: "Luis Suárez", description: "Footballer and one of Uruguay's most recognised sports personalities.", url: "https://en.wikipedia.org/wiki/Luis_Su%C3%A1rez", image: "" },
        { name: "Edinson Cavani", description: "Footballer known for club and national-team success.", url: "https://en.wikipedia.org/wiki/Edinson_Cavani", image: "" },
        { name: "Diego Forlán", description: "Former footballer and World Cup Golden Ball winner.", url: "https://en.wikipedia.org/wiki/Diego_Forl%C3%A1n", image: "" },
        { name: "China Zorrilla", description: "Actor and cultural figure loved in Uruguay and Argentina.", url: "https://en.wikipedia.org/wiki/China_Zorrilla", image: "" },
        { name: "Enzo Francescoli", description: "Football icon and influential Uruguayan sporting figure.", url: "https://en.wikipedia.org/wiki/Enzo_Francescoli", image: "" }
      ]
    }
  },
  {
    country: "Bolivia",
    flag: "🇧🇴",
    image: `${imageBase}Salar%20de%20Uyuni%2C%20Bolivia.jpg`,
    imageAlt: "The Salar de Uyuni salt flat in Bolivia.",
    attribution: "Salar de Uyuni; Wikimedia Commons; licence and author listed on source page.",
    intro: "Bolivia's cultural landscape includes Indigenous languages and traditions, Andean music, literary voices and media from highland and lowland regions.",
    sections: {
      newspapers: [
        { name: "La Razón", description: "Bolivian newspaper covering politics, society, economy and culture.", url: "https://www.la-razon.com/", image: "" },
        { name: "El Deber", description: "Santa Cruz-based newspaper with national and regional coverage.", url: "https://eldeber.com.bo/", image: "" },
        { name: "Los Tiempos", description: "Cochabamba newspaper covering Bolivia and regional affairs.", url: "https://www.lostiempos.com/", image: "" },
        { name: "Página Siete", description: "Bolivian newspaper archive and brand associated with public-affairs reporting.", url: "https://en.wikipedia.org/wiki/P%C3%A1gina_Siete", image: "" },
        { name: "Opinión", description: "Cochabamba-based newspaper covering local and national news.", url: "https://www.opinion.com.bo/", image: "" }
      ],
      magazines: [
        { name: "Escape", description: "Cultural supplement and magazine associated with Bolivian arts coverage.", url: "https://www.la-razon.com/escape/", image: "" },
        { name: "Nueva Crónica", description: "Bolivian magazine of analysis, history and public debate.", url: "https://nuevacronica.com.bo/", image: "" },
        { name: "OH!", description: "Lifestyle and culture magazine from Los Tiempos.", url: "https://www.lostiempos.com/oh", image: "" },
        { name: "COSAS Bolivia", description: "Lifestyle and society magazine edition for Bolivia.", url: "https://www.cosas.com.bo/", image: "" },
        { name: "Oxígeno", description: "Bolivian digital magazine and news platform with society and culture items.", url: "https://www.oxigeno.bo/", image: "" }
      ],
      youtubeChannels: [
        { name: "Bolivia TV", description: "Official public television channel with news and cultural programming.", url: "https://www.youtube.com/@BoliviaTVOficial", image: "" },
        { name: "ATB Digital", description: "Bolivian television news and current-affairs channel.", url: "https://www.youtube.com/@ATBDigital", image: "" },
        { name: "Red Uno Bolivia", description: "Broadcaster with news, entertainment and interviews.", url: "https://www.youtube.com/@RedUnoBolivia", image: "" },
        { name: "Unitel Bolivia", description: "Major television channel with reporting and programmes.", url: "https://www.youtube.com/@UNITELBOLIVIA", image: "" },
        { name: "El Deber", description: "Video journalism and interviews from the Santa Cruz newspaper.", url: "https://www.youtube.com/@eldeberbo", image: "" }
      ],
      musicians: [
        { name: "Los Kjarkas", description: "Folk group internationally associated with Bolivian Andean music.", url: "https://en.wikipedia.org/wiki/Los_Kjarkas", image: "" },
        { name: "Luzmila Carpio", description: "Quechua singer and cultural ambassador for Indigenous music.", url: "https://en.wikipedia.org/wiki/Luzmila_Carpio", image: "" },
        { name: "Gladys Moreno", description: "Singer remembered as a major voice of Bolivian popular music.", url: "https://en.wikipedia.org/wiki/Gladys_Moreno", image: "" },
        { name: "Savia Andina", description: "Influential group performing and popularising Andean music.", url: "https://en.wikipedia.org/wiki/Savia_Andina", image: "" },
        { name: "Octavia", description: "Bolivian rock band with a long career in contemporary music.", url: "https://en.wikipedia.org/wiki/Octavia_(band)", image: "" }
      ],
      artists: [
        { name: "Marina Núñez del Prado", description: "Sculptor known for modern works inspired by Andean forms.", url: "https://en.wikipedia.org/wiki/Marina_N%C3%BA%C3%B1ez_del_Prado", image: "" },
        { name: "Roberto Mamani Mamani", description: "Aymara artist recognised for vivid colours and Indigenous themes.", url: "https://en.wikipedia.org/wiki/Roberto_Mamani_Mamani", image: "" },
        { name: "Cecilio Guzmán de Rojas", description: "Painter associated with twentieth-century Bolivian indigenismo.", url: "https://en.wikipedia.org/wiki/Cecilio_Guzm%C3%A1n_de_Rojas", image: "" },
        { name: "Gil Imaná", description: "Painter and muralist important to Bolivian contemporary art.", url: "https://en.wikipedia.org/wiki/Gil_Iman%C3%A1", image: "" },
        { name: "Sonia Falcone", description: "Contemporary artist known for installations and large-scale colour-based work.", url: "https://en.wikipedia.org/wiki/Sonia_Falcone", image: "" }
      ],
      writers: [
        { name: "Adela Zamudio", description: "Poet, educator and early feminist voice in Bolivian letters.", url: "https://en.wikipedia.org/wiki/Adela_Zamudio", image: "" },
        { name: "Alcides Arguedas", description: "Writer and historian known for novels and essays on Bolivian society.", url: "https://en.wikipedia.org/wiki/Alcides_Arguedas", image: "" },
        { name: "Jaime Sáenz", description: "Poet and novelist associated with La Paz and existential writing.", url: "https://en.wikipedia.org/wiki/Jaime_S%C3%A1enz", image: "" },
        { name: "Edmundo Paz Soldán", description: "Contemporary novelist and critic with international academic presence.", url: "https://en.wikipedia.org/wiki/Edmundo_Paz_Sold%C3%A1n", image: "" },
        { name: "Giovanna Rivero", description: "Contemporary fiction writer translated and read internationally.", url: "https://en.wikipedia.org/wiki/Giovanna_Rivero", image: "" }
      ],
      celebrities: [
        { name: "Claudia Arce", description: "Model, actor and public figure crowned Miss Bolivia 2009.", url: "https://en.wikipedia.org/wiki/Claudia_Arce_Lemus", image: "" },
        { name: "Carla Ortiz", description: "Actor, producer and humanitarian from Bolivia.", url: "https://www.imdb.com/name/nm0651039/", image: "" },
        { name: "Ximena Herrera", description: "Actor born in Bolivia and active in Latin American television.", url: "https://www.imdb.com/name/nm1708696/", image: "" },
        { name: "Marco Antonio Etcheverry", description: "Footballer and one of Bolivia's best-known sports figures.", url: "https://en.wikipedia.org/wiki/Marco_Etcheverry", image: "" },
        { name: "Erwin Sánchez", description: "Former footballer and coach, prominent in Bolivian sport.", url: "https://en.wikipedia.org/wiki/Erwin_S%C3%A1nchez", image: "" }
      ]
    }
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Cartagena_old_town.JPG",
    imageAlt: "Colourful colonial streets in Cartagena, Colombia.",
    attribution: "Cartagena old town; Wikimedia Commons; licence and author listed on source page.",
    intro: "Colombia is a rich source for Spanish learners, from literary classics and journalism to music, film, television and digital media.",
    sections: {
      newspapers: [
        { name: "El Tiempo", description: "Major Colombian newspaper with national and international coverage.", url: "https://www.eltiempo.com/", image: "" },
        { name: "El Espectador", description: "Historic Colombian newspaper with politics, culture and opinion.", url: "https://www.elespectador.com/", image: "" },
        { name: "Semana", description: "News magazine and digital outlet covering current affairs.", url: "https://www.semana.com/", image: "" },
        { name: "El Colombiano", description: "Medellín-based newspaper with regional and national reporting.", url: "https://www.elcolombiano.com/", image: "" },
        { name: "La Silla Vacía", description: "Digital political journalism outlet with explainers and analysis.", url: "https://www.lasillavacia.com/", image: "" }
      ],
      magazines: [
        { name: "Arcadia", description: "Colombian cultural magazine focused on books, arts and ideas.", url: "https://www.revistaarcadia.com/", image: "" },
        { name: "Cromos", description: "Historic magazine covering lifestyle, entertainment and society.", url: "https://www.cromos.com.co/", image: "" },
        { name: "SoHo Colombia", description: "Magazine brand known for interviews, essays and popular culture.", url: "https://www.soho.co/", image: "" },
        { name: "Dinero", description: "Business and economy magazine brand associated with Colombian finance coverage.", url: "https://www.semana.com/economia/", image: "" },
        { name: "Shock", description: "Music, youth culture and entertainment magazine from Colombia.", url: "https://www.shock.co/", image: "" }
      ],
      youtubeChannels: [
        { name: "Noticias Caracol", description: "Official news channel from the Colombian broadcaster.", url: "https://www.youtube.com/@NoticiasCaracol", image: "" },
        { name: "El Tiempo", description: "Video reporting and interviews from the Colombian newspaper.", url: "https://www.youtube.com/@ElTiempo", image: "" },
        { name: "DianaUribe.fm", description: "History and culture talks by Colombian historian Diana Uribe.", url: "https://www.youtube.com/@DianaUribefm", image: "" },
        { name: "Juan Pablo Jaramillo", description: "Colombian entertainment creator and internet personality.", url: "https://www.youtube.com/@JuanPabloJaramillo", image: "" },
        { name: "Amara Que Linda", description: "Colombian creator known for lifestyle and entertainment videos.", url: "https://www.youtube.com/@AmaraQueLinda", image: "" }
      ],
      musicians: [
        { name: "Shakira", description: "Global pop star from Barranquilla with Spanish and English-language work.", url: "https://www.shakira.com/", image: "" },
        { name: "Carlos Vives", description: "Singer who helped popularise vallenato and Colombian pop internationally.", url: "https://www.carlosvives.com/", image: "" },
        { name: "Juanes", description: "Rock and pop singer-songwriter known for socially conscious lyrics.", url: "https://www.juanes.net/", image: "" },
        { name: "Karol G", description: "Medellín-born singer and major figure in contemporary Latin music.", url: "https://www.karolgmusic.com/", image: "" },
        { name: "Totó la Momposina", description: "Singer and dancer preserving Caribbean Colombian musical traditions.", url: "https://en.wikipedia.org/wiki/Tot%C3%B3_la_Momposina", image: "" }
      ],
      artists: [
        { name: "Fernando Botero", description: "Painter and sculptor famous for volumetric figures and public sculptures.", url: "https://en.wikipedia.org/wiki/Fernando_Botero", image: "" },
        { name: "Doris Salcedo", description: "Contemporary artist whose installations address memory, violence and mourning.", url: "https://en.wikipedia.org/wiki/Doris_Salcedo", image: "" },
        { name: "Débora Arango", description: "Modern painter known for expressive and socially critical work.", url: "https://en.wikipedia.org/wiki/D%C3%A9bora_Arango", image: "" },
        { name: "Beatriz González", description: "Artist associated with Colombian pop art and political memory.", url: "https://en.wikipedia.org/wiki/Beatriz_Gonz%C3%A1lez", image: "" },
        { name: "Óscar Muñoz", description: "Contemporary artist exploring memory, image and disappearance.", url: "https://en.wikipedia.org/wiki/%C3%93scar_Mu%C3%B1oz_(artist)", image: "" }
      ],
      writers: [
        { name: "Gabriel García Márquez", description: "Nobel Prize-winning novelist associated with magical realism.", url: "https://en.wikipedia.org/wiki/Gabriel_Garc%C3%ADa_M%C3%A1rquez", image: "" },
        { name: "Álvaro Mutis", description: "Poet and novelist known for the Maqroll series.", url: "https://en.wikipedia.org/wiki/%C3%81lvaro_Mutis", image: "" },
        { name: "Laura Restrepo", description: "Novelist and journalist whose work blends fiction and reportage.", url: "https://en.wikipedia.org/wiki/Laura_Restrepo", image: "" },
        { name: "Piedad Bonnett", description: "Poet, novelist and playwright with a major contemporary voice.", url: "https://en.wikipedia.org/wiki/Piedad_Bonnett", image: "" },
        { name: "Héctor Abad Faciolince", description: "Writer known for fiction, essays and memoir.", url: "https://en.wikipedia.org/wiki/H%C3%A9ctor_Abad_Faciolince", image: "" }
      ],
      celebrities: [
        { name: "Sofía Vergara", description: "Actor and producer known internationally for television and film.", url: "https://www.imdb.com/name/nm0005527/", image: "" },
        { name: "John Leguizamo", description: "Actor and writer born in Bogotá and active in US and Latin cultural conversations.", url: "https://www.imdb.com/name/nm0000491/", image: "" },
        { name: "James Rodríguez", description: "Footballer and internationally recognised Colombian athlete.", url: "https://en.wikipedia.org/wiki/James_Rodr%C3%ADguez", image: "" },
        { name: "Egan Bernal", description: "Cyclist and Tour de France winner from Colombia.", url: "https://en.wikipedia.org/wiki/Egan_Bernal", image: "" },
        { name: "Caterine Ibargüen", description: "Olympic champion triple jumper and leading Colombian sports figure.", url: "https://en.wikipedia.org/wiki/Caterine_Ibarg%C3%BCen", image: "" }
      ]
    }
  },
  {
    country: "México",
    flag: "🇲🇽",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Mexico_City_Palacio_de_bellas_artes.jpg",
    imageAlt: "Palacio de Bellas Artes in Mexico City.",
    attribution: "Palacio de Bellas Artes; Wikimedia Commons; licence and author listed on source page.",
    intro: "México is one of the largest Spanish-language media and cultural centres, with globally influential film, literature, music, visual arts and journalism.",
    sections: {
      newspapers: [
        { name: "El Universal", description: "Major Mexican newspaper with national, international and cultural coverage.", url: "https://www.eluniversal.com.mx/", image: "" },
        { name: "Reforma", description: "National newspaper known for politics, business and opinion.", url: "https://www.reforma.com/", image: "" },
        { name: "La Jornada", description: "Newspaper covering politics, society, culture and opinion.", url: "https://www.jornada.com.mx/", image: "" },
        { name: "Milenio", description: "News organisation with print, TV and digital reporting.", url: "https://www.milenio.com/", image: "" },
        { name: "Excélsior", description: "Historic Mexican newspaper with current affairs and culture sections.", url: "https://www.excelsior.com.mx/", image: "" }
      ],
      magazines: [
        { name: "Letras Libres", description: "Influential magazine of literature, politics and ideas.", url: "https://letraslibres.com/", image: "" },
        { name: "Nexos", description: "Magazine of public debate, essays, culture and social analysis.", url: "https://www.nexos.com.mx/", image: "" },
        { name: "Proceso", description: "News magazine known for investigative journalism and analysis.", url: "https://www.proceso.com.mx/", image: "" },
        { name: "Chilango", description: "Mexico City magazine covering food, events, culture and urban life.", url: "https://www.chilango.com/", image: "" },
        { name: "Gatopardo", description: "Narrative journalism and culture magazine with Latin American scope.", url: "https://gatopardo.com/", image: "" }
      ],
      youtubeChannels: [
        { name: "Canal Once", description: "Public television channel with cultural, educational and news programming.", url: "https://www.youtube.com/@canalonce", image: "" },
        { name: "El Universal", description: "Official video channel for the Mexican newspaper.", url: "https://www.youtube.com/@ElUniversalOnline", image: "" },
        { name: "Luisito Comunica", description: "Travel and culture creator from Puebla with global Spanish-language reach.", url: "https://www.youtube.com/@luisitocomunica", image: "" },
        { name: "Curiosamente", description: "Mexican educational animation and science explainer channel.", url: "https://www.youtube.com/@curiosamente", image: "" },
        { name: "Alan x el Mundo", description: "Travel channel by Mexican creator Alan Estrada.", url: "https://www.youtube.com/@alanxelmundo", image: "" }
      ],
      musicians: [
        { name: "Natalia Lafourcade", description: "Singer-songwriter known for pop, folk and Latin Grammy-winning albums.", url: "https://www.lafourcade.com.mx/", image: "" },
        { name: "Juan Gabriel", description: "Prolific songwriter and performer central to Mexican popular music.", url: "https://en.wikipedia.org/wiki/Juan_Gabriel", image: "" },
        { name: "Lila Downs", description: "Singer blending Indigenous, Mexican and global musical traditions.", url: "https://www.liladowns.com/", image: "" },
        { name: "Café Tacvba", description: "Rock band known for innovation in Mexican alternative music.", url: "https://cafetacvba.com.mx/", image: "" },
        { name: "Julieta Venegas", description: "Singer-songwriter and accordionist with a major Latin pop catalogue.", url: "https://julietavenegas.net/", image: "" }
      ],
      artists: [
        { name: "Frida Kahlo", description: "Painter whose self-portraits are central to Mexican and global art.", url: "https://www.museofridakahlo.org.mx/", image: "" },
        { name: "Diego Rivera", description: "Muralist whose public art shaped Mexican cultural identity.", url: "https://en.wikipedia.org/wiki/Diego_Rivera", image: "" },
        { name: "Rufino Tamayo", description: "Painter known for modernism, colour and Mexican visual motifs.", url: "https://en.wikipedia.org/wiki/Rufino_Tamayo", image: "" },
        { name: "Remedios Varo", description: "Surrealist painter active in Mexico with a distinctive visionary style.", url: "https://en.wikipedia.org/wiki/Remedios_Varo", image: "" },
        { name: "Gabriel Orozco", description: "Contemporary artist known for conceptual works and installations.", url: "https://en.wikipedia.org/wiki/Gabriel_Orozco", image: "" }
      ],
      writers: [
        { name: "Octavio Paz", description: "Nobel Prize-winning poet and essayist from México.", url: "https://www.nobelprize.org/prizes/literature/1990/paz/biographical/", image: "" },
        { name: "Sor Juana Inés de la Cruz", description: "Seventeenth-century writer, scholar and major Baroque literary figure.", url: "https://en.wikipedia.org/wiki/Juana_In%C3%A9s_de_la_Cruz", image: "" },
        { name: "Juan Rulfo", description: "Author of Pedro Páramo and a foundational modern Mexican writer.", url: "https://en.wikipedia.org/wiki/Juan_Rulfo", image: "" },
        { name: "Elena Poniatowska", description: "Writer and journalist known for chronicles, testimony and fiction.", url: "https://en.wikipedia.org/wiki/Elena_Poniatowska", image: "" },
        { name: "Valeria Luiselli", description: "Contemporary novelist and essayist with international recognition.", url: "https://en.wikipedia.org/wiki/Valeria_Luiselli", image: "" }
      ],
      celebrities: [
        { name: "Salma Hayek", description: "Actor and producer with major roles in Mexican and international cinema.", url: "https://www.imdb.com/name/nm0000161/", image: "" },
        { name: "Gael García Bernal", description: "Actor, director and producer associated with contemporary Mexican cinema.", url: "https://www.imdb.com/name/nm0305558/", image: "" },
        { name: "Yalitza Aparicio", description: "Actor and advocate known internationally for Roma.", url: "https://www.imdb.com/name/nm8610098/", image: "" },
        { name: "Guillermo del Toro", description: "Oscar-winning filmmaker known for fantasy, horror and visual storytelling.", url: "https://www.imdb.com/name/nm0868219/", image: "" },
        { name: "Canelo Álvarez", description: "Boxer and one of Mexico's most visible sports figures.", url: "https://en.wikipedia.org/wiki/Canelo_%C3%81lvarez", image: "" }
      ]
    }
  },
  {
    country: "Puerto Rico",
    flag: "🇵🇷",
    image: `${imageBase}Old%20San%20Juan%2C%20Puerto%20Rico.jpg`,
    imageAlt: "Colourful street and buildings in Old San Juan, Puerto Rico.",
    attribution: "Old San Juan; Wikimedia Commons; licence and author listed on source page.",
    intro: "Puerto Rico offers learners a vibrant Caribbean Spanish context through music, journalism, literature, visual arts, film and popular culture.",
    sections: {
      newspapers: [
        { name: "El Nuevo Día", description: "Major Puerto Rican newspaper with news, culture and opinion coverage.", url: "https://www.elnuevodia.com/", image: "" },
        { name: "Primera Hora", description: "Accessible news outlet with entertainment, sport and daily life coverage.", url: "https://www.primerahora.com/", image: "" },
        { name: "Metro Puerto Rico", description: "News outlet covering public affairs, lifestyle and culture.", url: "https://www.metro.pr/", image: "" },
        { name: "El Vocero", description: "Puerto Rican newspaper covering news, sport and entertainment.", url: "https://www.elvocero.com/", image: "" },
        { name: "Claridad", description: "Weekly newspaper with cultural and political reporting.", url: "https://www.claridadpuertorico.com/", image: "" }
      ],
      magazines: [
        { name: "Imagen", description: "Puerto Rican lifestyle, fashion and culture magazine.", url: "https://www.imagen.com/", image: "" },
        { name: "Magacín", description: "Lifestyle and culture magazine from El Nuevo Día.", url: "https://www.elnuevodia.com/magacin/", image: "" },
        { name: "80grados", description: "Digital magazine of culture, ideas, literature and public debate.", url: "https://www.80grados.net/", image: "" },
        { name: "In Puerto Rico", description: "Tourism, culture and lifestyle magazine for Puerto Rican experiences.", url: "https://www.inpuertoricomagazine.com/", image: "" },
        { name: "Que Pasa!", description: "Visitor and culture magazine for Puerto Rico.", url: "https://www.quepasa.pr/", image: "" }
      ],
      youtubeChannels: [
        { name: "El Nuevo Día", description: "Official video channel for Puerto Rican news and features.", url: "https://www.youtube.com/@ElNuevoDia", image: "" },
        { name: "WAPA TV", description: "Puerto Rican broadcaster with news and entertainment clips.", url: "https://www.youtube.com/@WapaTV", image: "" },
        { name: "MoluscoTV", description: "Popular Puerto Rican interview and entertainment channel.", url: "https://www.youtube.com/@MoluscoTV", image: "" },
        { name: "Chente Ydrach", description: "Comedy, interviews and pop-culture commentary from Puerto Rico.", url: "https://www.youtube.com/@ChenteYdrach", image: "" },
        { name: "Telemundo Puerto Rico", description: "Television news and entertainment channel for Puerto Rico.", url: "https://www.youtube.com/@TelemundoPR", image: "" }
      ],
      musicians: [
        { name: "Bad Bunny", description: "Global music star associated with reggaetón, trap and Puerto Rican culture.", url: "https://www.badbunny.com/", image: "" },
        { name: "Ricky Martin", description: "Singer and actor with a long international pop career.", url: "https://ricky-martin.com/", image: "" },
        { name: "Residente", description: "Rapper, songwriter and former member of Calle 13.", url: "https://residente.com/", image: "" },
        { name: "Ivy Queen", description: "Pioneering reggaetón artist and influential female voice in urban music.", url: "https://en.wikipedia.org/wiki/Ivy_Queen", image: "" },
        { name: "Héctor Lavoe", description: "Salsa singer remembered as one of the genre's defining voices.", url: "https://en.wikipedia.org/wiki/H%C3%A9ctor_Lavoe", image: "" }
      ],
      artists: [
        { name: "Francisco Oller", description: "Painter associated with Realism, Impressionism and Puerto Rican subjects.", url: "https://en.wikipedia.org/wiki/Francisco_Oller", image: "" },
        { name: "José Campeche", description: "Eighteenth-century painter and one of Puerto Rico's earliest major artists.", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Campeche", image: "" },
        { name: "Olga Albizu", description: "Abstract painter whose work influenced modern Puerto Rican art.", url: "https://en.wikipedia.org/wiki/Olga_Albizu", image: "" },
        { name: "Rafael Tufiño", description: "Artist known for prints and paintings of Puerto Rican life.", url: "https://en.wikipedia.org/wiki/Rafael_Tufi%C3%B1o", image: "" },
        { name: "Myrna Báez", description: "Painter and printmaker important to Puerto Rican contemporary art.", url: "https://en.wikipedia.org/wiki/Myrna_B%C3%A1ez", image: "" }
      ],
      writers: [
        { name: "Julia de Burgos", description: "Poet whose work is central to Puerto Rican and feminist literary history.", url: "https://en.wikipedia.org/wiki/Julia_de_Burgos", image: "" },
        { name: "Luis Rafael Sánchez", description: "Playwright, novelist and essayist known for Puerto Rican language and identity.", url: "https://en.wikipedia.org/wiki/Luis_Rafael_S%C3%A1nchez", image: "" },
        { name: "Rosario Ferré", description: "Writer known for fiction, poetry and essays on class and gender.", url: "https://en.wikipedia.org/wiki/Rosario_Ferr%C3%A9", image: "" },
        { name: "Giannina Braschi", description: "Experimental writer working across Spanish, English and Spanglish.", url: "https://en.wikipedia.org/wiki/Giannina_Braschi", image: "" },
        { name: "Esmeralda Santiago", description: "Memoirist and novelist known for writing on migration and identity.", url: "https://en.wikipedia.org/wiki/Esmeralda_Santiago", image: "" }
      ],
      celebrities: [
        { name: "Benicio del Toro", description: "Academy Award-winning actor from Puerto Rico.", url: "https://www.imdb.com/name/nm0001125/", image: "" },
        { name: "Jennifer Lopez", description: "Singer, actor and performer of Puerto Rican heritage.", url: "https://www.jenniferlopez.com/", image: "" },
        { name: "Lin-Manuel Miranda", description: "Composer, actor and writer of Puerto Rican heritage.", url: "https://www.linmanuel.com/", image: "" },
        { name: "Aubrey Plaza", description: "Actor and producer of Puerto Rican heritage.", url: "https://www.imdb.com/name/nm2201555/", image: "" },
        { name: "Dayanara Torres", description: "Actor, model and Miss Universe 1993 from Puerto Rico.", url: "https://en.wikipedia.org/wiki/Dayanara_Torres", image: "" }
      ]
    }
  },
  {
    country: "Costa Rica",
    flag: "🇨🇷",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Arenal_Volcano%2C_Costa_Rica.jpg",
    imageAlt: "Arenal Volcano in Costa Rica.",
    attribution: "Arenal Volcano; Wikimedia Commons; licence and author listed on source page.",
    intro: "Costa Rica is known for environmental leadership, education and a growing creative scene, with media and cultural resources that support regional Spanish learning.",
    sections: {
      newspapers: [
        { name: "La Nación", description: "Major Costa Rican newspaper covering national and international affairs.", url: "https://www.nacion.com/", image: "" },
        { name: "La República", description: "Business and current-affairs newspaper from Costa Rica.", url: "https://www.larepublica.net/", image: "" },
        { name: "Diario Extra", description: "Daily newspaper with popular national news coverage.", url: "https://www.diarioextra.com/", image: "" },
        { name: "Semanario Universidad", description: "University newspaper with public-interest journalism and analysis.", url: "https://semanariouniversidad.com/", image: "" },
        { name: "CRHoy", description: "Digital news outlet covering Costa Rica and breaking news.", url: "https://www.crhoy.com/", image: "" }
      ],
      magazines: [
        { name: "Perfil", description: "Costa Rican magazine covering lifestyle, interviews and culture.", url: "https://www.revistaperfil.com/", image: "" },
        { name: "EKA", description: "Business and economy magazine for Costa Rica.", url: "https://www.ekaenlinea.com/", image: "" },
        { name: "Su Casa", description: "Architecture, design and lifestyle magazine.", url: "https://revistasucasa.com/", image: "" },
        { name: "Bienestar", description: "Costa Rican wellness and lifestyle magazine brand.", url: "https://www.revistabienestarcr.com/", image: "" },
        { name: "Paquidermo", description: "Costa Rican digital magazine of opinion, arts and ideas.", url: "https://www.paquidermo.com/", image: "" }
      ],
      youtubeChannels: [
        { name: "Teletica", description: "Costa Rican broadcaster with news, interviews and entertainment.", url: "https://www.youtube.com/@Teletica", image: "" },
        { name: "Repretel Costa Rica", description: "Television broadcaster with news and programmes.", url: "https://www.youtube.com/@RepretelCostaRica", image: "" },
        { name: "La Nación Costa Rica", description: "Video journalism from the Costa Rican newspaper.", url: "https://www.youtube.com/@nacion", image: "" },
        { name: "Semanario Universidad", description: "University journalism videos, interviews and analysis.", url: "https://www.youtube.com/@SemanarioUniversidad", image: "" },
        { name: "Visit Costa Rica", description: "Official tourism channel with culture, nature and travel videos.", url: "https://www.youtube.com/@visitcostarica", image: "" }
      ],
      musicians: [
        { name: "Debi Nova", description: "Singer-songwriter blending pop, Latin and electronic influences.", url: "https://en.wikipedia.org/wiki/Debi_Nova", image: "" },
        { name: "Editus", description: "Instrumental group known for jazz, classical and Latin collaborations.", url: "https://en.wikipedia.org/wiki/Editus", image: "" },
        { name: "Malpaís", description: "Band associated with Costa Rican folk-rock and regional storytelling.", url: "https://en.wikipedia.org/wiki/Malpa%C3%ADs_(band)", image: "" },
        { name: "Walter Ferguson", description: "Calypso musician from Costa Rica's Caribbean coast.", url: "https://en.wikipedia.org/wiki/Walter_Ferguson", image: "" },
        { name: "Gandhi", description: "Rock band from Costa Rica with a long national career.", url: "https://en.wikipedia.org/wiki/Gandhi_(band)", image: "" }
      ],
      artists: [
        { name: "Francisco Amighetti", description: "Painter and printmaker central to Costa Rican modern art.", url: "https://en.wikipedia.org/wiki/Francisco_Amighetti", image: "" },
        { name: "Teodorico Quirós", description: "Painter and architect associated with Costa Rican landscape and modernism.", url: "https://en.wikipedia.org/wiki/Teodorico_Quir%C3%B3s", image: "" },
        { name: "Lola Fernández", description: "Painter and printmaker important to Costa Rican abstraction.", url: "https://en.wikipedia.org/wiki/Lola_Fern%C3%A1ndez", image: "" },
        { name: "Max Jiménez", description: "Writer and visual artist active in Costa Rican modernism.", url: "https://en.wikipedia.org/wiki/Max_Jim%C3%A9nez", image: "" },
        { name: "Jiménez Deredia", description: "Sculptor known for works inspired by spheres and transformation.", url: "https://en.wikipedia.org/wiki/Jim%C3%A9nez_Deredia", image: "" }
      ],
      writers: [
        { name: "Carmen Lyra", description: "Writer and educator known for Cuentos de mi tía Panchita.", url: "https://en.wikipedia.org/wiki/Carmen_Lyra", image: "" },
        { name: "Joaquín Gutiérrez", description: "Novelist, poet and translator important to Costa Rican letters.", url: "https://en.wikipedia.org/wiki/Joaqu%C3%ADn_Guti%C3%A9rrez", image: "" },
        { name: "Eunice Odio", description: "Poet with a significant role in Central American literature.", url: "https://en.wikipedia.org/wiki/Eunice_Odio", image: "" },
        { name: "Ana Istarú", description: "Poet, playwright and actor with feminist literary themes.", url: "https://en.wikipedia.org/wiki/Ana_Istar%C3%BA", image: "" },
        { name: "José León Sánchez", description: "Novelist known for works of testimony and social critique.", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Le%C3%B3n_S%C3%A1nchez", image: "" }
      ],
      celebrities: [
        { name: "Keylor Navas", description: "Goalkeeper and one of Costa Rica's most recognised athletes.", url: "https://en.wikipedia.org/wiki/Keylor_Navas", image: "" },
        { name: "Claudia Poll", description: "Olympic swimmer and gold medallist from Costa Rica.", url: "https://en.wikipedia.org/wiki/Claudia_Poll", image: "" },
        { name: "Harry Shum Jr.", description: "Actor and dancer born in Costa Rica.", url: "https://www.imdb.com/name/nm1484270/", image: "" },
        { name: "Maribel Guardia", description: "Actor, singer and television personality born in Costa Rica.", url: "https://en.wikipedia.org/wiki/Maribel_Guardia", image: "" },
        { name: "Nery Brenes", description: "Sprinter and prominent Costa Rican track athlete.", url: "https://en.wikipedia.org/wiki/Nery_Brenes", image: "" }
      ]
    }
  },
  {
    country: "Paraguay",
    flag: "🇵🇾",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Downtown_Asuncion_123643.jpg",
    imageAlt: "Urban view of Asunción, Paraguay.",
    attribution: "Asunción, Paraguay; Wikimedia Commons; licence and author listed on source page.",
    intro: "Paraguay offers a bilingual Spanish-Guaraní cultural setting, with distinctive music, literature, journalism and public culture shaped by regional history.",
    sections: {
      newspapers: [
        { name: "ABC Color", description: "Major Paraguayan newspaper with national and international coverage.", url: "https://www.abc.com.py/", image: "" },
        { name: "Última Hora", description: "National newspaper covering politics, society, sport and culture.", url: "https://www.ultimahora.com/", image: "" },
        { name: "La Nación", description: "Paraguayan news outlet with national current-affairs reporting.", url: "https://www.lanacion.com.py/", image: "" },
        { name: "Hoy", description: "Digital newspaper covering daily news and entertainment.", url: "https://www.hoy.com.py/", image: "" },
        { name: "5Días", description: "Business and economy newspaper from Paraguay.", url: "https://www.5dias.com.py/", image: "" }
      ],
      magazines: [
        { name: "Pausa", description: "Culture and lifestyle magazine associated with Última Hora.", url: "https://www.ultimahora.com/pausa", image: "" },
        { name: "FOCO", description: "Paraguayan magazine and media brand covering people, society and culture.", url: "https://www.foco.lanacion.com.py/", image: "" },
        { name: "High Class", description: "Lifestyle and society magazine from Paraguay.", url: "https://highclass.com.py/", image: "" },
        { name: "PLUS", description: "Business and economy magazine focused on Paraguay.", url: "https://www.revistaplus.com.py/", image: "" },
        { name: "Yluux", description: "Digital culture and entertainment magazine from Paraguay.", url: "https://www.yluux.com/", image: "" }
      ],
      youtubeChannels: [
        { name: "ABC TV Paraguay", description: "Video news from ABC Color and ABC TV.", url: "https://www.youtube.com/@ABCTVpy", image: "" },
        { name: "Telefuturo", description: "Paraguayan broadcaster with news and entertainment.", url: "https://www.youtube.com/@TelefuturoPy", image: "" },
        { name: "Última Hora", description: "News videos and reports from the Paraguayan newspaper.", url: "https://www.youtube.com/@UltimaHoracom", image: "" },
        { name: "GEN", description: "Paraguayan television channel with news and programmes.", url: "https://www.youtube.com/@GENParaguay", image: "" },
        { name: "Tigo Sports PY", description: "Paraguayan sports channel with football and interviews.", url: "https://www.youtube.com/@TigoSportsPY", image: "" }
      ],
      musicians: [
        { name: "Agustín Barrios Mangoré", description: "Classical guitarist and composer of lasting international influence.", url: "https://en.wikipedia.org/wiki/Agust%C3%ADn_Barrios", image: "" },
        { name: "Berta Rojas", description: "Classical guitarist known for recordings and performances of Latin American music.", url: "https://www.bertarojas.com/", image: "" },
        { name: "José Asunción Flores", description: "Composer credited with creating the guarania musical genre.", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Asunci%C3%B3n_Flores", image: "" },
        { name: "Luis Alberto del Paraná", description: "Singer who popularised Paraguayan music internationally.", url: "https://en.wikipedia.org/wiki/Luis_Alberto_del_Paran%C3%A1", image: "" },
        { name: "Kchiporros", description: "Popular Paraguayan band blending rock, ska and Latin rhythms.", url: "https://en.wikipedia.org/wiki/Kchiporros", image: "" }
      ],
      artists: [
        { name: "Carlos Colombino", description: "Painter, engraver and architect linked to modern Paraguayan art.", url: "https://en.wikipedia.org/wiki/Carlos_Colombino", image: "" },
        { name: "Olga Blinder", description: "Painter, engraver and educator important to Paraguayan modernism.", url: "https://en.wikipedia.org/wiki/Olga_Blinder", image: "" },
        { name: "Lívio Abramo", description: "Printmaker whose work influenced Paraguayan and Brazilian art.", url: "https://en.wikipedia.org/wiki/L%C3%ADvio_Abramo", image: "" },
        { name: "Félix Toranzos", description: "Contemporary visual artist from Paraguay.", url: "https://en.wikipedia.org/wiki/F%C3%A9lix_Toranzos", image: "" },
        { name: "Mabel Arcondo", description: "Paraguayan artist and educator active in contemporary visual culture.", url: "https://es.wikipedia.org/wiki/Mabel_Arcondo", image: "" }
      ],
      writers: [
        { name: "Augusto Roa Bastos", description: "Major novelist known for Yo el Supremo and exile literature.", url: "https://en.wikipedia.org/wiki/Augusto_Roa_Bastos", image: "" },
        { name: "Josefina Plá", description: "Poet, playwright, critic and artist central to Paraguayan culture.", url: "https://en.wikipedia.org/wiki/Josefina_Pl%C3%A1", image: "" },
        { name: "Elvio Romero", description: "Poet associated with social themes and Paraguayan exile writing.", url: "https://en.wikipedia.org/wiki/Elvio_Romero", image: "" },
        { name: "Renée Ferrer", description: "Poet and novelist known for fiction and literary scholarship.", url: "https://en.wikipedia.org/wiki/Ren%C3%A9e_Ferrer", image: "" },
        { name: "Gabriel Casaccia", description: "Novelist and short-story writer important to modern Paraguayan narrative.", url: "https://en.wikipedia.org/wiki/Gabriel_Casaccia", image: "" }
      ],
      celebrities: [
        { name: "Roque Santa Cruz", description: "Footballer and widely known Paraguayan sports personality.", url: "https://en.wikipedia.org/wiki/Roque_Santa_Cruz", image: "" },
        { name: "Larissa Riquelme", description: "Model and television personality from Paraguay.", url: "https://en.wikipedia.org/wiki/Larissa_Riquelme", image: "" },
        { name: "Leryn Franco", description: "Olympic javelin thrower, model and public figure.", url: "https://en.wikipedia.org/wiki/Leryn_Franco", image: "" },
        { name: "José Luis Chilavert", description: "Former goalkeeper and one of Paraguay's best-known footballers.", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Luis_Chilavert", image: "" },
        { name: "Nadia Ferreira", description: "Model and public figure from Paraguay, crowned Miss Universe Paraguay 2021.", url: "https://en.wikipedia.org/wiki/Nadia_Ferreira", image: "" }
      ]
    }
  }
];

export default hispanicWorldData;
