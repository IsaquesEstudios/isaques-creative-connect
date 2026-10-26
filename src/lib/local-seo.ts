export interface LocalCity {
  slug: string;
  name: string;
}

export interface LocalState {
  slug: string;
  name: string;
  uf: string;
  cities: LocalCity[];
}

export const localStates: LocalState[] = [
  {
    "slug": "acre",
    "name": "Acre",
    "uf": "AC",
    "cities": [
      {
        "slug": "rio-branco",
        "name": "Rio Branco"
      },
      {
        "slug": "cruzeiro-do-sul",
        "name": "Cruzeiro do Sul"
      },
      {
        "slug": "sena-madureira",
        "name": "Sena Madureira"
      },
      {
        "slug": "tarauaca",
        "name": "Tarauacá"
      },
      {
        "slug": "feijo",
        "name": "Feijó"
      }
    ]
  },
  {
    "slug": "alagoas",
    "name": "Alagoas",
    "uf": "AL",
    "cities": [
      {
        "slug": "maceio",
        "name": "Maceió"
      },
      {
        "slug": "arapiraca",
        "name": "Arapiraca"
      },
      {
        "slug": "palmeira-dos-indios",
        "name": "Palmeira dos Índios"
      },
      {
        "slug": "rio-largo",
        "name": "Rio Largo"
      },
      {
        "slug": "penedo",
        "name": "Penedo"
      }
    ]
  },
  {
    "slug": "amapa",
    "name": "Amapá",
    "uf": "AP",
    "cities": [
      {
        "slug": "macapa",
        "name": "Macapá"
      },
      {
        "slug": "santana",
        "name": "Santana"
      },
      {
        "slug": "laranjal-do-jari",
        "name": "Laranjal do Jari"
      },
      {
        "slug": "oiapoque",
        "name": "Oiapoque"
      },
      {
        "slug": "mazagao",
        "name": "Mazagão"
      }
    ]
  },
  {
    "slug": "amazonas",
    "name": "Amazonas",
    "uf": "AM",
    "cities": [
      {
        "slug": "manaus",
        "name": "Manaus"
      },
      {
        "slug": "parintins",
        "name": "Parintins"
      },
      {
        "slug": "itacoatiara",
        "name": "Itacoatiara"
      },
      {
        "slug": "manacapuru",
        "name": "Manacapuru"
      },
      {
        "slug": "coari",
        "name": "Coari"
      }
    ]
  },
  {
    "slug": "bahia",
    "name": "Bahia",
    "uf": "BA",
    "cities": [
      {
        "slug": "salvador",
        "name": "Salvador"
      },
      {
        "slug": "feira-de-santana",
        "name": "Feira de Santana"
      },
      {
        "slug": "vitoria-da-conquista",
        "name": "Vitória da Conquista"
      },
      {
        "slug": "camacari",
        "name": "Camaçari"
      },
      {
        "slug": "itabuna",
        "name": "Itabuna"
      }
    ]
  },
  {
    "slug": "ceara",
    "name": "Ceará",
    "uf": "CE",
    "cities": [
      {
        "slug": "fortaleza",
        "name": "Fortaleza"
      },
      {
        "slug": "caucaia",
        "name": "Caucaia"
      },
      {
        "slug": "juazeiro-do-norte",
        "name": "Juazeiro do Norte"
      },
      {
        "slug": "maracanau",
        "name": "Maracanaú"
      },
      {
        "slug": "sobral",
        "name": "Sobral"
      }
    ]
  },
  {
    "slug": "distrito-federal",
    "name": "Distrito Federal",
    "uf": "DF",
    "cities": [
      {
        "slug": "brasilia",
        "name": "Brasília"
      },
      {
        "slug": "ceilandia",
        "name": "Ceilândia"
      },
      {
        "slug": "taguatinga",
        "name": "Taguatinga"
      },
      {
        "slug": "samambaia",
        "name": "Samambaia"
      },
      {
        "slug": "planaltina",
        "name": "Planaltina"
      }
    ]
  },
  {
    "slug": "espirito-santo",
    "name": "Espírito Santo",
    "uf": "ES",
    "cities": [
      {
        "slug": "vitoria",
        "name": "Vitória"
      },
      {
        "slug": "vila-velha",
        "name": "Vila Velha"
      },
      {
        "slug": "serra",
        "name": "Serra"
      },
      {
        "slug": "cariacica",
        "name": "Cariacica"
      },
      {
        "slug": "cachoeiro-de-itapemirim",
        "name": "Cachoeiro de Itapemirim"
      }
    ]
  },
  {
    "slug": "goias",
    "name": "Goiás",
    "uf": "GO",
    "cities": [
      {
        "slug": "goiania",
        "name": "Goiânia"
      },
      {
        "slug": "aparecida-de-goiania",
        "name": "Aparecida de Goiânia"
      },
      {
        "slug": "anapolis",
        "name": "Anápolis"
      },
      {
        "slug": "rio-verde",
        "name": "Rio Verde"
      },
      {
        "slug": "luziania",
        "name": "Luziânia"
      }
    ]
  },
  {
    "slug": "maranhao",
    "name": "Maranhão",
    "uf": "MA",
    "cities": [
      {
        "slug": "sao-luis",
        "name": "São Luís"
      },
      {
        "slug": "imperatriz",
        "name": "Imperatriz"
      },
      {
        "slug": "sao-jose-de-ribamar",
        "name": "São José de Ribamar"
      },
      {
        "slug": "timon",
        "name": "Timon"
      },
      {
        "slug": "caxias",
        "name": "Caxias"
      }
    ]
  },
  {
    "slug": "mato-grosso",
    "name": "Mato Grosso",
    "uf": "MT",
    "cities": [
      {
        "slug": "cuiaba",
        "name": "Cuiabá"
      },
      {
        "slug": "varzea-grande",
        "name": "Várzea Grande"
      },
      {
        "slug": "rondonopolis",
        "name": "Rondonópolis"
      },
      {
        "slug": "sinop",
        "name": "Sinop"
      },
      {
        "slug": "tangara-da-serra",
        "name": "Tangará da Serra"
      }
    ]
  },
  {
    "slug": "mato-grosso-do-sul",
    "name": "Mato Grosso do Sul",
    "uf": "MS",
    "cities": [
      {
        "slug": "campo-grande",
        "name": "Campo Grande"
      },
      {
        "slug": "dourados",
        "name": "Dourados"
      },
      {
        "slug": "tres-lagoas",
        "name": "Três Lagoas"
      },
      {
        "slug": "corumba",
        "name": "Corumbá"
      },
      {
        "slug": "ponta-pora",
        "name": "Ponta Porã"
      }
    ]
  },
  {
    "slug": "minas-gerais",
    "name": "Minas Gerais",
    "uf": "MG",
    "cities": [
      {
        "slug": "belo-horizonte",
        "name": "Belo Horizonte"
      },
      {
        "slug": "uberlandia",
        "name": "Uberlândia"
      },
      {
        "slug": "contagem",
        "name": "Contagem"
      },
      {
        "slug": "juiz-de-fora",
        "name": "Juiz de Fora"
      },
      {
        "slug": "betim",
        "name": "Betim"
      }
    ]
  },
  {
    "slug": "para",
    "name": "Pará",
    "uf": "PA",
    "cities": [
      {
        "slug": "belem",
        "name": "Belém"
      },
      {
        "slug": "ananindeua",
        "name": "Ananindeua"
      },
      {
        "slug": "santarem",
        "name": "Santarém"
      },
      {
        "slug": "maraba",
        "name": "Marabá"
      },
      {
        "slug": "parauapebas",
        "name": "Parauapebas"
      }
    ]
  },
  {
    "slug": "paraiba",
    "name": "Paraíba",
    "uf": "PB",
    "cities": [
      {
        "slug": "joao-pessoa",
        "name": "João Pessoa"
      },
      {
        "slug": "campina-grande",
        "name": "Campina Grande"
      },
      {
        "slug": "santa-rita",
        "name": "Santa Rita"
      },
      {
        "slug": "patos",
        "name": "Patos"
      },
      {
        "slug": "bayeux",
        "name": "Bayeux"
      }
    ]
  },
  {
    "slug": "parana",
    "name": "Paraná",
    "uf": "PR",
    "cities": [
      {
        "slug": "curitiba",
        "name": "Curitiba"
      },
      {
        "slug": "londrina",
        "name": "Londrina"
      },
      {
        "slug": "maringa",
        "name": "Maringá"
      },
      {
        "slug": "ponta-grossa",
        "name": "Ponta Grossa"
      },
      {
        "slug": "cascavel",
        "name": "Cascavel"
      }
    ]
  },
  {
    "slug": "pernambuco",
    "name": "Pernambuco",
    "uf": "PE",
    "cities": [
      {
        "slug": "recife",
        "name": "Recife"
      },
      {
        "slug": "jaboatao-dos-guararapes",
        "name": "Jaboatão dos Guararapes"
      },
      {
        "slug": "olinda",
        "name": "Olinda"
      },
      {
        "slug": "caruaru",
        "name": "Caruaru"
      },
      {
        "slug": "petrolina",
        "name": "Petrolina"
      }
    ]
  },
  {
    "slug": "piaui",
    "name": "Piauí",
    "uf": "PI",
    "cities": [
      {
        "slug": "teresina",
        "name": "Teresina"
      },
      {
        "slug": "parnaiba",
        "name": "Parnaíba"
      },
      {
        "slug": "picos",
        "name": "Picos"
      },
      {
        "slug": "floriano",
        "name": "Floriano"
      },
      {
        "slug": "campo-maior",
        "name": "Campo Maior"
      }
    ]
  },
  {
    "slug": "rio-de-janeiro",
    "name": "Rio de Janeiro",
    "uf": "RJ",
    "cities": [
      {
        "slug": "rio-de-janeiro",
        "name": "Rio de Janeiro"
      },
      {
        "slug": "sao-goncalo",
        "name": "São Gonçalo"
      },
      {
        "slug": "duque-de-caxias",
        "name": "Duque de Caxias"
      },
      {
        "slug": "nova-iguacu",
        "name": "Nova Iguaçu"
      },
      {
        "slug": "niteroi",
        "name": "Niterói"
      }
    ]
  },
  {
    "slug": "rio-grande-do-norte",
    "name": "Rio Grande do Norte",
    "uf": "RN",
    "cities": [
      {
        "slug": "natal",
        "name": "Natal"
      },
      {
        "slug": "mossoro",
        "name": "Mossoró"
      },
      {
        "slug": "parnamirim",
        "name": "Parnamirim"
      },
      {
        "slug": "sao-goncalo-do-amarante",
        "name": "São Gonçalo do Amarante"
      },
      {
        "slug": "macaiba",
        "name": "Macaíba"
      }
    ]
  },
  {
    "slug": "rio-grande-do-sul",
    "name": "Rio Grande do Sul",
    "uf": "RS",
    "cities": [
      {
        "slug": "porto-alegre",
        "name": "Porto Alegre"
      },
      {
        "slug": "caxias-do-sul",
        "name": "Caxias do Sul"
      },
      {
        "slug": "pelotas",
        "name": "Pelotas"
      },
      {
        "slug": "canoas",
        "name": "Canoas"
      },
      {
        "slug": "santa-maria",
        "name": "Santa Maria"
      }
    ]
  },
  {
    "slug": "rondonia",
    "name": "Rondônia",
    "uf": "RO",
    "cities": [
      {
        "slug": "porto-velho",
        "name": "Porto Velho"
      },
      {
        "slug": "ji-parana",
        "name": "Ji-Paraná"
      },
      {
        "slug": "ariquemes",
        "name": "Ariquemes"
      },
      {
        "slug": "vilhena",
        "name": "Vilhena"
      },
      {
        "slug": "cacoal",
        "name": "Cacoal"
      }
    ]
  },
  {
    "slug": "roraima",
    "name": "Roraima",
    "uf": "RR",
    "cities": [
      {
        "slug": "boa-vista",
        "name": "Boa Vista"
      },
      {
        "slug": "rorainopolis",
        "name": "Rorainópolis"
      },
      {
        "slug": "caracarai",
        "name": "Caracaraí"
      },
      {
        "slug": "alto-alegre",
        "name": "Alto Alegre"
      },
      {
        "slug": "mucajai",
        "name": "Mucajaí"
      }
    ]
  },
  {
    "slug": "santa-catarina",
    "name": "Santa Catarina",
    "uf": "SC",
    "cities": [
      {
        "slug": "florianopolis",
        "name": "Florianópolis"
      },
      {
        "slug": "joinville",
        "name": "Joinville"
      },
      {
        "slug": "blumenau",
        "name": "Blumenau"
      },
      {
        "slug": "sao-jose",
        "name": "São José"
      },
      {
        "slug": "criciuma",
        "name": "Criciúma"
      }
    ]
  },
  {
    "slug": "sao-paulo",
    "name": "São Paulo",
    "uf": "SP",
    "cities": [
      {
        "slug": "sao-paulo",
        "name": "São Paulo"
      },
      {
        "slug": "guarulhos",
        "name": "Guarulhos"
      },
      {
        "slug": "campinas",
        "name": "Campinas"
      },
      {
        "slug": "sao-bernardo-do-campo",
        "name": "São Bernardo do Campo"
      },
      {
        "slug": "santo-andre",
        "name": "Santo André"
      },
      {
        "slug": "osasco",
        "name": "Osasco"
      },
      {
        "slug": "sao-jose-dos-campos",
        "name": "São José dos Campos"
      },
      {
        "slug": "ribeirao-preto",
        "name": "Ribeirão Preto"
      },
      {
        "slug": "sorocaba",
        "name": "Sorocaba"
      },
      {
        "slug": "maua",
        "name": "Mauá"
      },
      {
        "slug": "sao-jose-do-rio-preto",
        "name": "São José do Rio Preto"
      },
      {
        "slug": "santos",
        "name": "Santos"
      },
      {
        "slug": "mogi-das-cruzes",
        "name": "Mogi das Cruzes"
      },
      {
        "slug": "diadema",
        "name": "Diadema"
      },
      {
        "slug": "jundiai",
        "name": "Jundiaí"
      },
      {
        "slug": "carapicuiba",
        "name": "Carapicuíba"
      },
      {
        "slug": "piracicaba",
        "name": "Piracicaba"
      },
      {
        "slug": "bauru",
        "name": "Bauru"
      },
      {
        "slug": "sao-vicente",
        "name": "São Vicente"
      },
      {
        "slug": "itaquaquecetuba",
        "name": "Itaquaquecetuba"
      },
      {
        "slug": "franca",
        "name": "Franca"
      },
      {
        "slug": "guaruja",
        "name": "Guarujá"
      },
      {
        "slug": "taubate",
        "name": "Taubaté"
      },
      {
        "slug": "praia-grande",
        "name": "Praia Grande"
      },
      {
        "slug": "limeira",
        "name": "Limeira"
      },
      {
        "slug": "suzano",
        "name": "Suzano"
      },
      {
        "slug": "taboao-da-serra",
        "name": "Taboão da Serra"
      },
      {
        "slug": "sumare",
        "name": "Sumaré"
      },
      {
        "slug": "barueri",
        "name": "Barueri"
      },
      {
        "slug": "embu-das-artes",
        "name": "Embu das Artes"
      },
      {
        "slug": "sao-carlos",
        "name": "São Carlos"
      },
      {
        "slug": "marilia",
        "name": "Marília"
      },
      {
        "slug": "indaiatuba",
        "name": "Indaiatuba"
      },
      {
        "slug": "cotia",
        "name": "Cotia"
      },
      {
        "slug": "americana",
        "name": "Americana"
      },
      {
        "slug": "jacarei",
        "name": "Jacareí"
      },
      {
        "slug": "araraquara",
        "name": "Araraquara"
      },
      {
        "slug": "presidente-prudente",
        "name": "Presidente Prudente"
      },
      {
        "slug": "hortolandia",
        "name": "Hortolândia"
      },
      {
        "slug": "rio-claro",
        "name": "Rio Claro"
      },
      {
        "slug": "aracatuba",
        "name": "Araçatuba"
      },
      {
        "slug": "santa-barbara-d'oeste",
        "name": "Santa Bárbara d'Oeste"
      },
      {
        "slug": "ferraz-de-vasconcelos",
        "name": "Ferraz de Vasconcelos"
      },
      {
        "slug": "itu",
        "name": "Itu"
      },
      {
        "slug": "braganca-paulista",
        "name": "Bragança Paulista"
      },
      {
        "slug": "itapevi",
        "name": "Itapevi"
      },
      {
        "slug": "sao-caetano-do-sul",
        "name": "São Caetano do Sul"
      },
      {
        "slug": "itapetininga",
        "name": "Itapetininga"
      },
      {
        "slug": "atibaia",
        "name": "Atibaia"
      },
      {
        "slug": "botucatu",
        "name": "Botucatu"
      }
    ]
  },
  {
    "slug": "sergipe",
    "name": "Sergipe",
    "uf": "SE",
    "cities": [
      {
        "slug": "aracaju",
        "name": "Aracaju"
      },
      {
        "slug": "nossa-senhora-do-socorro",
        "name": "Nossa Senhora do Socorro"
      },
      {
        "slug": "lagarto",
        "name": "Lagarto"
      },
      {
        "slug": "itabaiana",
        "name": "Itabaiana"
      },
      {
        "slug": "estancia",
        "name": "Estância"
      }
    ]
  },
  {
    "slug": "tocantins",
    "name": "Tocantins",
    "uf": "TO",
    "cities": [
      {
        "slug": "palmas",
        "name": "Palmas"
      },
      {
        "slug": "araguaina",
        "name": "Araguaína"
      },
      {
        "slug": "gurupi",
        "name": "Gurupi"
      },
      {
        "slug": "porto-nacional",
        "name": "Porto Nacional"
      },
      {
        "slug": "paraiso-do-tocantins",
        "name": "Paraíso do Tocantins"
      }
    ]
  }
];

export function cityPath(state: LocalState, city: LocalCity) {
  return `${city.slug}-${state.uf.toLowerCase()}`;
}

export type LocalLocation =
  | { type: "state"; state: LocalState; city: null }
  | { type: "city"; state: LocalState; city: LocalCity };

export function findLocal(slug: string): LocalLocation | undefined {
  for (const state of localStates) {
    if (state.slug === slug) return { type: "state", state, city: null };
    const city = state.cities.find((c) => cityPath(state, c) === slug);
    if (city) return { type: "city", state, city };
  }
  return undefined;
}

export function localLabel(loc: LocalLocation) {
  return loc.type === "city" ? `${loc.city.name} - ${loc.state.uf}` : loc.state.name;
}
