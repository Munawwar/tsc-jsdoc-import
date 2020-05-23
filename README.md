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