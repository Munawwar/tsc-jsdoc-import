Run `npm run tsc`

You should see error

```
index.js:2:18 - error TS2739: Type '{ messageId: string; }' is missing the following properties from type 'NexmoResponse': status, messagePrice

2 const payload = [{
                   ~
3   messageId: 'test',
  ~~~~~~~~~~~~~~~~~~~~
4 }];
  ~
```

Fix them, by uncommenting the two lines below it and run `npm run tsc` again. The declaration files are generated.