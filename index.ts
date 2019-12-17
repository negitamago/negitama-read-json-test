import { of } from 'rxjs'; 
import { map,tap,repeat } from 'rxjs/operators';
import {JsonObject, JsonProperty} from "json2typescript";


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

// source.subscribe(x => console.log(x));

const nekoArray = [1, 2, 3];

const neko = of(null)
.pipe(
  repeat(nekoArray.length),
  tap(_ => console.log(nekoArray.pop()))
)

neko.subscribe();
