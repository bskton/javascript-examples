/**
 * Filter an array of objects to find all elements with a property value greater then given number.
 */

const list = [{
  name: 'ivar',
  props: [{
    id: 1,
    value: 2
  },{
    id: 2,
    value: 5
  },{
    id: 3,
    value: 11
  }]
},{
  name: 'ragnar',
  props: [{
    id: 1,
    value: 2
  },{
    id: 2,
    value: 5
  },{
    id: 3,
    value: 10
  }]
},{
  name: 'ubba',
  props: [{
    id: 1,
    value: 20
  },{
    id: 2,
    value: 5
  },{
    id: 3,
    value: 10
  }]
}];

const result = list.filter(function(item) {
  for (let i = 0; i < item.props.length; i++) {
    if (item.props[i].value > 10) {
      return true;
    }
  }
  return false;
});

console.log(result);
