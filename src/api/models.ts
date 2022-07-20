export namespace Models {
	export class Showing {
		film: Film;
		sessions: Session[];

		constructor(film: Film, sessions: Session[]) {
			this.film = film;
			this.sessions = sessions;
		}
	}

	export interface Movies {
		sessions: Session[];
		films: Film[];
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
		BalletLive = "Ballet (live)",
		Bbb = "BBB",
		CinePlus = "CinePlus",
		Concert = "Concert",
		ConcertLive = "Concert (live)",
		Filmhuis = "Filmhuis",
		LadiesNight = "Ladies Night",
		LadiesWeek = "Ladies Week",
		Marathon = "Marathon",
		Opera = "Opera",
		OperaLive = "Opera (live)",
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
		showtime: string;
		businessDay: string;
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
}
