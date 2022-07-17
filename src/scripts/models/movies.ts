export interface Movies {
  sessions: Session[];
  films: Film[];
}

export class Showing {
  film: Film;
  sessions: Session[];

  constructor(film: Film, sessions: Session[]) {
    this.film = film;
    this.sessions = sessions;
  }
}

export interface Film {
  title: string;
  censor: Censor;
  releaseDate: Date;
  synopsis: string;
  spokenLanguage: CountryOfOrigin;
  duration: number;
  countryOfOrigin: CountryOfOrigin;
  corporateId: number;
  event: Event;
  imdbCode: string;
  releaseType: ReleaseType;
  audioLanguage: AudioLanguage;
  originalAudioLanguage: AudioLanguage;
  shortSynopsis: string;
  sortingNumber: number;
  distributorName: string;
  showAsFutureRelease: boolean;
  images: Image[];
  genres: Genre[];
  attributes?: SessionAttributeElement[];
  subtitles: CountryOfOrigin[];
  name: string;
  country: AudioLanguage;
  language: AudioLanguage;
  documentType: FilmDocumentType;
  id: string;
  trailers?: Image[];
  filmPersons?: FilmPerson[];
  _circuit?: Circuit;
}

export enum Circuit {
  KinepolisTheNetherlands = "KinepolisTheNetherlands",
}

export interface SessionAttributeElement {
  isActive: boolean;
  imageUrl: string;
  code: Code;
  promoted: boolean;
  name: Code;
  id: string;
  shortName?: Code;
}

export enum Code {
  KWAngst = "KW Angst",
  KWDiscrim = "KW Discrim",
  KWDrugs = "KW Drugs",
  KWGeweld = "KW Geweld",
  KWSeks = "KW Seks",
  KWTaal = "KW Taal",
  LaserU = "Laser U",
  Mx4D = "MX4D",
  Nv = "NV",
  ScreenX = "ScreenX",
  The3D = "3D",
}

export enum AudioLanguage {
  De = "DE",
  En = "EN",
  Es = "ES",
  Fr = "FR",
  It = "IT",
  Ka = "KA",
  Nl = "NL",
  No = "NO",
}

export interface Censor {
  isActive: boolean;
  iconUrl: string;
  minimumAge: number;
  name: CensorName;
  id: string;
}

export enum CensorName {
  All = "ALL",
  Tbc = "TBC",
  The12 = "12+",
  The14 = "14+",
  The16 = "16+",
  The18 = "18+",
  The6 = "6+",
  The9 = "9+",
}

export interface CountryOfOrigin {
  code?: string;
  name?: string;
  id?: string;
  isActive?: boolean;
}

export enum FilmDocumentType {
  Film = "film",
}

export interface Event {
  isActive: boolean;
  shortName?: ShortName;
  description?: string;
  code?: string;
  name?: EventName;
  id?: string;
}

export enum EventName {
  Ballet = "Ballet",
  BalletLive = "Ballet Live",
  Bbb = "BBB",
  ConcertLive = "Concert live",
  ConcertReprise = "Concert reprise",
  Filmclub = "Filmclub",
  LadiesAtTheMovies = "Ladies at the Movies",
  LadiesWeek = "Ladies Week",
  Marathon = "Marathon",
  Opera = "Opera",
  OperaLive = "Opera Live",
  SeniorsAtTheMovies = "Seniors at the Movies",
  SpecialEvent = "Special event",
}

export enum ShortName {
  BALRepr = "BalRepr",
  BalletLive = "BalletLive",
  ConcertLiv = "ConcertLiv",
  ConcertRec = "ConcertRec",
  Filmclub = "Filmclub",
  LadMOV = "Lad@Mov",
  LadiesWeek = "LadiesWeek",
  MenMOV = "Men@Mov",
  Mrt = "MRT_",
  OperLive = "OperLive",
  OperRepr = "OperRepr",
  SenMOV = "Sen@Mov",
  SpecialEv = "SpecialEv",
}

export interface FilmPerson {
  firstName: string;
  lastName: string;
  role: Role;
  selligentId: string;
  id: string;
  pictureUrl?: string;
  detailsUrl?: string;
}

export enum Role {
  A = "A",
  D = "D",
}

export interface Genre {
  selligentId: string;
  shortName: string;
  id: number;
  name: string;
}

export interface Image {
  mediaClass: MediaClass;
  lastModificationDate: Date;
  mediaType: MediaType;
  url: string;
}

export enum MediaClass {
  Image = "Image",
  Trailer = "Trailer",
}

export enum MediaType {
  Backdrop = "Backdrop",
  PosterGraphic = "Poster Graphic",
  Still = "Still",
  Trailer = "Trailer",
}

export enum ReleaseType {
  Empty = "",
  KinepolisTheNetherlands = "Kinepolis The Netherlands",
}

export interface Session {
  complexOperator: ComplexOperator;
  documentType: SessionDocumentType;
  country: AudioLanguage;
  language: AudioLanguage;
  showtime: Date;
  businessDay: Date;
  hall: number;
  vistaSessionId: number;
  hasSeatingPlan: boolean;
  hasSpecialSeating: boolean;
  hasCosySeating: boolean;
  isSoldOut: boolean;
  isSneakPreview: boolean;
  isPublicScreening: boolean;
  circuit: Circuit;
  event?: Event;
  film: SessionFilm;
  cinemaLabel: CinemaLabel;
  mainComplex: ComplexOperator;
  sessionAttributes?: SessionAttributeElement[];
  sessionSubtitles?: SessionSubtitle[];
  id: string;
}

export enum CinemaLabel {
  CineastEnschedeCentrum = "Cineast Enschede (centrum)",
  Cinerama = "Cinerama",
  KinepolisAlmere = "Kinepolis Almere",
  KinepolisBreda = "Kinepolis Breda",
  KinepolisDenBosch = "Kinepolis Den Bosch",
  KinepolisDenHelder = "Kinepolis Den Helder",
  KinepolisDordrecht = "Kinepolis Dordrecht",
  KinepolisEmmen = "Kinepolis Emmen",
  KinepolisEnschede = "Kinepolis Enschede",
  KinepolisGroningen = "Kinepolis Groningen",
  KinepolisHaarlem = "Kinepolis Haarlem",
  KinepolisHoofddorp = "Kinepolis Hoofddorp",
  KinepolisHuizen = "Kinepolis Huizen",
  KinepolisJaarbeursUtrecht = "Kinepolis Jaarbeurs Utrecht",
  KinepolisLeidschendam = "Kinepolis Leidschendam",
  KinepolisOSS = "Kinepolis Oss",
  KinepolisSchagen = "Kinepolis Schagen",
  KinepolisSpijkenisse = "Kinepolis Spijkenisse",
  KinepolisZoetermeer = "Kinepolis Zoetermeer",
  UtrechtCity = "Utrecht City",
}

export enum ComplexOperator {
  Bosch = "BOSCH",
  Breda = "BREDA",
  Dord = "DORD",
  Leids = "LEIDS",
  Nhmag = "NHMAG",
  Nhmee = "NHMEE",
  Nhsch = "NHSCH",
  Spijk = "SPIJK",
  Ualm = "UALM",
  Udhel = "UDHEL",
  Uemm = "UEMM",
  Uoss = "UOSS",
  Utre = "UTRE",
  Uzoet = "UZOET",
  Wcin = "WCIN",
  Wcine = "WCINE",
  Wcity = "WCITY",
  Wcst = "WCST",
  Wgrn = "WGRN",
  Whuiz = "WHUIZ",
}

export enum SessionDocumentType {
  Session = "session",
}

export interface SessionFilm {
  format: Format;
  event?: CountryOfOrigin;
  corporateId: number;
  id: string;
}

export interface Format {
  name: FormatName;
  id: string;
  attributes?: FormatAttribute[];
}

export interface FormatAttribute {
  attributeHOPK: string;
  imageUrl: string;
  salesChannels: any[];
  shortName: Code;
}

export enum FormatName {
  LaserUltra2D = "Laser Ultra 2D",
  LaserUltra3D = "Laser Ultra 3D",
  Mx4D2D = "MX4D 2D",
  Mx4D3D = "MX4D 3D",
  ScreenX2D = "ScreenX 2D",
  The2D = "2D",
  The3D = "3D",
}

export interface SessionSubtitle {
  id: string;
}

export class MoviesConverter {
  public static fromJson(json: string): Movies {
    return cast(JSON.parse(json), r("Movies"));
  }

  public static toJson(value: Movies): string {
    return JSON.stringify(uncast(value, r("Movies")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Movies: o(
    [
      { json: "sessions", js: "sessions", typ: a(r("Session")) },
      { json: "films", js: "films", typ: a(r("Film")) },
    ],
    false
  ),
  Film: o(
    [
      { json: "title", js: "title", typ: "" },
      { json: "censor", js: "censor", typ: r("Censor") },
      { json: "releaseDate", js: "releaseDate", typ: Date },
      { json: "synopsis", js: "synopsis", typ: "" },
      {
        json: "spokenLanguage",
        js: "spokenLanguage",
        typ: r("CountryOfOrigin"),
      },
      { json: "duration", js: "duration", typ: 0 },
      {
        json: "countryOfOrigin",
        js: "countryOfOrigin",
        typ: r("CountryOfOrigin"),
      },
      { json: "corporateId", js: "corporateId", typ: 0 },
      { json: "event", js: "event", typ: r("Event") },
      { json: "imdbCode", js: "imdbCode", typ: "" },
      { json: "releaseType", js: "releaseType", typ: r("ReleaseType") },
      { json: "audioLanguage", js: "audioLanguage", typ: r("AudioLanguage") },
      {
        json: "originalAudioLanguage",
        js: "originalAudioLanguage",
        typ: r("AudioLanguage"),
      },
      { json: "shortSynopsis", js: "shortSynopsis", typ: "" },
      { json: "sortingNumber", js: "sortingNumber", typ: 0 },
      { json: "distributorName", js: "distributorName", typ: "" },
      { json: "showAsFutureRelease", js: "showAsFutureRelease", typ: true },
      { json: "images", js: "images", typ: a(r("Image")) },
      { json: "genres", js: "genres", typ: a(r("Genre")) },
      {
        json: "attributes",
        js: "attributes",
        typ: u(undefined, a(r("SessionAttributeElement"))),
      },
      { json: "subtitles", js: "subtitles", typ: a(r("CountryOfOrigin")) },
      { json: "name", js: "name", typ: "" },
      { json: "country", js: "country", typ: r("AudioLanguage") },
      { json: "language", js: "language", typ: r("AudioLanguage") },
      { json: "documentType", js: "documentType", typ: r("FilmDocumentType") },
      { json: "id", js: "id", typ: "" },
      { json: "trailers", js: "trailers", typ: u(undefined, a(r("Image"))) },
      {
        json: "filmPersons",
        js: "filmPersons",
        typ: u(undefined, a(r("FilmPerson"))),
      },
      { json: "_circuit", js: "_circuit", typ: u(undefined, r("Circuit")) },
    ],
    false
  ),
  SessionAttributeElement: o(
    [
      { json: "isActive", js: "isActive", typ: true },
      { json: "imageUrl", js: "imageUrl", typ: "" },
      { json: "code", js: "code", typ: r("Code") },
      { json: "promoted", js: "promoted", typ: true },
      { json: "name", js: "name", typ: r("Code") },
      { json: "id", js: "id", typ: "" },
      { json: "shortName", js: "shortName", typ: u(undefined, r("Code")) },
    ],
    false
  ),
  Censor: o(
    [
      { json: "isActive", js: "isActive", typ: true },
      { json: "iconUrl", js: "iconUrl", typ: "" },
      { json: "minimumAge", js: "minimumAge", typ: 0 },
      { json: "name", js: "name", typ: r("CensorName") },
      { json: "id", js: "id", typ: "" },
    ],
    false
  ),
  CountryOfOrigin: o(
    [
      { json: "code", js: "code", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "id", js: "id", typ: u(undefined, "") },
      { json: "isActive", js: "isActive", typ: u(undefined, true) },
    ],
    false
  ),
  Event: o(
    [
      { json: "isActive", js: "isActive", typ: true },
      { json: "shortName", js: "shortName", typ: u(undefined, r("ShortName")) },
      { json: "description", js: "description", typ: u(undefined, "") },
      { json: "code", js: "code", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, r("EventName")) },
      { json: "id", js: "id", typ: u(undefined, "") },
    ],
    false
  ),
  FilmPerson: o(
    [
      { json: "firstName", js: "firstName", typ: "" },
      { json: "lastName", js: "lastName", typ: "" },
      { json: "role", js: "role", typ: r("Role") },
      { json: "selligentId", js: "selligentId", typ: "" },
      { json: "id", js: "id", typ: "" },
      { json: "pictureUrl", js: "pictureUrl", typ: u(undefined, "") },
      { json: "detailsUrl", js: "detailsUrl", typ: u(undefined, "") },
    ],
    false
  ),
  Genre: o(
    [
      { json: "selligentId", js: "selligentId", typ: "" },
      { json: "shortName", js: "shortName", typ: "" },
      { json: "id", js: "id", typ: 0 },
      { json: "name", js: "name", typ: "" },
    ],
    false
  ),
  Image: o(
    [
      { json: "mediaClass", js: "mediaClass", typ: r("MediaClass") },
      { json: "lastModificationDate", js: "lastModificationDate", typ: Date },
      { json: "mediaType", js: "mediaType", typ: r("MediaType") },
      { json: "url", js: "url", typ: "" },
    ],
    false
  ),
  Session: o(
    [
      {
        json: "complexOperator",
        js: "complexOperator",
        typ: r("ComplexOperator"),
      },
      {
        json: "documentType",
        js: "documentType",
        typ: r("SessionDocumentType"),
      },
      { json: "country", js: "country", typ: r("AudioLanguage") },
      { json: "language", js: "language", typ: r("AudioLanguage") },
      { json: "showtime", js: "showtime", typ: Date },
      { json: "businessDay", js: "businessDay", typ: Date },
      { json: "hall", js: "hall", typ: 0 },
      { json: "vistaSessionId", js: "vistaSessionId", typ: 0 },
      { json: "hasSeatingPlan", js: "hasSeatingPlan", typ: true },
      { json: "hasSpecialSeating", js: "hasSpecialSeating", typ: true },
      { json: "hasCosySeating", js: "hasCosySeating", typ: true },
      { json: "isSoldOut", js: "isSoldOut", typ: true },
      { json: "isSneakPreview", js: "isSneakPreview", typ: true },
      { json: "isPublicScreening", js: "isPublicScreening", typ: true },
      { json: "circuit", js: "circuit", typ: r("Circuit") },
      { json: "event", js: "event", typ: u(undefined, r("Event")) },
      { json: "film", js: "film", typ: r("SessionFilm") },
      { json: "cinemaLabel", js: "cinemaLabel", typ: r("CinemaLabel") },
      { json: "mainComplex", js: "mainComplex", typ: r("ComplexOperator") },
      {
        json: "sessionAttributes",
        js: "sessionAttributes",
        typ: u(undefined, a(r("SessionAttributeElement"))),
      },
      {
        json: "sessionSubtitles",
        js: "sessionSubtitles",
        typ: u(undefined, a(r("SessionSubtitle"))),
      },
      { json: "id", js: "id", typ: "" },
    ],
    false
  ),
  SessionFilm: o(
    [
      { json: "format", js: "format", typ: r("Format") },
      { json: "event", js: "event", typ: u(undefined, r("CountryOfOrigin")) },
      { json: "corporateId", js: "corporateId", typ: 0 },
      { json: "id", js: "id", typ: "" },
    ],
    false
  ),
  Format: o(
    [
      { json: "name", js: "name", typ: r("FormatName") },
      { json: "id", js: "id", typ: "" },
      {
        json: "attributes",
        js: "attributes",
        typ: u(undefined, a(r("FormatAttribute"))),
      },
    ],
    false
  ),
  FormatAttribute: o(
    [
      { json: "attributeHOPK", js: "attributeHOPK", typ: "" },
      { json: "imageUrl", js: "imageUrl", typ: "" },
      { json: "salesChannels", js: "salesChannels", typ: a("any") },
      { json: "shortName", js: "shortName", typ: r("Code") },
    ],
    false
  ),
  SessionSubtitle: o([{ json: "id", js: "id", typ: "" }], false),
  Circuit: ["KinepolisTheNetherlands"],
  Code: [
    "KW Angst",
    "KW Discrim",
    "KW Drugs",
    "KW Geweld",
    "KW Seks",
    "KW Taal",
    "Laser U",
    "MX4D",
    "NV",
    "ScreenX",
    "3D",
  ],
  AudioLanguage: ["DE", "EN", "ES", "FR", "IT", "KA", "NL", "NO"],
  CensorName: ["ALL", "TBC", "12+", "14+", "16+", "18+", "6+", "9+"],
  FilmDocumentType: ["film"],
  EventName: [
    "Ballet",
    "Ballet Live",
    "BBB",
    "Concert live",
    "Concert reprise",
    "Filmclub",
    "Ladies at the Movies",
    "Ladies Week",
    "Marathon",
    "Opera",
    "Opera Live",
    "Seniors at the Movies",
    "Special event",
  ],
  ShortName: [
    "BalRepr",
    "BalletLive",
    "ConcertLiv",
    "ConcertRec",
    "Filmclub",
    "Lad@Mov",
    "LadiesWeek",
    "Men@Mov",
    "MRT_",
    "OperLive",
    "OperRepr",
    "Sen@Mov",
    "SpecialEv",
  ],
  Role: ["A", "D"],
  MediaClass: ["Image", "Trailer"],
  MediaType: ["Backdrop", "Poster Graphic", "Still", "Trailer"],
  ReleaseType: ["", "Kinepolis The Netherlands"],
  CinemaLabel: [
    "Cineast Enschede (centrum)",
    "Cinerama",
    "Kinepolis Almere",
    "Kinepolis Breda",
    "Kinepolis Den Bosch",
    "Kinepolis Den Helder",
    "Kinepolis Dordrecht",
    "Kinepolis Emmen",
    "Kinepolis Enschede",
    "Kinepolis Groningen",
    "Kinepolis Haarlem",
    "Kinepolis Hoofddorp",
    "Kinepolis Huizen",
    "Kinepolis Jaarbeurs Utrecht",
    "Kinepolis Leidschendam",
    "Kinepolis Oss",
    "Kinepolis Schagen",
    "Kinepolis Spijkenisse",
    "Kinepolis Zoetermeer",
    "Utrecht City",
  ],
  ComplexOperator: [
    "BOSCH",
    "BREDA",
    "DORD",
    "LEIDS",
    "NHMAG",
    "NHMEE",
    "NHSCH",
    "SPIJK",
    "UALM",
    "UDHEL",
    "UEMM",
    "UOSS",
    "UTRE",
    "UZOET",
    "WCIN",
    "WCINE",
    "WCITY",
    "WCST",
    "WGRN",
    "WHUIZ",
  ],
  SessionDocumentType: ["session"],
  FormatName: [
    "Laser Ultra 2D",
    "Laser Ultra 3D",
    "MX4D 2D",
    "MX4D 3D",
    "ScreenX 2D",
    "2D",
    "3D",
  ],
};
