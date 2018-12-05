console.log('kkfff111');
const convert = items => items.reduce((acc, [key, value]) =>
  ({ ...acc, [key]: value instanceof Array ? convert(value) : value }), {});

  
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygna2tmZmYxMTEnKTtcbmNvbnN0IGNvbnZlcnQgPSBpdGVtcyA9PiBpdGVtcy5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PlxuICAoeyAuLi5hY2MsIFtrZXldOiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gY29udmVydCh2YWx1ZSkgOiB2YWx1ZSB9KSwge30pO1xuXG4gICJdfQ==
