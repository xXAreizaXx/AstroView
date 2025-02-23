type TPlanet = {
    alternativeName: string;
    aphelion:        number;
    argPeriapsis:    number;
    aroundPlanet:    AroundPlanet;
    avgTemp:         number;
    axialTilt:       number;
    bodyType:        string;
    density:         number;
    dimension:       string;
    discoveredBy:    string;
    discoveryDate:   string;
    eccentricity:    number;
    englishName:     string;
    equaRadius:      number;
    escape:          number;
    flattening:      number;
    gravity:         number;
    id:              string;
    inclination:     number;
    isPlanet:        boolean;
    longAscNode:     number;
    mainAnomaly:     number;
    mass:            Mass;
    meanRadius:      number;
    moons:           Moon[];
    name:            string;
    perihelion:      number;
    polarRadius:     number;
    rel:             string;
    semimajorAxis:   number;
    sideralOrbit:    number;
    sideralRotation: number;
    vol:             Vol;
}

type AroundPlanet = {
    planet: string;
    rel:    string;
}

type Mass = {
    massExponent: number;
    massValue:    number;
}

type Moon = {
    moon: string;
    rel:  string;
}

type Vol = {
    volExponent: number;
    volValue:    number;
}

type TGetPlanetsParams = {
    page?: number;
    search?: string;
    order?: "asc" | "desc";
};