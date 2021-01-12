### Prospective API

```js
const tn = tuning();

// Tuning a step down
tn.step(-1);

// Tune the second string a whole step down
tn.step(-1, 2);

// Custom tuning
const tn = tune(["E2", "A2", "D3", "G3", "B3", "E4"]);
```

Get all

```js
semitone().tuning(tuning).frets(24);
```
