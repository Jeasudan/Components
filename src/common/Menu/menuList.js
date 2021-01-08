export default{
    data(){
        return{
            menuList: [
                {
                  name: "首页",
                  to: "home",
                  icon: "ios-archive-outline"
                },
                {
                  name: "关于",
                  to: "about",
                  icon: "ios-create-outline"
                },
                {
                  name: "菜单分类1",
                  icon: "md-person",
                  children: [
                    {
                      name: "用户",
                      to: "user"
                    }
                  ]
                },
                {
                  name: "菜单分类2",
                  icon: "ios-copy",
                  children: [
                    {
                      name: "测试",
                      to: "test"
                    }
                  ]
                }
              ]
    
        }
    }
}