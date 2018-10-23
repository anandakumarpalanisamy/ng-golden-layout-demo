
export let CONFIG = {
  main: {
    content: [{
        type: 'row',
        content: [{
          type: 'component',
          componentName: 'user',
          componentState: {
            message:"Top Right"
          }
        }
        // {
        //   type: 'column',
        //   content: [{
        //     title: '2',
        //     type: 'component',
        //     componentName: 'main',
        //     componentState: {
        //       // message:"Top Right"
        //       // component: GoldenLayoutComponent
        //     }
        //   }, {
        //     title: '3',
        //     type: 'component',
        //     componentName: 'main',
        //     componentState: {
        //       // message:"Bottom Right"
        //       // component: GoldenLayoutComponent
        //     }
        //   }]
        // }
      ]
    }]
  }
};
