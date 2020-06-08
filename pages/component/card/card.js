
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      videourl: {
          type: 'url',
          value: 'hello world'
      },
      videotitle:{
        type: 'string',
        value: 'hello world'
      },
      filmtitle:{
        type: 'string',
        value: 'hello world'
      },
      filmdate:{
        type: 'string',
        value:'1935'
      },
      myProperties:String
  },
    /**
   * 组件的样式生效
   */
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})