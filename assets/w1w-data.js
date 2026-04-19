// World 1 World — country & product data
window.W1W_COUNTRIES = [
  // CONCACAF — Hosts
  { slug: 'canada',       name: 'Canada',               sub: 'THE MAPLE',             region: 'concacaf',     confed: 'CONCACAF', host: true,  colors: ['#FF0000','#FFFFFF','#FF0000'], flag: 'CA' },
  { slug: 'mexico',       name: 'Mexico',               sub: 'EL TRI',                region: 'concacaf',     confed: 'CONCACAF', host: true,  colors: ['#006847','#FFFFFF','#CE1126'], flag: 'MX' },
  { slug: 'usa',          name: 'United States',        sub: 'THE STARS',             region: 'concacaf',     confed: 'CONCACAF', host: true,  colors: ['#B22234','#FFFFFF','#3C3B6E'], flag: 'US' },
  { slug: 'curacao',      name: 'Curaçao',              sub: 'BLUE ISLAND',           region: 'concacaf',     confed: 'CONCACAF',              colors: ['#002B7F','#F9E814','#FFFFFF'], flag: 'CW' },
  { slug: 'haiti',        name: 'Haiti',                sub: 'LES GRENADIERS',        region: 'concacaf',     confed: 'CONCACAF',              colors: ['#00209F','#D21034','#FFFFFF'], flag: 'HT' },
  { slug: 'panama',       name: 'Panama',               sub: 'LA MAREA ROJA',         region: 'concacaf',     confed: 'CONCACAF',              colors: ['#DA121A','#FFFFFF','#005AA7'], flag: 'PA' },
  // CONMEBOL
  { slug: 'argentina',    name: 'Argentina',            sub: 'LA ALBICELESTE',        region: 'southamerica', confed: 'CONMEBOL',              colors: ['#75AADB','#FFFFFF','#75AADB'], flag: 'AR' },
  { slug: 'brazil',       name: 'Brazil',               sub: 'SELECT EDITION',        region: 'southamerica', confed: 'CONMEBOL',              colors: ['#009C3B','#FFDF00','#009C3B'], flag: 'BR', featured: true },
  { slug: 'colombia',     name: 'Colombia',             sub: 'LOS CAFETEROS',         region: 'southamerica', confed: 'CONMEBOL',              colors: ['#FCD116','#003893','#CE1126'], flag: 'CO' },
  { slug: 'ecuador',      name: 'Ecuador',              sub: 'LA TRI',                region: 'southamerica', confed: 'CONMEBOL',              colors: ['#FFDD00','#034EA2','#ED1C24'], flag: 'EC' },
  { slug: 'paraguay',     name: 'Paraguay',             sub: 'LA ALBIRROJA',          region: 'southamerica', confed: 'CONMEBOL',              colors: ['#D52B1E','#FFFFFF','#0038A8'], flag: 'PY' },
  { slug: 'uruguay',      name: 'Uruguay',              sub: 'LA CELESTE',            region: 'southamerica', confed: 'CONMEBOL',              colors: ['#7B9EDD','#FFFFFF','#FCD116'], flag: 'UY' },
  // UEFA
  { slug: 'austria',      name: 'Austria',              sub: 'DAS TEAM',              region: 'europe',       confed: 'UEFA',                  colors: ['#ED2939','#FFFFFF','#ED2939'], flag: 'AT' },
  { slug: 'belgium',      name: 'Belgium',              sub: 'RED DEVILS',            region: 'europe',       confed: 'UEFA',                  colors: ['#000000','#FAE042','#ED2939'], flag: 'BE' },
  { slug: 'bosnia',       name: 'Bosnia & Herzegovina', sub: 'ZMAJEVI',               region: 'europe',       confed: 'UEFA',                  colors: ['#002F6C','#FFCD00','#FFFFFF'], flag: 'BA' },
  { slug: 'croatia',      name: 'Croatia',              sub: 'VATRENI',               region: 'europe',       confed: 'UEFA',                  colors: ['#FF0000','#FFFFFF','#171796'], flag: 'HR' },
  { slug: 'czechia',      name: 'Czechia',              sub: 'NÁRODÁK',               region: 'europe',       confed: 'UEFA',                  colors: ['#D7141A','#FFFFFF','#11457E'], flag: 'CZ' },
  { slug: 'england',      name: 'England',              sub: 'THREE LIONS KIT',       region: 'europe',       confed: 'UEFA', featured: true,  colors: ['#FFFFFF','#CF081F','#FFFFFF'], flag: 'EN' },
  { slug: 'france',       name: 'France',               sub: 'LES BLEUS',             region: 'europe',       confed: 'UEFA', featured: true,  colors: ['#002395','#FFFFFF','#ED2939'], flag: 'FR' },
  { slug: 'germany',      name: 'Germany',              sub: 'DIE MANNSCHAFT',        region: 'europe',       confed: 'UEFA',                  colors: ['#000000','#DD0000','#FFCE00'], flag: 'DE' },
  { slug: 'netherlands',  name: 'Netherlands',          sub: 'ORANJE',                region: 'europe',       confed: 'UEFA',                  colors: ['#FF6600','#FFFFFF','#21468B'], flag: 'NL' },
  { slug: 'norway',       name: 'Norway',               sub: 'DRILLOS',               region: 'europe',       confed: 'UEFA',                  colors: ['#EF2B2D','#FFFFFF','#002868'], flag: 'NO' },
  { slug: 'portugal',     name: 'Portugal',             sub: 'A SELEÇÃO',             region: 'europe',       confed: 'UEFA',                  colors: ['#006600','#FF0000','#FFD700'], flag: 'PT' },
  { slug: 'scotland',     name: 'Scotland',             sub: 'TARTAN ARMY',           region: 'europe',       confed: 'UEFA',                  colors: ['#0065BD','#FFFFFF','#0065BD'], flag: 'SC' },
  { slug: 'spain',        name: 'Spain',                sub: 'LA ROJA',               region: 'europe',       confed: 'UEFA',                  colors: ['#AA151B','#F1BF00','#AA151B'], flag: 'ES' },
  { slug: 'sweden',       name: 'Sweden',               sub: 'BLÅGULT',               region: 'europe',       confed: 'UEFA',                  colors: ['#006AA7','#FECC00','#006AA7'], flag: 'SE' },
  { slug: 'switzerland',  name: 'Switzerland',          sub: 'NATI',                  region: 'europe',       confed: 'UEFA',                  colors: ['#D52B1E','#FFFFFF','#D52B1E'], flag: 'CH' },
  { slug: 'turkiye',      name: 'Türkiye',              sub: 'AY-YILDIZLILAR',        region: 'europe',       confed: 'UEFA',                  colors: ['#E30A17','#FFFFFF','#E30A17'], flag: 'TR' },
  // CAF
  { slug: 'algeria',      name: 'Algeria',              sub: 'LES FENNECS',           region: 'africa',       confed: 'CAF',                   colors: ['#006633','#FFFFFF','#D21034'], flag: 'DZ' },
  { slug: 'capeverde',    name: 'Cabo Verde',           sub: 'TUBARÕES AZUIS',        region: 'africa',       confed: 'CAF',                   colors: ['#003893','#FFFFFF','#CF2027'], flag: 'CV' },
  { slug: 'drcongo',      name: 'DR Congo',             sub: 'LÉOPARDS',              region: 'africa',       confed: 'CAF',                   colors: ['#007FFF','#F7D618','#CE1021'], flag: 'CD' },
  { slug: 'egypt',        name: 'Egypt',                sub: 'THE PHARAOHS',          region: 'africa',       confed: 'CAF',                   colors: ['#CE1126','#FFFFFF','#000000'], flag: 'EG' },
  { slug: 'ghana',        name: 'Ghana',                sub: 'THE BLACK STARS',       region: 'africa',       confed: 'CAF',                   colors: ['#CE1126','#FCD116','#006B3F'], flag: 'GH' },
  { slug: 'ivorycoast',   name: 'Ivory Coast',          sub: 'LES ÉLÉPHANTS',         region: 'africa',       confed: 'CAF',                   colors: ['#F77F00','#FFFFFF','#009E60'], flag: 'CI' },
  { slug: 'morocco',      name: 'Morocco',              sub: 'ATLAS LIONS',           region: 'africa',       confed: 'CAF',                   colors: ['#C1272D','#006233','#C1272D'], flag: 'MA' },
  { slug: 'senegal',      name: 'Senegal',              sub: 'TERANGA LIONS',         region: 'africa',       confed: 'CAF',                   colors: ['#00853F','#FDEF42','#E31B23'], flag: 'SN' },
  { slug: 'southafrica',  name: 'South Africa',         sub: 'BAFANA BAFANA',         region: 'africa',       confed: 'CAF',                   colors: ['#007749','#FFB612','#DE3831'], flag: 'ZA' },
  { slug: 'tunisia',      name: 'Tunisia',              sub: 'LES AIGLES DE CARTHAGE',region: 'africa',       confed: 'CAF',                   colors: ['#E70013','#FFFFFF','#E70013'], flag: 'TN' },
  // AFC
  { slug: 'australia',    name: 'Australia',            sub: 'SOCCEROOS',             region: 'asia',         confed: 'AFC',                   colors: ['#00843D','#FFCD00','#00843D'], flag: 'AU' },
  { slug: 'iran',         name: 'Iran',                 sub: 'TEAM MELLI',            region: 'asia',         confed: 'AFC',                   colors: ['#239F40','#FFFFFF','#DA0000'], flag: 'IR' },
  { slug: 'iraq',         name: 'Iraq',                 sub: 'LIONS OF MESOPOTAMIA',  region: 'asia',         confed: 'AFC',                   colors: ['#CE1126','#FFFFFF','#000000'], flag: 'IQ' },
  { slug: 'japan',        name: 'Japan',                sub: 'SAMURAI BLUE',          region: 'asia',         confed: 'AFC', featured: true,   colors: ['#0D2C54','#FFFFFF','#BC002D'], flag: 'JP' },
  { slug: 'jordan',       name: 'Jordan',               sub: 'AL-NASHAMA',            region: 'asia',         confed: 'AFC',                   colors: ['#000000','#FFFFFF','#007A3D'], flag: 'JO' },
  { slug: 'qatar',        name: 'Qatar',                sub: 'AL-ANNABI',             region: 'asia',         confed: 'AFC',                   colors: ['#8A1538','#FFFFFF','#8A1538'], flag: 'QA' },
  { slug: 'saudiarabia',  name: 'Saudi Arabia',         sub: 'AL-SUQOOR',             region: 'asia',         confed: 'AFC',                   colors: ['#006C35','#FFFFFF','#006C35'], flag: 'SA' },
  { slug: 'southkorea',   name: 'South Korea',          sub: 'TAEGEUK WARRIORS',      region: 'asia',         confed: 'AFC',                   colors: ['#FFFFFF','#CD2E3A','#0047A0'], flag: 'KR' },
  { slug: 'uzbekistan',   name: 'Uzbekistan',           sub: 'THE WHITE WOLVES',      region: 'asia',         confed: 'AFC',                   colors: ['#0099B5','#FFFFFF','#1EB53A'], flag: 'UZ' },
  // OFC
  { slug: 'newzealand',   name: 'New Zealand',          sub: 'ALL WHITES',            region: 'oceania',      confed: 'OFC',                   colors: ['#000000','#FFFFFF','#CC142B'], flag: 'NZ' },
];

window.W1W_REGIONS = [
  { id: 'concacaf',     name: 'CONCACAF', label: 'North & Central America', tag: 'HOSTS',      blurb: 'Home soil. The continent that lifts the curtain.' },
  { id: 'southamerica', name: 'CONMEBOL', label: 'South America',           tag: 'THE CORE',   blurb: 'Where the game was perfected. Pure rhythm.' },
  { id: 'europe',       name: 'UEFA',     label: 'Europe',                  tag: 'THE ENGINE', blurb: 'Tactical, technical, relentless. The modern machine.' },
  { id: 'africa',       name: 'CAF',      label: 'Africa',                  tag: 'UNTAMED',    blurb: 'Raw speed. Rising force. Nothing fears nothing.' },
  { id: 'asia',         name: 'AFC',      label: 'Asia',                    tag: 'RISING',     blurb: 'Discipline meets dream. The fastest-climbing continent.' },
  { id: 'oceania',      name: 'OFC',      label: 'Oceania',                 tag: 'FRONTIER',   blurb: 'The long journey. Every tournament earned twice over.' },
];

window.W1W_COLLECTIONS = [
  { slug: 'legacy',     name: 'World Cup Legacy',    tagline: 'Commemorating the greatest stages in football history.', blurb: 'Every winning nation. Every final. Woven into one thread.', count: 22, color: '#F3FFCA' },
  { slug: 'host',       name: 'Host Nations 2026',   tagline: 'Three countries. One tournament.',                       blurb: 'Canada, Mexico, United States. The first 48-team stage.',  count: 3,  color: '#CAFD00' },
  { slug: 'underdogs',  name: 'The Underdogs',        tagline: 'Nations punching up.',                                   blurb: 'The sides nobody expected — and the supporters who did.', count: 8,  color: '#D72638' },
  { slug: 'player',     name: 'Player Edition',       tagline: 'Lightweight. Breathable. Pro-grade.',                   blurb: 'The match-wear build. Designed for 90+ minutes.',           count: 12, color: '#F3FFCA' },
];

window.W1W_PRICE = 5;
window.W1W_BUNDLE_TIERS = [
  { qty: 1, label: 'SINGLE',       pct: 0,  desc: 'Your nation.' },
  { qty: 3, label: 'TRIO',         pct: 10, desc: 'Group stage.' },
  { qty: 5, label: 'FIVE-A-SIDE',  pct: 15, desc: 'Enough for the squad.' },
  { qty: 8, label: 'STARTING XI',  pct: 20, desc: 'The full lineup.' },
];
window.W1W_FREE_SHIP_THRESHOLD = 35;
