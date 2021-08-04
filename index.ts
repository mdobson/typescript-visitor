interface TireVisitor {
  visitOffroad(t: Offroad): void;
  visitAllWeather(t: AllWeather): void;
}


abstract class Tire {
  abstract accept(tv: TireVisitor): void;
}

class Offroad extends Tire {
  accept(tv: TireVisitor): void {
    console.log(`Accepting TireVisitor in Offroad`);
    tv.visitOffroad(this);
  }

  public query(): string {
    return `Offroad tires engaged`;
  }
}

class AllWeather extends Tire {
  private tread = "minimal";
  
  accept(tv: TireVisitor): void {
    console.log(`Accepting TireVisitor in AllWeather`);
    tv.visitAllWeather(this);
  }

  public status(): string {
    return `Tread Status for AllWeather: ${this.tread}`;
  }
}

class ConcreteTireVisitor implements TireVisitor {
  visitAllWeather(t: AllWeather) {
    console.log(`Visiting allweather: ${t.status()}`);
  }

  visitOffroad(t: Offroad) {
    console.log(`Visiting offroad: ${t.query()}`);
  }
}

const visitor = new ConcreteTireVisitor();
const tires = [new Offroad(), new AllWeather(), new Offroad(), new AllWeather()];

tires.forEach((t: Tire) => {
  t.accept(visitor);
})