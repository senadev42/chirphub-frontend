interface Birdhouse {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  birds: number;
  eggs: number;
}

interface Log {
  id: string;
  birds: number;
  eggs: number;
  date: string;
}

interface BirdhouseWithLog extends Birdhouse {
  logs: Log[];
}

interface Payload {
  loading: boolean;
  loaded: boolean;
  error: string;
}
